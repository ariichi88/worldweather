import {useState} from "react" 
import './App.css'
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"
import {GetWeather} from "../wailsjs/go/main/App"

const App = () => {

  const [city, setCity] = useState()
    const [result, setResult] = useState()
	
    const getWeather = async e => {
		e.preventDefault()
		GetWeather(city).then(data => setResult(data))
		setCity("")
    }

    return (
        <div id="App">
		    <Title />
		    <Form setCity={setCity} getWeather={getWeather} city={city}/>
		    <Result result={result}/>
        </div>
    )
}

export default App
