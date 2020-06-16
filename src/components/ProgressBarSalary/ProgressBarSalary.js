import React, { Component } from 'react';
import Bar from './Bar';

export default class ProgressBarSalary extends Component {
  render() {
    const { bars } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {bars.map(({ value, color }) => (
          <Bar value={value * 100} color={color} />
        ))}
      </div>
    );
  }
}
