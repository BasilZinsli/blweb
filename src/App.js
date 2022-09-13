import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import MainPage from './MainPage';
import AGB from './components/AGB';
import Impressum from './components/Impressum';

export default function App(){
    return( 
        <div> 
            <Routes> 
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/Impressum" element={<Impressum/>}></Route>
                <Route path="/AGB" element={<AGB/>}></Route>
            </Routes>
        </div>   
    );
}



