import React from 'react';
import './style.css'

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      total: null,
      operador: null,
      aguardaNovoNumero: false
    };
  }

  digitoInput = (digito) => {
    const { display, aguardaNovoNumero } = this.state;

    if (aguardaNovoNumero) {
      this.setState({
        display: String(digito),
        aguardaNovoNumero: false
      });
    } else {
      this.setState({
        display: display === '0' ? String(digito)  : display + digito 
      });
    }
  };

  operadorInput = (novoOperador) => {
    const { display, total, operador} = this.state;

    if (total === null) {
      this.setState({
        total: parseFloat(display),
        aguardaNovoNumero: true,
        operador: novoOperador
      });
    } else if (operador) {
      const novoTotal = this.calcular(total, parseFloat(display), operador);
      this.setState({
        total: novoTotal,
        aguardaNovoNumero: true,
        display: String(novoTotal),
        operador: novoOperador
      });
    }
  };

  calcular = (num1, num2, operacao) => {

    switch (operacao) {
      case '+':
         return  num1 + num2 ;
      case '-':
        return num1 - num2;
      case 'x':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        return num2;
    }
  };

  decimalInput = () => {
    const { display, aguardaNovoNumero } = this.state;

    if (aguardaNovoNumero) {
      this.setState({
        display: '.',
        aguardaNovoNumero: false
      });
    } else if (display.indexOf('.') === -1) {
      this.setState({
        display: display + '.',
        aguardaNovoNumero: false
      });
    }
  };

  Limpar = () => {
    this.setState({
      display: '0',
      total: null,
      operador: null,
      aguardaNovoNumero: false
    });
  };

  render() {
    const { display } = this.state;

    return (
      <div className='calculadora'>
        <div className='resultado'>{display}</div>
        
       <div className='container'>
        <button className='limpar' onClick={this.Limpar}>AC</button>
       <button className='limpar'>+/-</button>
        <button className='limpar' >%</button>
        <button className='operador' onClick={() => this.operadorInput('/')}>/</button>
       </div>
        
        <div className='container'>

        <button className='numero' onClick={() => this.digitoInput(7)}>7</button>
        <button className='numero'onClick={() => this.digitoInput(8)}>8</button>
        <button className='numero' onClick={() => this.digitoInput(9)}>9</button>
        <button className='operador' onClick={() => this.operadorInput('x')}>x</button>
       </div>
        
        
        <div className='container'>

        <button className='numero' onClick={() => this.digitoInput(4)}>4</button>
        <button className='numero' onClick={() => this.digitoInput(5)}>5</button>
        <button className='numero' onClick={() => this.digitoInput(6)}>6</button>
        <button className='operador'onClick={() => this.operadorInput('-')}>-</button>
       </div>

        
        <div className='container'>

        <button className='numero' onClick={() => this.digitoInput(1)}>1</button>
        <button className='numero' onClick={() => this.digitoInput(2)}>2</button>
        <button className='numero' onClick={() => this.digitoInput(3)}>3</button>
        <button  className='operador' onClick={() => this.operadorInput('+')}>+</button>
        </div>

        
        
        <div className='container'>

        <button className='numero-zero' onClick={() => this.digitoInput(0)}>0</button>
        <button className='numero' onClick={this.decimalInput}>.</button>
        <button  className='operador' onClick={() => this.operadorInput(this)}>=</button>
        </div>
       </div>
     );
   }
}

export default Calculadora;

