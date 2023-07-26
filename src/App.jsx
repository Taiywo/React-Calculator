import { useState } from "react";

useState
const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    setDisplayValue((prevValue) =>
      prevValue === '0' ? String(value) : prevValue + value
    );
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handleCalculate = () => {
      setDisplayValue(eval(displayValue).toString());

  };




  return (
    <div className="calculator">
      <div className="display">{displayValue}</div>
      <div className="buttons">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={handleClear}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleClick('/')}>/</button>
       
      </div>
    </div>
  );
};

export default Calculator;
