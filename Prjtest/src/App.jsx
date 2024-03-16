import { Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Col } from "reactstrap";
import { Component } from "react";
import alertify from "alertifyjs";
import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound.jsx";
import CardList from "./CardList.jsx";
import FormDemo1 from "./FormDemo1.jsx";
import FormDemo2 from "./FormDemo2.jsx";

export default class App extends Component {
  state = {
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
    alertify.notify(product.productName + " added to cart!", "success");
  };
  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
    alertify.notify(product.productName + " deleted to cart!", "error");
  };
  render() {
    let categoryInfo = { title: "Category List" };
    let productInfo = { title: "List" };

    return (
      <>
        <Row>
          <Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
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
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProductList
                      products={this.state.products}
                      addToCard={this.addToCard}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <CardList
                      cart={this.state.cart}
                      removeFromCard={this.removeFromCart}
                    />
                  }
                />
                <Route path="/form1" element={<FormDemo1 />} />
                <Route path="/form2" element={<FormDemo2 />} />
                <Route element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
