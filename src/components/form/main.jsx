import { useState } from 'react';
import './form.css';

function Form() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();

    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);

    if (pesoNum > 0 && alturaNum > 0) {
      const imcCalculado = pesoNum / (alturaNum * alturaNum);
      setImc(imcCalculado.toFixed(2));

      if (imcCalculado < 18.5) {
        setClassificacao('Abaixo do peso');
      } else if (imcCalculado >= 18.5 && imcCalculado < 24.9) {
        setClassificacao('Peso normal');
      } else if (imcCalculado >= 25 && imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado >= 30 && imcCalculado < 34.9) {
        setClassificacao('Obesidade grau 1');
      } else if (imcCalculado >= 35 && imcCalculado < 39.9) {
        setClassificacao('Obesidade grau 2');
      } else {
        setClassificacao('Obesidade mórbida (grau 3)');
      }
    } else {
      setImc(null);
      setClassificacao('');
    }
  };

  const limparFormulario = () => {
    setPeso('');
    setAltura('');
    setImc(null);
    setClassificacao('');
  };

  return (
    <div className="form-container">
      <form onSubmit={calcularIMC} className="form-imc">
        <div className="input-group">
          <label htmlFor="peso">Peso (kg):</label>
          <input
            id="peso"
            type="number"
            step="0.1"
            placeholder="Ex: 75.5"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="altura">Altura (m):</label>
          <input
            id="altura"
            type="number"
            step="0.01"
            placeholder="Ex: 1.75"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="btn-calcular">Calcular</button>
          <button type="button" className="btn-limpar" onClick={limparFormulario}>Limpar</button>
        </div>
      </form>

      {imc && (
        <div className="resultado-container">
          <h3>Seu Resultado</h3>
          <p>IMC: <strong>{imc}</strong></p>
          <p>Classificação: <strong className="classificacao-tag">{classificacao}</strong></p>
        </div>
      )}
    </div>
  );
}

export default Form;