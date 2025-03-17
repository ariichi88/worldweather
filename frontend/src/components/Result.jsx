// Result.jsx

const Result = props => {

	const str = JSON.stringify(props, null, 2)
	const obj = JSON.parse(str)

	return (
		<div>
		    <div>{obj.result && obj.result.location.country}</div>
		    <div>{obj.result && obj.result.location.name}</div>
		    <div>{obj.result && obj.result.current.temp_c}</div>
		    <img src={obj.result && obj.result.current.condition.icon}/>
		    <div>{obj.result && obj.result.current.condition.text}</div>
		</div>
	)
}

export default Result
