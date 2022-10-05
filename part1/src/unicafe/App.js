import { useState } from "react";

const Statistics = (props) => {
	const [good, neutral, bad] = [
		props.data.good.good,
		props.data.neutral.neutral,
		props.data.bad.bad,
	];

	if (good == 0 && neutral == 0 && bad == 0) {
		return (
			<>
				<h2>statistics</h2>
				<p>No statistics</p>
			</>
		);
	} else {
		return (
			<div>
				<table>
					<tbody>
						<StatisticLine text="good" value={good} />
						<StatisticLine text="neutral" value={neutral} />
						<StatisticLine text="bad" value={bad} />
						<StatisticLine
							text="average"
							value={(good - bad) / (good + bad + neutral)}
						/>
						<StatisticLine
							text="positive"
							value={(100 * good) / (good + bad + neutral)}
						/>
					</tbody>
				</table>
			</div>
		);
	}
};

const StatisticLine = (props) => {
	// destructure object
	let { text, value } = props;

	if (text == "positive") {
		value = value + "%";
	}

	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Button = (props) => {
	return (
		<>
			<button onClick={props.func}>{props.text}</button>
		</>
	);
};

const Unicafe = () => {
	const [good, setGood] = useState(0);
	const [bad, setBad] = useState(0);
	const [neutral, setNeutral] = useState(0);

	const data = { good: { good }, neutral: { neutral }, bad: { bad } };

	const onClickGood = () => {
		setGood(good + 1);
	};

	const onClickNeutral = () => {
		setNeutral(neutral + 1);
	};

	const onClickBad = () => {
		setBad(bad + 1);
	};

	return (
		<div>
			<h2>give feedback</h2>
			<Button text="good" func={onClickGood} />
			<Button text="neutral" func={onClickNeutral} />
			<Button text="bad" func={onClickBad} />
			<Statistics data={data} />
		</div>
	);
};

export default Unicafe;
