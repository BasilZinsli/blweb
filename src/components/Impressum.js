import React from 'react';
import './Impressum.css';
import NavAGB from './NavAGB';
import Footer from './Footer';


export default function Impressum  (){
    return(  
        <div className='AGBS'>
        <NavAGB/>
        <div className='FotoAGB'> </div>
            
        <h1 className='IMPTitle'>IMPRESSUM</h1>
        <div classname="Adress">
            <p className='TextAGB1'> Birdland </p>
            <p className='TextAGB2'> Stefan Lengg </p>
            <p className='TextAGB3'> Gottlieberstrasse 17</p>
            <p className='TextAGB4'> 8274 Tägerwilen </p>
            <p className='TextAGB5'> Telefon: +41797307833 </p>
            <p className='TextAGB6'> E-Mail: stefan.lengg@gmail.com </p>
        </div> 
        <Footer/>
    </div>
    );
}
