import React from 'react';
import { parse } from 'query-string';
import queryString from 'query-string';

class Products extends React.Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const { location: { search } } = this.props;
    const { page, pageSize } = search;
    // const products = await api.getProducts(`/products?page=${page}&pageSize=${pageSize}`);
    console.log(page)
    console.log(pageSize)
    const products = {
      name : "hey"
    };
    this.setState({
      products,
    });
  }

  render() {
    console.log(this.props.location.search)

    const UrlQueryStrings = this.props.location.search;
    const queryValues = queryString.parse(UrlQueryStrings);

    console.log(queryValues.filter); // Gives "top"
    console.log(queryValues.origin); // Gives "im"

    return(
      <React.Fragment>
        {<div>
          <h1>yo</h1>
         {this.props.location.search}
         <h1></h1>
         {queryValues.filter}
         <h1></h1>
         {queryValues.origin}
          </div>}
      </React.Fragment>
    )
  }
}

  export default Products;