import React, {useState} from 'react';
import './Band.css';
import Basil from './Solo_Basil.webp'
import Leo from './Solo_Leo.webp'
import Manu from './Solo_Manu.webp'
import Stefan from './Solo_Stefan.webp'





function Band() {

  const [show1,setShow1] = useState(false);
  

  function Enter1 (e) {
    setShow1(true);
    console.log(show1);
   }

   function Leave1 (e) {
    setShow1(false);
    console.log(show1);
   }


  const [show2,setShow2] = useState(false);
  
  function Enter2 (e) {
    setShow2(true);
    console.log(show2);
   }

   function Leave2 (e) {
    setShow2(false);
    console.log(show2);
   }
   
   
  const [show3,setShow3] = useState(false);
  
  function Enter3 (e) {
    setShow3(true);
    console.log(show3);
   }

   function Leave3 (e) {
    setShow3(false);
    console.log(show3);
   }


   // show =  [true, true, false, true] show4 = show[3]
  const [show4,setShow4] = useState(false);
  
  function Enter4 (e) {
    setShow4(true);
    console.log(show4);
   }

   function Leave4 (e) {
    setShow4(false);
    console.log(show4);
   }

   function only1 (e) {
    setShow2(false);
    setShow3(false);
    setShow4(false);
   }

   function only2 (e) {
    setShow1(false);
    setShow3(false);
    setShow4(false);
   }

   function only3 (e) {
    setShow2(false);
    setShow1(false);
    setShow4(false);
   }

   function only4 (e) {
    setShow2(false);
    setShow3(false);
    setShow1(false);
   }
   
  return (  
    <div id='band' style={{ backgroundColor: 'black' }}>
      <div className='Absatz' > 
      <h5 className='Biotitel'>Band/Bio</h5>
      <p className='Textband'> Birdland steht für professionelle Livemusik, welche in Kombination mit viel Leidenschaft für  
    unvergessliche Momente sorgt. Auf Anfrage ist es auch möglich, eine kleinere Formation zu buchen,
    welche optimal zu deinem Anlass passt.</p> </div>
    <div className='Bios' >
       <div className='Quad' onClick={only1} onMouseEnter={Enter1} onMouseLeave={Leave1}>
              {show1?<p className='Biob'> <h5 className='Biot'>Basil Zinsli</h5> 
              gründete 2011  die Acapella Formation "INVIVAS", welche sich von einer Bündner Schülerband 
                zu einer festen Grösse in der Schweizer Musikszene etabliert hat. 
                Im Herbst 2013 begann er sein Bachelorstudium mit Hauptfach Posaune 
                Klassik bei David Bruchez and der Zürcher Hochschule der Künste. Parallel dazu besuchte er Sologesang und 
                bildete sich autodidaktisch in den Bereichen "Producing" und "Arranging" weiter. 
                Diese Vielseitigkeit bewog ihn dazu, für das Masterstudium in die Jazz- Popabteilung zu 
                wechseln, welches er im Fach Popgesang 2019 abschloss. </p>
              :<div className='switch'>
                    <div  className='Crop'> 
                      <img className='Portraits' src={Basil} alt="Basil"></img>
                    </div>
                  <h1 className='Names'>Basil Zinsli</h1>
                  <h3 className='Func'>Lead Singer</h3>
                </div>}
        </div>

        <div className='Quad' onClick={only2} onMouseEnter={Enter2} onMouseLeave={Leave2}>
              {show2?<p className='Biob'> <h5 className='Biot'>Leonardo Simovic</h5> ist 30 Jahre alt und wohnt in Zürich. 
        Er arbeitet als Fullstack Developer bei Auterion. Zu seinen Lieblingsmusikern gehören Bootsy Collins und Victor Wooten. 
        Entsprechend seinen Vorbildern legt er bei Birdland einen soliden Boden für Groove und Harmonie. </p>
              :<div className='switch'>
                    <div  className='Crop'> 
                      <img className='Portraits' src={Leo} alt="Basil"></img>
                    </div>
                  <h1 className='Names'>Leonardo Simovic</h1>
                  <h3 className='Func' >Bass</h3>
                </div>}
        </div>

        <div className='Quad' onClick={only3} onMouseEnter={Enter3} onMouseLeave={Leave3}>
              {show3?<p className='Biob'> <h5 className='Biot'>Manuel Zolliker</h5>ist als Pianist in der Schweizer Gospel-, 
              Pop- und Jazzszene aktiv. Seit seinem Studium an der Zürcher Hochschule 
              der Künste in Jazz-Klavier und Schulmusik II arbeitet er als Klavierlehrer an der 
              Pädagogischen Hochschule in Zürich und als Gymnasiallehrer im Fach Musik. 
              Daneben ist er auch als Chorleiter tätig. </p>
              :<div className='switch'>
                    <div  className='Crop'> 
                      <img className='Portraits' src={Manu} alt="pic"></img>
                    </div>
                  <h1 className='Names'>Manuel Zolliker</h1>
                  <h3 className='Func'>Piano</h3>
                </div>}
        </div>

        <div className='Quad' onClick={only4} onMouseEnter={Enter4} onMouseLeave={Leave4}>
              {show4?<p className='Biob'> <h5 className='Biot'>Stefan Lengg</h5> ist seit dem Abschluss des Musikstudiums an der Swiss Music Academy 
              als Schlagzeuger / 
              Perkussionist im Bereich Pop und Gospel aktiv.
              Nebst dem Privatunterricht arbeitet er in der Herstellung von Kontaktlinsen. </p>
              :<div className='switch'>
                    <div  className='Crop'> 
                      <img className='Portraits' src={Stefan} alt="pic"></img>
                    </div>
                  <h1 className='Names'>Stefan Lengg</h1>
                  <h3 className='Func'>Drums / Booking</h3>
                </div>}
        </div>
    </div>
  </div>  
  )
}

export default Band;
