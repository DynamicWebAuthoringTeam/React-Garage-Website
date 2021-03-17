import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from "react";

class ProductDetail extends React.Component {
  state = {
    product: void 0
  }

  async componentDidMount() {
    //const product = await api.getProduct(`/products/${this.props.match.params.id}`);
    const product = "fake"
    this.setState({
      product,
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.product &&
        <div>{this.state.product.name}</div>
        }
      </React.Fragment>
    );
  }
}

  export default ProductDetail;