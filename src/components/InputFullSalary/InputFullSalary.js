import React, { Component } from 'react';

export default class InputFullSalary extends Component {
  handlerOnChange = (e) => {
    this.props.onChangeSalary(e.target.value);
  };

  render() {
    const { salary } = this.props;

    return (
      <div className="col s12">
        <label>Salário bruto</label>
        <input type="number" value={salary} onChange={this.handlerOnChange} />
      </div>
    );
  }
}
