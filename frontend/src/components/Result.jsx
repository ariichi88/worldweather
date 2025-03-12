// Result.jsx

const Result = props => {

	const jsonString = JSON.stringify(props, null, 2)
	const jsonObject = JSON.parse(jsonString)

	return (
		<div>
		    <div>{Object.keys(jsonObject) != 0 && jsonObject.result.current.condition.cloud}</div>
		</div>
	)
}

export default Result
