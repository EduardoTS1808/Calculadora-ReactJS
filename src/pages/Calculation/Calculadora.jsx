import React  from 'react';
import './style.css'
import Resultado from '../../components/Desplay/Desplay'
import Button from '../../components/BottonNumber/Button'
import ButtonA from '../../components/ButtonAction/ButtonA';
import ButtonF from '../../components/ButtonFunction/ButtonF';
import ButtonZero from '../../components/ButtonZero/Zero'


class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      total: null,
      operador: null,
      aguardaNovoNumero: false,
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
      <>
      
      <div className='calculadora'>
      <Resultado conteudo={display}/>
      
      <div className='container'>
      
      <ButtonA func={this.Limpar} sinal={'AC'} />
      <ButtonA sinal={'+/-'} />
      <ButtonA sinal={'%'} />
      <ButtonF operador={() => this.operadorInput('/')} sinal={'/'} />
      </div>
      
      <div className='container'>
      <Button inputDigt={()=>{this.digitoInput(7)}} number={'7'} />
      <Button inputDigt={()=>{this.digitoInput(8)}} number={'8'} />
      <Button inputDigt={()=>{this.digitoInput(9)}} number={'9'} />
      <ButtonF operador={() => this.operadorInput('x')} sinal={'x'} />
      </div>
      
      <div className='container'>
      <Button inputDigt={()=>{this.digitoInput(4)}} number={'4'} />
      <Button inputDigt={()=>{this.digitoInput(5)}} number={'5'} />
      <Button inputDigt={()=>{this.digitoInput(6)}} number={'6'} />
      <ButtonF operador={() => this.operadorInput('-')} sinal={'-'} />
      </div>
      
      <div className='container'>
      <Button inputDigt={()=>{this.digitoInput(1)}} number={'1'} />
      <Button inputDigt={()=>{this.digitoInput(2)}} number={'2'} />
      <Button inputDigt={()=>{this.digitoInput(3)}} number={'3'} />
      
      <ButtonF operador={() => this.operadorInput('+')} sinal={'+'} />
      </div>
      
      
      
      <div className='container'>
      <ButtonZero inputDigt={() => this.digitoInput(0)} number={0}/>
      <Button inputDigt={this.decimalInput} number={'.'} />
      <ButtonF operador={() => this.operadorInput(this)} sinal={'='} />
      </div>
      </div>
      </>
      );
    }
  }
  
  export default Calculadora;
  
  