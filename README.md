# React Native Speedometer Chart
[![npm version](https://badge.fury.io/js/react-native-speedometer-chart.svg)](https://badge.fury.io/js/react-native-speedometer-chart) [![npm downloads](https://img.shields.io/npm/dt/react-native-speedometer-chart.svg)](https://npm-stat.com/charts.html?package=react-native-speedometer-chart)  
[![NPM](https://nodei.co/npm/react-native-speedometer-chart.png?downloads=true)](https://nodei.co/npm/react-native-speedometer-chart/)
---
Speedometer Chart component for React Native

## Installation

```
npm install --save react-native-speedometer-chart
```
```
yarn add react-native-speedometer-chart
```

## Props
| Prop | Default | Type | Required | Description |
| --- | --- | --- | --- | --- |
| value | none | number | `yes` | Value to be painted |
| totalValue | none | number | `yes` | Total value |
| size | 200 | number | no | Chart size |
| innerColor | #ffffff | string | no | `value` color |
| outerColor | #e6e6e6 | string | no | `value` color |
| internalColor | #2eb82e | string | no | `totalValue` color |
| style | {} | object | no | Additional style |
| showText | false | bool | no | Show center text |
| text | '' | string/number | no | Center text |
| textStyle | {} | object | no | Center text style |
| showLabels | false | bool | no | Show labels |
| labelStyle | {} | object | no | Label style |
| showPercent | false | bool | no | Show center percent |
| percentStyle | {} | object | no | Percent style |


## Basic Usage

```javascript
import React, { Component } from 'react';
import Speedometer from 'react-native-speedometer-chart';

export default class Main extends Component {
  render() {
    return (
      <Speedometer value={50} totalValue={100}/>
    );
  }
}
```

## Examples

```javascript
  <Speedometer value={25} totalValue={100}/>
```
![25%](docs/image2.png?raw=true "25% of value")
```javascript
  <Speedometer value={50} totalValue={100}/>
```
![50%](docs/image1.png?raw=true "50% of value")
```javascript
  <Speedometer value={75} totalValue={100}/>
```
![75%](docs/image3.png?raw=true "75% of value")
```javascript
  <Speedometer value={100} totalValue={100}/>
```
![100%](docs/image4.png?raw=true "100% of value")
```javascript
  <Speedometer
    value={50}
    totalValue={150}
    size={250}
    outerColor="#d3d3d3"
    internalColor="#ff0000"
    showText
    text="50.00"
    textStyle={{ color: 'green' }}
    showLabels
    labelStyle={{ color: 'blue' }}
    showPercent
    percentStyle={{ color: 'red' }}
  />
```
![Total usage](docs/image5.png?raw=true "total usage")

## License
MIT
