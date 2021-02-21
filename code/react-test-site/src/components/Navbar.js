import { Button } from 'bootstrap';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
    
    return (
        <>
        <nav className="navbar" >
            <div className="navbar-container">
                <Link to='/' className='navbar-logo'>
                    SFS <i className='fab fa-typo3'/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/CarListing' className='nav-links' onClick={closeMobileMenu}>
                            Car Listing
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/PartListing' className='nav-links' onClick={closeMobileMenu}>
                            Part Listing
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/SignUp' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>Sign up</Button>}
            </div>
        </nav>
        </>
    );
}

export default Navbar;
