// Form.jsx

const Form = () => {
	return (
		<form onSubmit={props.getWeather}>
	        <button type="submit" onClick="">Get Weather</button>
		</form>
	)
}

export default Form
