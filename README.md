# React Native Speedometer Chart
[![npm version](https://badge.fury.io/js/react-native-speedometer-chart.svg)](https://badge.fury.io/js/react-native-speedometer-chart) [![npm downloads](https://img.shields.io/npm/dt/react-native-speedometer-chart.svg)](https://npm-stat.com/charts.html?package=react-native-speedometer-chart)  
[![NPM](https://nodei.co/npm/react-native-speedometer-chart.png?downloads=true)](https://nodei.co/npm/react-native-speedometer-chart/)
---
Speedometer Chart component for React Native

## Installation

```console
npm install --save react-native-speedometer-chart
```
or
```console
yarn add react-native-speedometer-chart
```

## Props
| Prop | Default | Type | Required | Description |
| --- | --- | --- | --- | --- |
| value | none | number | yes | Value to be painted |
| off | none | number | yes | Total value |
| internalColor | #2eb82e | string | no | Value color |
| outerColor | #e6e6e6 | string | no | Off color |
| size |  200 | number | no | Chart size |
| style | {} | object | no | Additional style |

## Usage

```javascript
import React, { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';

export default class Main extends Component {
  render() {
    return (
      <Speedometer value={50} off={100}/>
    );
  }
}
```

## License
MIT
