import React from 'react';
import './App.css';
import {Route, Routes, Switch} from 'react-router-dom';
import MainPage from './MainPage';
import AGB from './components/AGB';
import Impressum from './components/Impressum';

export default function App(){
    return( 
        <div> 
            <Switch>
                
                <Route exact path="/">
                    <MainPage/>
                </Route>
        
                <Route path="/Impressum">
                    <Impressum/>
                </Route>
                
                <Route path="/AGB">
                    <AGB/>
                </Route>

            </Switch>
        </div>   
    );
}



