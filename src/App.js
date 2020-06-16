import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handlerOnChangeSalary = (value) => {
    const fullSalary = Number(value);
    this.setState({ fullSalary });
  };

  render() {
    const { fullSalary } = this.state;

    return (
      <div className="container">
        <h1 className="center">React Salário</h1>
        <div className="row">
          <InputFullSalary
            salary={fullSalary}
            onChangeSalary={this.handlerOnChangeSalary}
          />
        </div>
        <div className="row">
          <InputReadOnly description="Base INSS" />
          <InputReadOnly description="Desconto INSS" />
          <InputReadOnly description="Base IRPF" />
          <InputReadOnly description="Desconto IRPF" />
          <InputReadOnly description="Salário líquido" />
        </div>
        <div className="row">
          <ProgressBarSalary />
        </div>
      </div>
    );
  }
}
