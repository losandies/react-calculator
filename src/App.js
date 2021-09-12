import './App.css';
import CalculatorKeys from './components/CalculatorKeys';
import CalculatorResult from './components/CalculatorResult';

function App() {
	return (
		<div className="app">
			<CalculatorResult />
			<CalculatorKeys />
		</div>
	);
}

export default App;
