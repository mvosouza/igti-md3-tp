import React, { Component } from 'react';

export default class InputReadOnly extends Component {
  render() {
    const { description, value, fontColor } = this.props;
    return (
      <div className="col s6 m4 l3">
        <label>{description}</label>
        <input
          style={{ fontWeight: 'bold', color: fontColor }}
          type="text"
          value={value}
          readOnly
        />
      </div>
    );
  }
}
