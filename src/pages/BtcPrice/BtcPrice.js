import React, { Component } from "react";
import { connect } from "react-redux";
import { CardBody, Col, Row, Label, Badge, Card, Container } from "reactstrap";

//Action
import { fetchList } from "../../redux/actions/listAction";
//Image
import moneyIcon from "../../assets/images/moneyIcon.svg";

class BtcPrice extends Component {
  state = {
    isChanged: false,
  };
  componentDidMount() {
    const { fetchList } = this.props;
    fetchList("https://api.coindesk.com/v1/bpi/currentprice.json");
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps?.data?.bpi?.USD?.rate_float !==
      this.props?.data?.bpi?.USD?.rate_float
    ) {
      this.setState({ isChanged: true });
    } else if (
      prevProps?.data?.bpi?.USD?.rate_float ===
      this.props?.data?.bpi?.USD?.rate_float
    ) {
      setInterval(async () => {
        this.setState({ isChanged: false });
      }, 10000);
    }
  }

  render() {
    const { data } = this?.props;
    return (
      <React.Fragment>
        <section className="section" style={{ padding: "75px" }}>
          <Container>
          <Card className="w-100 pb-5 pt-5 px-5">
          <Label className='font-size-18 font-weight-700'>Less Dynamic JSON Data from api.coindesk </Label>
          <p className='font-size-16 font-weight-500 text-muted'>
                The part I made by taking instant data from api.coindesk http api.
                Data changes once a minute. It is indicated as a red highlight when there is a change.
              </p>
            <Row className="btc-price">
              
              <Col xs="12" md="12" lg="12" xl="4" className="mt-3 responsive-height">
                <Card className="w-100 " >
                  <CardBody>
                    <div className="d-flex flex-wrap align-items-center align-items-center bg-white pt-2 pb-2">
                      <Badge
                        color="warning"
                        className="badge-pills"
                      >
                        <img src={moneyIcon} />
                      </Badge>

                      <div className="flex-1 ms-3">
                        <div className="d-flex">
                          <Label
                            style={{ fontSize: "19px" }}
                            className="font-weight-400 text-content"
                          >
                            USD
                          </Label>
                        </div>
                        {this?.state?.isChanged === true ? (
                          <div className="hight-lighter px-4">
                            <Label className="font-size-28 font-weight-700">
                            $ {data?.bpi?.USD?.rate_float.toFixed(2)} 
                            </Label>
                          </div>
                        ) : (
                          <Label className="font-size-28 font-weight-700">
                           $ {data?.bpi?.USD?.rate_float.toFixed(2)} 
                          </Label>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="12" lg="12" xl="4" className="mt-3 responsive-height">
                <Card className="w-100">
                  <CardBody>
                    <div className="d-flex flex-wrap align-items-center align-items-center bg-white pt-2 pb-2">
                      <Badge
                        color="warning"
                        className="badge-pills"
                      >
                        <img src={moneyIcon} />
                      </Badge>

                      <div className="flex-1 ms-3">
                        <div className="d-flex">
                          <Label
                            style={{ fontSize: "19px" }}
                            className="font-weight-400 text-content"
                          >
                            GBP
                          </Label>
                        </div>
                        {this?.state?.isChanged === true ? (
                          <div className="hight-lighter px-4">
                            <Label className="font-size-28 font-weight-700">
                            $ {data?.bpi?.GBP?.rate_float.toFixed(2)} 
                            </Label>
                          </div>
                        ) : (
                          <Label className="font-size-28 font-weight-700">
                            $ {data?.bpi?.GBP?.rate_float.toFixed(2)} 
                          </Label>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col xs="12" md="12" lg="12" xl="4" className="mt-3 responsive-height">
                <Card className="w-100">
                  <CardBody>
                    <div className="d-flex flex-wrap align-items-center align-items-center bg-white pt-2 pb-2">
                      <Badge
                        color="warning"
                        className="badge-pills"
                      >
                        <img src={moneyIcon} />
                      </Badge>

                      <div className="flex-1 ms-3">
                        <div className="d-flex">
                          <Label
                            style={{ fontSize: "19px" }}
                            className="font-weight-400 text-content"
                          >
                            EUR
                          </Label>
                        </div>
                        {this?.state?.isChanged === true ? (
                          <div className="hight-lighter px-4">
                            <Label className="font-size-28 font-weight-700">
                            $ {data?.bpi?.EUR?.rate_float.toFixed(2)} 
                            </Label>
                          </div>
                        ) : (
                          <Label className="font-size-28 font-weight-700">
                            $ {data?.bpi?.EUR?.rate_float.toFixed(2)} 
                          </Label>
                        )}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
             
             
            </Row>
            </Card>
          </Container>
          
        </section>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  fetchList: (namespace) => fetchList(namespace),
};

const mapStateToProps = (state) => ({
  data: state.btcPriceData?.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(BtcPrice);
