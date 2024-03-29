import React, { Component } from "react";
import { Button, Table } from "reactstrap";

class CardList extends Component {
  renderCart() {
    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Unit In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color={"danger"}
                  onClick={() => this.props.removeFromCard(cartItem.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return <>{this.renderCart()}</>;
  }
}

export default CardList;
