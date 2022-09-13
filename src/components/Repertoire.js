import './Repertoire.css';
import Rep from './blrep.json';
import {useState, useEffect} from 'react';


export default function Repertoire() {
  const [searchResult, setSearchResult] = useState(Rep);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect (() =>{

    let boolSearch = Rep.map(x=>(x.Song.toLowerCase().includes(searchTerm) || x.Band.toLowerCase().includes(searchTerm) || x.Genre.toLowerCase().includes(searchTerm)));
    let filteredRep = [];
    
    for(let i=0; i<boolSearch.length;i++){
      if(boolSearch[i]===true){
        filteredRep.push(Rep[i]);
      }
    }
    
    setSearchResult(filteredRep);
  },[searchTerm])

  return (
    
    <div> 
          <div className='Rep' id='Repertoire' > 
            <h5 className='repTitel'>Repertoire</h5>
            <p className='repText'> Hier erhälst du einen kleinen Einblick in unser Repertoire. Songwünsche sind gegen Aufpreis möglich.</p> 
          </div>
      
      <div className="Repertoire">
        
          <form className='form1' autoComplete='off'>
              <button type="submit" disabled style={{display: "none"}} aria-hidden="true"></button>
              <input type="text" id="stext" name="stext" placeholder='Suche' onChange={ (e) => setSearchTerm(e.target.value.toLowerCase())} ></input>
          </form>
        
          <table id="songs">
            <tr>
              <th>Song</th>
              <th>Band</th>
              <th>Genre</th>
            </tr>
            
            {searchResult.map((x, index) => (
              
            <tr>
              <td>{x.Song}</td>
              <td>{x.Band}</td>
              <td>{x.Genre}</td>
            </tr>))}
          </table>   
      </div> 
    </div>        
  );
}

