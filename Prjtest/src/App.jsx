import { Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col } from "reactstrap";
import { Component } from "react";
export default class App extends Component {
  state = {
    currentCategory: "",
  };
  chanceCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };
  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <>
        <Row>
          <Navi />
        </Row>
        <Container>
          <Row>
            <Col lg="3">
              <CategoryList
                chanceCategory={this.chanceCategory}
                info={categoryInfo}
              />
            </Col>
            <Col lg="9">
              <ProductList
                currentCategory={this.state.currentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
