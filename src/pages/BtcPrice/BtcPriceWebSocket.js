
import React, { Component } from 'react'
import { CardBody, Col, Row, Label, Badge, Card, Container } from "reactstrap";

//Image
import moneyIcon from "../../assets/images/moneyIcon.svg";

class BtcPriceWebSocket extends Component {
  state = {
    isChanged: false,
  };

      WebSocketData = () => {
        const ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
        let stockPriceElement = document.getElementById('stock-price')
        let lastPrice = null
        ws.onmessage = (event) => {
          let stockObject = JSON.parse(event.data)
          let price = parseFloat(stockObject.p).toFixed(2);
          stockPriceElement.innerText = "$" + price
          stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'red';
          lastPrice = price
        }
      }
    componentDidMount (){
      
       this.WebSocketData()
      
       
    }
  render() {
    this.WebSocketData()
    return (
      <React.Fragment>
      <section className="section" style={{ padding: "75px" }}>
        <Container>
          <Row className="btc-price">
            <Card className='w-100 pb-5 pt-5 px-5' >
              <Label className='font-size-18 font-weight-700'>More Dynamic Data from Binance WSS API </Label>
              <p className='font-size-16 font-weight-500 text-muted'>
                The part I made by taking instant data from Binance wss api via WebSocket.
                Value is indicated in green for price increases and red for price decreases.
              </p>
              
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
                          <Label className="font-size-28 font-weight-700" id="stock-price">
                          
                          </Label>
                        </div>
                      ) : (
                        <Label className="font-size-28 font-weight-700" id="stock-price">
                         
                        </Label>
                      )}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            </Card>
           
           
           
          </Row>
        </Container>
      </section>
    </React.Fragment>
     
    )
  }
}



export default  BtcPriceWebSocket