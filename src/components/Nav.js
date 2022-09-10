import React from 'react';
import './Nav.css';
import Logo from  './logo.png'; 
import {Link} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa'
import {useState} from 'react';


function Nav(){
    const [mobileList, setMobileList] = useState(false); 

    function toggleList(){
        setMobileList(!mobileList);
        console.log(mobileList);
    }


    return(
        <div className='Frontpage'>
            <div className='Navbar'>
                <img className='logo' src={Logo} alt='logo'></img>

                <button className='hamburger'   onClick={toggleList}>
                    {mobileList ? (<FaTimes size={30} style={{ color: '#ffffff' }} />): (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </button>
                
                
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
            
            {mobileList?(
            <ul className='listMobile'>
               <li> 
                    <Link activeClass="active" onClick={toggleList} to="Home" spy={true} smooth={true} offset={-70} duration={500}><span>Home</span><i></i></Link> 
                </li>
                <li> 
                    <Link activeClass="active" onClick={toggleList} to="band" spy={true} smooth={true} offset={-70} duration={500}><span>Band/Bio</span><i></i></Link>                                                            
                </li>
                <li> 
                    <Link activeClass="active" onClick={toggleList} to="Repertoire" spy={true} smooth={true} offset={-70} duration={500}><span>Repertoire</span><i></i></Link>
                </li>
                <li> 
                    <Link activeClass="active" onClick={toggleList} to="kontakt" spy={true} smooth={true} offset={-70} duration={500}><span>Kontakt</span><i></i></Link>   
                </li> 
            </ul>):<></>}
            
        </div>

    );
}

export default Nav;