import { useState } from 'react';
import './App.css';
import CalculatorKeys from './components/CalculatorKeys';
import CalculatorResult from './components/CalculatorResult';

function App() {
	const [input, setInput] = useState([]);
	const [operator, setOperator] = useState('');

	const handleClick = (button) => {
		const clearAll = () => {
			setInput('');
			setOperator('');
		};

		const backspace = () => {
			setInput(input.pop());
		};

		const calculate = (input) => {};

		if (button === '-' || button === '+' || button === '÷' || button === '×') {
			setOperator(button);
		} else if (button === 'AC') {
			clearAll();
		} else if (button === 'C') {
			backspace();
		} else if (button === '=') {
			calculate(input);
		} else {
			setInput(input + button);
		}

		console.log(operator);
	};

	return (
		<div className="app">
			<CalculatorResult input={input} />
			<CalculatorKeys handleClick={handleClick} />
		</div>
	);
}

export default App;
