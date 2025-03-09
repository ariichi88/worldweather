// Result.jsx

const Result = props => {
	return (
		<div>
		    <pre>{JSON.stringify(props, null, 2)}</pre>
		</div>
	)
}

export default Result
