import './App.css';
import { useState } from 'react';
import Table from './components/Table.js';
import Result from './components/Result.js';

export default function App() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [resultValue, setResultValue] = useState(0);
  const [index, setIndex] = useState(0);

  const calculaIMC = () => {
    if (altura <= 0 || peso <= 0) {
      return;
    }

    let imc = peso / (altura * altura);
    setResultValue(imc);

    if (imc < 18.5) {
      setIndex(1);
    } else if (imc < 25) {
      setIndex(2);
    } else if (imc < 30) {
      setIndex(3);
    } else if (imc < 40) {
      setIndex(4);
    } else {
      setIndex(5);
    }
  };

  const limparCampos = () => {
    setPeso(0);
    setAltura(0);
    setResultValue(0);
    setIndex(0);
  };

  return (
    <>
      <h3>Cálculo IMC</h3>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="altura"
            type="number"
            className="validate"
            placeholder="Metros"
            step="0.01"
            value={altura > 0 ? altura : ''}
            onChange={(e) => setAltura(e.target.value)}
          />
          <label className="active" htmlFor="altura">
            Altura (ex: 1,60)
          </label>
        </div>
        <div className="input-field col s6">
          <input
            id="peso"
            type="number"
            className="validate"
            placeholder="Quilos"
            step="0.01"
            value={peso > 0 ? peso : ''}
            onChange={(e) => setPeso(e.target.value)}
          />
          <label className="active" htmlFor="peso">
            Peso (ex: 65,3)
          </label>
        </div>
      </div>
      <div className="row">
        <div className="buttonClass">
          <button
            id="buttonCalcular"
            className="waves-effect waves-light btn"
            onClick={calculaIMC}
          >
            Calcular
          </button>
        </div>
        <div className="buttonClass">
          <button
            id="buttonLimpar"
            className="waves-effect waves-light btn"
            onClick={limparCampos}
          >
            Limpar
          </button>
        </div>
      </div>
      <div className="result">
        <Result resultValue={resultValue} />
        <Table index={index} />
      </div>
    </>
  );
}
