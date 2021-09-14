import React from 'react';
import './CalculatorResult.css';

const CalculatorResult = ({ input }) => {
	return (
		<div className="calcOutput">
			<h1>{input}</h1>
		</div>
	);
};

export default CalculatorResult;
