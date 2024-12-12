import {useState} from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import {GetWeather} from "../wailsjs/go/main/App";

function App() {
	const [city, setCity] = useState("Tokyo");
	const [results, setResults] = useState("Tokyo");

	const getWeather = e => {
		e.preventDefault();
		GetWeather(city).then(setResults);
	}

    return (
        <div id="App">
			<Title/>
		    <Form setCity={setCity} getWeather={getWeather}/>
		    <Results results={results}/>
        </div>
    )
}

export default App
