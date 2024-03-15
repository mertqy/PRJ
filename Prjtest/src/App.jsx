import { Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col } from "reactstrap";
import { Component } from "react";
export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }

  chanceCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getProducts = (id) => {
    let url = "http://localhost:3000/products";
    if (id) {
      url += "?categoryId=" + id;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCard = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find((c) => c.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
  };
  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "List" };

    return (
      <>
        <Row>
          <Navi cart={this.state.cart} />
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
                products={this.state.products}
                addToCard={this.addToCard}
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
