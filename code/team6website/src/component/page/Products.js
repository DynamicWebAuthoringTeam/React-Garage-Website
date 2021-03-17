import React, { Alert } from 'react';
import queryString from 'query-string';
import  { Redirect } from 'react-router-dom'

class Products extends React.Component {
  state = {
    id: void 0
  }

  render() {
    const queryStrings = this.props.location.search;
    const queryStringValues = queryString.parse(queryStrings);

    const id = queryStringValues.id

    //If not a positive int, redirect to listing page as car with this 'id' will not exist.
    if (id < 1 || id == null || isNaN(id)) {
      return(
         <Redirect to='/carlisting'  />
      )
    }

    //Check if the id exist, extract data from public and render it into the page.

    return(
      <React.Fragment>
        {<div>
          <h1>DETAILS</h1>
          <p>id of car: {id}</p>
          <p>make of car: {id}</p>
          <p>model of car: {id}</p>
          </div>}
      </React.Fragment>
    )
  }
}

  export default Products;