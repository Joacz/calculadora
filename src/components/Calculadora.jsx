import React, { useState } from 'react';
import { Pantalla } from './Pantalla';
import { Boton } from './Boton';

export const Calculadora = () => {

	const [resultado, setResultado] = useState('');

	const addValue = value => {
		setResultado(resultado + value);
	};

	const calculate = () => {
		const calculated = eval(resultado);
		setResultado(calculated.toString());
	};

	return (
		<div className='calculadora'>
			<Pantalla resultado={resultado} />
			<div className='calculadora-botones'>
				<div className='botones'>
					<Boton onClick={() => addValue(9)}>9</Boton>
					<Boton onClick={() => addValue(8)}>8</Boton>
					<Boton onClick={() => addValue(7)}>7</Boton>
					<Boton onClick={() => addValue(6)}>6</Boton>
					<Boton onClick={() => addValue(5)}>5</Boton>
					<Boton onClick={() => addValue(4)}>4</Boton>
					<Boton onClick={() => addValue(3)}>3</Boton>
					<Boton onClick={() => addValue(2)}>2</Boton>
					<Boton onClick={() => addValue(1)}>1</Boton>
					<Boton onClick={() => addValue(0)}>0</Boton>
					<Boton onClick={() => addValue(".")}>.</Boton>
					<Boton onClick={() => calculate()}>=</Boton>
				</div>
				<div className='botones-operacion'>
					<Boton onClick={() => addValue("+")}>+</Boton>
					<Boton onClick={() => addValue("-")}>-</Boton>
					<Boton onClick={() => addValue("*")}>*</Boton>
					<Boton onClick={() => addValue("/")}>/</Boton>
				</div>
			</div>

		</div>
	);
};
