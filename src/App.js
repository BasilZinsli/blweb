import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './MainPage';
import AGB from './components/AGB';
import Impressum from './components/Impressum';

export default function App(){
    return( 
        <div> 
            <Routes > 
                <Route exact path="/blweb-live" element={<MainPage/>} ></Route>
                <Route exact path="/Impressum" element={<Impressum/>}></Route>
                <Route exact path="/AGB" element={<AGB/>}></Route>
            </Routes>
        </div>   
    );
}



