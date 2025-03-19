// Form.jsx

const Form = props => {
	return (
		<form>
		    <input type="text" name="city" placeholder="都市名" onChange={e => props.setCity(e.target.value)} value={props.city}/>
		    <button type="submit" onClick={props.getWeather}>都市名</button>
		</form>
	)
}

export default Form
