import React from 'react';
import './NavAGB.css';
import Logo from  './logo.png'; 


function NavAGB(){

    return(
        <div className='Frontpage'>
            <div className='Navbar1'>
                <img className='logo' src={Logo} alt='logo'></img>

                
                
                <ul className='list2'>
                    
                    <li> 
                    <a href='/'><span>Home</span><i></i></a> 
                    </li>
                    
                </ul>     
            </div>
            
            
        </div>
    );
}

export default NavAGB;