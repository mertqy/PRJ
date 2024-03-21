import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CategoryList from "../categories/CategoryList.jsx";
import ProductList from "../product/ProductList.jsx";

class DashBoard extends Component {
  render() {
    return (
      <>
        <Row>
          <Col xl={3}>
            <CategoryList />
          </Col>
          <Col xl={9}>
            <ProductList />
          </Col>
        </Row>
      </>
    );
  }
}

export default DashBoard;
