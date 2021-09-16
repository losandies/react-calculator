import { useState } from 'react';
import './App.css';
import CalculatorKeys from './components/CalculatorKeys';
import CalculatorResult from './components/CalculatorResult';
const stringMath = require('string-math');

function App() {
	const [input, setInput] = useState([]);

	const handleClick = (button) => {
		if (button === '.') {
			checkMultipleDecimal(input);
		} else if (
			button === '+' ||
			button === '/' ||
			button === '*' ||
			button === '-'
		) {
			checkAdjacentOperators(input, button);
		} else if (button === '=') {
			calculate(input).then(setInput([]));
		} else if (button === 'AC') {
			clearAll();
		} else if (button === 'C') {
			backspace();
		} else {
			setInput(input + button);
		}
	};

	const checkMultipleDecimal = (array) => {
		if (array.includes('.')) {
			return null;
		} else {
			setInput(input + '.');
		}
	};

	const checkAdjacentOperators = (array, button) => {
		if (array.at(-1) === button) {
			return null;
		} else {
			setInput(input + button);
		}
	};

	const clearAll = () => {
		setInput([]);
	};

	const backspace = () => {
		setInput(input.slice(0, -1));
	};

	const calculate = (array) => {
		const answer = stringMath(array.toString());
		setInput(answer);
	};

	return (
		<div className="app">
			<CalculatorResult input={input} />
			<CalculatorKeys
				handleClick={handleClick}
				clearAll={clearAll}
				clearOne={backspace}
			/>
		</div>
	);
}

export default App;
