import { useState } from 'react';
import './App.css';
import CalculatorKeys from './components/CalculatorKeys';
import CalculatorResult from './components/CalculatorResult';
const stringMath = require('string-math');

function App() {
	const [input, setInput] = useState([]);

	const handleClick = (button) => {
		setInput(input + button);

		if (button === '=') {
			calculate(input);
		} else if (button === 'AC') {
			clearAll();
		} else if (button === 'C') {
			backspace();
		}
	};

	const clearAll = () => {
		setInput('');
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
