import React from 'react'
import Context from '../DataContext';
import { Button } from 'react-bootstrap'

class User extends React.Component {
    static contextType = Context.UserContext;
    render() {
      return <Button>{this.context}</Button>;
    }
  }

function FindUs() {
    return (
        <>
            <User></User>
        </>
    )
}

export default FindUs
