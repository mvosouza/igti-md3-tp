import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const { description, value } = this.props;
    return (
      <div className="col s6 m4 l3">
        <label>{description}</label>
        <input type="number" value={value} readOnly />
      </div>
    );
  }
}
