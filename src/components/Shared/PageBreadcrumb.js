import React, { Component } from "react";
import { Container } from "reactstrap";

class PageBreadcrumb extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <Container className={`breadcrumb ${this.props.className ? this.props.className : ""}`}>
            {this.props.children2 ? this.props.children2 : null}
            <div className="breadcrumb-content">
              {this.props.title && (<h1 className="text-white mb-3 "> {this.props.title}</h1>)}
              {this.props.subtitle && (<h5 className="text-white mb-0"> {this.props.subtitle}</h5>)}
              {this.props.children ? this.props.children : null}
            </div>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageBreadcrumb;
