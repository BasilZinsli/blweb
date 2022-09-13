import React from 'react';
import './AGB.css';
import NavAGB from './NavAGB';
import Footer from './Footer';
import {useEffect} from 'react';

export default function AGB(){
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(  
    <div className='AGBS'>
        <NavAGB/>
        <div className='FotoAGB'> </div>
        <h1 className='Text1AGB'>Datenschutz</h1>
        <p className='Text2AGB'>
        Beim Aufrufen unserer Website speichert der Server 
        bestimmte technische Daten. Zu diesen gehören auch die 
        IP-Adresse, die URL, der Name des Internet Access Providers, 
        das Betriebssystem, die Zugriffszeit sowie das Datum. 
        Dies ist aus technischen Gründen erforderlich, um 
        unsere Website zur Verfügung zu stellen. 
        Personenbezogene Daten werden nur so lange gespeichert, wie notwendig. 
        Sie werden nicht an Dritte weitergegeben. Eingaben über unser 
        Kontaktformular dienen ausschliesslich zur Beantwortung der Anfrage 
        und werden danach wieder gelöscht. Kommt es zu einem Vertragsabschluss, 
        werden die Daten aufgrund gesetzlicher Pflichten länger aufbewahrt.
        </p>
        <Footer/>
    </div>
    );
}
