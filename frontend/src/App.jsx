import {useState} from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Result from './components/Result'
import {Getweather} from "../wailsjs/go/main/App";

App = () => {

    return (
        <div id="App">
		    <Title/>
		    <Form/>
		    <Result/>
        </div>
    )
}

export default App
