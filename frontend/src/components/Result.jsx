// Result.jsx

const Result = props => {

	const jsonString = JSON.stringify(props, null, 2)

	return (
		<div>
		   <pre>{jsonString}</pre>
		</div>
	)
}

export default Result
