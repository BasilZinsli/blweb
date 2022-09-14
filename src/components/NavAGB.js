import React from 'react';
import './NavAGB.css';
import Logo from  './logo.png'; 
import {Link} from 'react-router-dom';

function NavAGB(){

    return(
        <div className='Frontpage'>
            <div className='Navbar1'>
                <img className='logo1' src={Logo} alt='logo1'></img>

                <ul className='list2'>
                    
                    <li> 
                    <Link to='/'><span>Home</span><i></i></Link> 
                    </li>
                    
                </ul>     
            </div>
            
        </div>
    );
}

export default NavAGB;