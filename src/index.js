import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getStyles } from './rules';

const Speedometer = ({ value, totalValue, size, outerColor, innerColor, internalColor, style, showText, text, textStyle, showLabels, labelStyle, showPercent, percentStyle }) => {
  const styles = getStyles(size);
  const degreesValue = (value > totalValue) ? totalValue : value;
  const percentValue = parseInt(String((value * 100) / totalValue).split('.')[0]);
  const degrees = ((degreesValue * 180) / ((totalValue === 0) ? 1 : totalValue)) - 90;
  const degressStyle = {
    backgroundColor: internalColor,
    transform: [{ translateX: size / 4 }, { rotate: `${degrees}deg` }, { translateX: (size / 4 * -1) }],
  };

  const percentElement = (showPercent) ? (
    <Text style={[{ backgroundColor: innerColor }, percentStyle]} numberOfLines={1}>{percentValue}%</Text>
  ) : null;

  const textElement = ((showText) && (text)) ? (
    <Text style={[{ backgroundColor: innerColor }, textStyle]} numberOfLines={1}>{text}</Text>
  ) : null;

  const labelsElement = (showLabels) ? (
    <View style={[styles.labelsView, { width: size }]}>
      <Text style={[styles.initialLabel, labelStyle]} numberOfLines={1}>0</Text>
      <Text style={[styles.finalLabel, labelStyle]} numberOfLines={1}>{totalValue}</Text>
    </View>
  ) : null;

  return (
    <View style={style}>
      <View style={[styles.outerCircle, { backgroundColor: outerColor }]}>
        <View style={[styles.halfCircle, degressStyle]}/>
        <View style={[styles.innerCircle, { backgroundColor: innerColor }]}>
          {percentElement}
          {textElement}
        </View>
      </View>
      {labelsElement}
    </View>
  );
};

Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  totalValue: PropTypes.number.isRequired,
  size: PropTypes.number,
  outerColor: PropTypes.string,
  innerColor: PropTypes.string,
  internalColor: PropTypes.string,
  style: PropTypes.object,
  showText: PropTypes.bool,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  textStyle: PropTypes.object,
  showLabels: PropTypes.bool,
  labelStyle: PropTypes.object,
  showPercent: PropTypes.bool,
  percentStyle: PropTypes.object,
};

Speedometer.defaultProps = {
  size: 200,
  outerColor: '#e6e6e6',
  innerColor: '#ffffff',
  internalColor: '#2eb82e',
  style: {},
  showText: false,
  text: '',
  textStyle: {},
  showLabels: false,
  labelStyle: {},
  showPercent: false,
  percentStyle: {},
};

export default Speedometer;
