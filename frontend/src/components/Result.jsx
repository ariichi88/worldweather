// Result.jsx

const Result = props => {

	const str = JSON.stringify(props, null, 2)
	const obj = JSON.parse(str)

	return (
		<div>
		    <div>{obj.result && obj.result.current.cloud}</div>
		</div>
	)
}

export default Result
