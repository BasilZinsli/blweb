import Nav from './components/Nav';
import Bandtext from './components/Bandtext';
import Band from './components/Band';
import React from 'react'
import Youtube from './components/Youtube';
import Repertoire from './components/Repertoire';
import Form from './components/Form';


function App() {
  return (
      <div>
          <Nav />
          <Bandtext />
          <Youtube/>
          <Band/>
          <Repertoire/> 
          <Form/>
      </div>
  );
}

export default App;
