import React from 'react';
import './CalcualtorKeys.css';

const CalculatorKeys = () => {
	return (
		<div className="calculator-buttons">
			<button name="-">-</button>
			<button name="+">+</button>
			<button name="×">×</button>
			<button name="÷">÷</button>

			<button name="7">7</button>
			<button name="8">8</button>
			<button name="9">9</button>
			<button name="c">C</button>

			<button name="4">4</button>
			<button name="5">5</button>
			<button name="6">6</button>
			<button name="ac">AC</button>

			<button name="1">1</button>
			<button name="2">2</button>
			<button name="3">3</button>
			<button name="=">=</button>
		</div>
	);
};

export default CalculatorKeys;
