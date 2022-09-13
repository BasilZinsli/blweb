import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faInstagramSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import {Link} from 'react-router-dom';

export default function Footer(){
    

    return(
        <div className='Footer' id='Footer'>
            <div className='socLinks'>
                <a href='https://www.instagram.com/birdland_band/?hl=de' className='Insta' style={{ border: "none"}}>
                    <FontAwesomeIcon icon={faInstagramSquare} size="2x" color='White' />   
                </a>

                <a href='https://www.youtube.com/channel/UCAg9boOxNWyH3bjmNx7_0Sw' className='Youtube' style={{ border: "none"}}>
                    <FontAwesomeIcon icon={faYoutubeSquare} size="2x" color='White'/>   
                </a>

                <a href='https://www.facebook.com/people/Birdland-Eventband/100075762588480/' className='Facebook' style={{ border: "none"}}>
                    <FontAwesomeIcon icon={faFacebookSquare} size="2x" color='White' /> 
                </a>
            </div>   
            <div className='ImprAGB'>
                <Link to='/Impressum' className='IAGB' style={{ border: "none"}}>
                        Impressum   
                </Link> 
                <Link to='/AGB' className='IAGB' style={{ border: "none"}}>
                        Datenschutz   
                </Link> 
            </div>   

            <div className='Copyright'>
            <p>
            Copyright by Basil Zinsli 2022
            </p>   
            </div>     
        </div>
    );
}

