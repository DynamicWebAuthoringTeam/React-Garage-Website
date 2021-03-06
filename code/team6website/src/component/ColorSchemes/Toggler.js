import React from 'react'
import { func, string } from 'prop-types';
import styled from "styled-components"

//Awesome Font Imports
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdjust } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';

//TODO -- THIS HAS ALL BEEN COPIED WILL NEED RE-WORKED
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;
  }`;

const Toggle = ({theme,  toggleTheme }) => {
    return (

        <Container onClick={toggleTheme}>
          <FontAwesomeIcon icon={faAdjust} />
           Switch Theme
        </Container>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}
export default Toggle;