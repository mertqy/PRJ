/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Button, Table } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <>
        <h3>
          {this.props.currentCategory} {this.props.info.title}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button
                    onClick={() => this.props.addToCard(product)}
                    outline
                    color="success"
                  >
                    add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}
