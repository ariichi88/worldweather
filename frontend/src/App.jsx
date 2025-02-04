import {useState} from "react"
import './App.css'
import Title from "./components/Title"
import Form from "./components/Form"
import Result from "./components/Result"
import {GetWeather} from "../wailsjs/go/main/App"

const App = () => {

    const [city, setCity] = useState("")
	const [result, setResult] = useState("Tokyo")

    const getWeather = e => {
		e.preventDefault()
		GetWeather(city).then(result => setResult(result))
	}

    return (
        <div id="App">
		    <Title />
		    <Form setCity={setCity} getWeather={getWeather}/>
		    <Result result={result}/>
        </div>
    )
}

export default App
