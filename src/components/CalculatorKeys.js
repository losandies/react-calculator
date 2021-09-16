import React from 'react';
import './CalcualtorKeys.css';

const CalculatorKeys = ({ handleClick, clearAll, clearOne }) => {
	return (
		<div className="calculator-buttons">
			<button
				className="small-button"
				value="-"
				onClick={(e) => handleClick(e.target.value)}
			>
				-
			</button>

			<button
				className="small-button"
				value="+"
				onClick={(e) => handleClick(e.target.value)}
			>
				+
			</button>
			<button
				className="small-button"
				value="*"
				onClick={(e) => handleClick(e.target.value)}
			>
				×
			</button>
			<button
				className="small-button"
				value="/"
				onClick={(e) => handleClick(e.target.value)}
			>
				÷
			</button>
			<button
				className="small-button"
				value="7"
				onClick={(e) => handleClick(e.target.value)}
			>
				7
			</button>
			<button
				className="small-button"
				value="8"
				onClick={(e) => handleClick(e.target.value)}
			>
				8
			</button>
			<button
				className="small-button"
				value="9"
				onClick={(e) => handleClick(e.target.value)}
			>
				9
			</button>
			<button
				className="small-button"
				value="C"
				onClick={(e) => handleClick(e.target.value)}
			>
				C
			</button>
			<button
				className="small-button"
				value="4"
				onClick={(e) => handleClick(e.target.value)}
			>
				4
			</button>
			<button
				className="small-button"
				value="5"
				onClick={(e) => handleClick(e.target.value)}
			>
				5
			</button>
			<button
				className="small-button"
				value="6"
				onClick={(e) => handleClick(e.target.value)}
			>
				6
			</button>
			<button
				className="small-button"
				value="AC"
				onClick={(e) => handleClick(e.target.value)}
			>
				AC
			</button>
			<button
				className="small-button"
				value="1"
				onClick={(e) => handleClick(e.target.value)}
			>
				1
			</button>
			<button
				className="small-button"
				value="2"
				onClick={(e) => handleClick(e.target.value)}
			>
				2
			</button>
			<button
				className="small-button"
				value="3"
				onClick={(e) => handleClick(e.target.value)}
			>
				3
			</button>
			<button
				className="small-button"
				value="."
				onClick={(e) => handleClick(e.target.value)}
			>
				.
			</button>
			<button
				className="small-button"
				value="0"
				onClick={(e) => handleClick(e.target.value)}
			>
				0
			</button>
			<button
				className="extended-button"
				value="="
				onClick={(e) => handleClick(e.target.value)}
			>
				=
			</button>
		</div>
	);
};

export default CalculatorKeys;
