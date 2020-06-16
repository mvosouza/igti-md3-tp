import React, { Component } from 'react';
import InputFullSalary from './components/InputFullSalary/InputFullSalary';
import InputReadOnly from './components/InputReadOnly/InputReadOnly';
import ProgressBarSalary from './components/ProgressBarSalary/ProgressBarSalary';
import { calculateSalaryFrom } from './helpers/salary';
import { formatCurrency, formatPercentage } from './helpers/formatter';

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
    const colors = {
      discountINSS: '#e67e22',
      discountIRPF: '#c0392b',
      netSalary: '#16a085',
    };
    const { fullSalary } = this.state;
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(fullSalary);
    const discountINSSPercentage = discountINSS / fullSalary;
    const discountIRPFPercentage = discountIRPF / fullSalary;
    const netSalaryPercentage = netSalary / fullSalary;

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
          <InputReadOnly
            description="Base INSS"
            value={formatCurrency(baseINSS)}
          />
          <InputReadOnly
            fontColor={colors.discountINSS}
            description="Desconto INSS"
            value={`${formatCurrency(discountINSS)} (${formatPercentage(
              discountINSSPercentage
            )})`}
          />
          <InputReadOnly
            description="Base IRPF"
            value={formatCurrency(baseIRPF)}
          />
          <InputReadOnly
            fontColor={colors.discountIRPF}
            description="Desconto IRPF"
            value={`${formatCurrency(discountIRPF)} (${formatPercentage(
              discountIRPFPercentage
            )})`}
          />
          <InputReadOnly
            fontColor={colors.netSalary}
            description="Salário líquido"
            value={`${formatCurrency(netSalary)} (${formatPercentage(
              netSalaryPercentage
            )})`}
          />
        </div>
        <div className="row">
          <ProgressBarSalary
            bars={[
              { color: colors.discountINSS, value: discountINSSPercentage },
              { color: colors.discountIRPF, value: discountIRPFPercentage },
              { color: colors.netSalary, value: netSalaryPercentage },
            ]}
          />
        </div>
      </div>
    );
  }
}
