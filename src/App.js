import './App.css';
import { useState } from "react";

var result = [];
var displayBuff = null;
var sum1, sum2 = null;
var operatorSelector = '';

function App()
{
	const topRow = ['AC', '+/-', '%'];
	const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];
	const bottomRow = ['0', '.'];
	const operators = ['/', 'X', '-', '+', '='];
	var [showResult, setShowResult] = useState("");
	
	const press = (e) =>
	{
		switch(e.target.value)
		{
			case "AC":
				result = [];
				displayBuff = result.toString();
				displayBuff = displayBuff.replaceAll(",", "");
				setShowResult(displayBuff);
			break;
			
			case "=":
				sum2 = result.toString();
				sum2 = sum2.replaceAll(",", "");
				
				switch(operatorSelector)
				{
					case "X":
						displayBuff = parseInt(sum1) * parseInt(sum2);
						setShowResult(displayBuff);
						operatorSelector = null;
					break;
					
					case "-":
						displayBuff = parseInt(sum1) - parseInt(sum2);
						setShowResult(displayBuff);
						operatorSelector = null;
					break;
					
					case "+":
						displayBuff = parseInt(sum1) + parseInt(sum2);
						setShowResult(displayBuff);
						operatorSelector = null;
					break;
					
					default:
					
					break;
				}
				
			break;
			
			case "X":
				sum1 = showResult;
				
				// make result 0
				result = [];
				operatorSelector = 'X';
			break;
			
			case "-":
				sum1 = showResult;
				
				// make result 0
				result = [];
				operatorSelector = '-';
			break;
			
			case "+":
				sum1 = showResult;
				
				// make result 0
				result = [];
				operatorSelector = '+';
			break;
			
			default:
				const buttonPress = e.target.value;
				result = [...result, ...buttonPress];
				
				displayBuff = result.toString();
				displayBuff = displayBuff.replaceAll(",", "");
				setShowResult(displayBuff);
			break;
		}
	}
	
	
  return (
    <div className="wrapper">
		<div className="result">{showResult}</div>
		
		<div className="number-btn">
			{
				topRow.map(
					(topRow, index) => (<button key={index} className="calc-button grey" value={topRow} onClick={press}>{topRow}</button>))
			}
			
			{
				numbers.map(
					(numbers, index) => (<button key={index} className="calc-button grey" value={numbers} onClick={press}>{numbers}</button>))
			}
			
			{
				bottomRow.map(
					(bottomRow, index) => (<button key={index} className={bottomRow === 0 ? "calc-button grey zero-button" : "calc-button grey"} value={bottomRow} onClick={press}>{bottomRow}</button>))
			}
		</div>
		
		<div className="operations-btn">
			{
				operators.map(
					(operators, index) => (<button key={index} className="calc-button orange" value={operators} onClick={press}>{operators}</button>))
			}
		</div>
	</div>
  );
}

export default App;
