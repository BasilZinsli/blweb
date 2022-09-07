import React from 'react';
import './Header.css';
import Logo from  './logo.png'; 
import {Link} from 'react-scroll';

function Header(){
    return(
            <div className='Navbar'>
                <img className='logo' src={Logo} alt='logo'></img>
                <ul className='list'>
                    <li> 
                        <Link activeClass="active" to="Home" spy={true} smooth={true} offset={-70} duration={500}><span>Home</span><i></i></Link> 
                    </li>
                    <li> 
                        <Link activeClass="active" to="band" spy={true} smooth={true} offset={-70} duration={500}><span>Band/Bio</span><i></i></Link>                                                            
                    </li>
                    <li> 
                        <Link activeClass="active" to="Repertoire" spy={true} smooth={true} offset={-70} duration={500}><span>Repertoire</span><i></i></Link>
                    </li>
                    <li> 
                        <Link activeClass="active" to="kontakt" spy={true} smooth={true} offset={-70} duration={500}><span>Kontakt</span><i></i></Link>   
                    </li>
                </ul>
            </div>
       

    );
}

export default Header;