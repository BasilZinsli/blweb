import React from 'react';
import { useState } from "react";
import './Form.css';
import {useForm} from 'react-hook-form'






function Form() {
 
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    
   

  return (
    

      <div id="kontakt">
        
        <div className='Kontakt'> 
              <h1 className='Kontakttitle'>Kontakt</h1>
              <h5 className='Kontakt1'>
              Schön, dass du auf unserer Seite gelandet bist. Wir
               würden es lieben, 
              dich auf eine musikalische Reise mitzunehmen. </h5>
              
              <h5 className='Kontakt1'>Interesse geweckt oder noch Fragen? Gerne begleiten wir dich dabei! </h5>
              <h5 className='Kontakt1'>booking@birdland-music.ch    |    +41797307833 </h5>
        </div> 
        
        <div className='Background'> 
            <div className='Field'>
              <h1 className='Kontakt2'>Kontaktiere uns!</h1>
              <form onSubmit={handleSubmit((data) => setData(console.log(data)))}>
                  <input className='formel'  {...register("Art der Veranstaltung")} autoComplete="off" placeholder="Art der Veranstaltung" />
                  <input className='formel'  {...register("Ort")} autoComplete="off" placeholder="Ort" />
                  <input className='formel'  {...register("Anzahl Personen")} autoComplete="off" placeholder="Anzahl Personen" />
                  <input className='formel'  {...register("Telefon")} autoComplete="off" placeholder="Telefon" />
                  <input className='formel'  {...register("Datum")} autoComplete="off" placeholder="Datum" />
                  <textarea className='formelNachricht'  {...register("Nachricht" )}  autoComplete="off" placeholder="Nachricht" type="text" />
                  <input className='formels' type="submit" /> 
                  
              </form> 
              
            </div> 
            
        </div>
         
    </div>  
  ); 
}

export default Form;

