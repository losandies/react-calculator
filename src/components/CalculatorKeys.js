import React from 'react';
import './CalcualtorKeys.css';

const CalculatorKeys = ({ handleClick }) => {
	return (
		<div className="calculator-buttons">
			<button value="-" onClick={(e) => handleClick(e.target.value)}>
				-
			</button>

			<button value="+" onClick={(e) => handleClick(e.target.value)}>
				+
			</button>
			<button value="×" onClick={(e) => handleClick(e.target.value)}>
				×
			</button>
			<button value="÷" onClick={(e) => handleClick(e.target.value)}>
				÷
			</button>
			<button value="7" onClick={(e) => handleClick(e.target.value)}>
				7
			</button>
			<button value="8" onClick={(e) => handleClick(e.target.value)}>
				8
			</button>
			<button value="9" onClick={(e) => handleClick(e.target.value)}>
				9
			</button>
			<button value="C" onClick={(e) => handleClick(e.target.value)}>
				C
			</button>
			<button value="4" onClick={(e) => handleClick(e.target.value)}>
				4
			</button>
			<button value="5" onClick={(e) => handleClick(e.target.value)}>
				5
			</button>
			<button value="6" onClick={(e) => handleClick(e.target.value)}>
				6
			</button>
			<button value="AC" onClick={(e) => handleClick(e.target.value)}>
				AC
			</button>
			<button value="1" onClick={(e) => handleClick(e.target.value)}>
				1
			</button>
			<button value="2" onClick={(e) => handleClick(e.target.value)}>
				2
			</button>
			<button value="3" onClick={(e) => handleClick(e.target.value)}>
				3
			</button>
			<button value="=" onClick={(e) => handleClick(e.target.value)}>
				=
			</button>
		</div>
	);
};

export default CalculatorKeys;
