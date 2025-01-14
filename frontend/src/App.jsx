import {useState} from 'react';
import './App.css';
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import {GetWeather} from "../wailsjs/go/main/App";

function App() {
	const [city, setCity] = useState("Tokyo");
	const [results, setResults] = useState({
	    country: "",
	    cityName: "",
	    temperature: "",
	    conditionText: "",
	    icon: ""
	    })

	const getWeather = e => {
		e.preventDefault();
		GetWeather(city)
			.then(res => res.json())
		    .then(data => setResults({
				country: data.location.country,
				cityName: data.location.name,
				temperature: data.current.temp_c,
				conditionText: data.current.condition.text,
				icon: data.current.condition.icon
			})
		)
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
