// React Imports
import React from 'react'
import { func, string } from 'prop-types';

//Awesome Font Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';


const Toggle = ({theme,  toggleTheme }) => {
    return (
        <Container onClick={toggleTheme}>
          <h6><FontAwesomeIcon icon={faAdjust}/> Dark/Light</h6>
        </Container>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;