import React, { Component } from "react";
import { Container } from "reactstrap";

//Components
import BtcPrice from "./BtcPrice";
import StopWatch from "./StopWatch";
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";
import BtcPriceWebSocket from './BtcPriceWebSocket'
export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <PageBreadcrumb title="BTC PRICE" />
        <section className="section">

          <Container>
          <div className="stop-watch-container">
          <BtcPrice />

          </div>
            <StopWatch />
            <div className="stop-watch-container">
             
              <BtcPriceWebSocket />
            </div>
          </Container>
          
        </section>
      </React.Fragment>
    );
  }
}
