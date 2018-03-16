import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getStyles } from './rules';

const Speedometer = ({ size, outerColor, internalColor, value, off, style, text, textStyle, textVisible }) => {
  const styles = getStyles(size);
  const degreesValue = (value > off) ? off : value;
  const degrees = ((degreesValue * 180) / ((off === 0) ? 1 : off)) - 90;
  const degressStyle = {
    backgroundColor: internalColor,
    transform: [{ translateX: size / 4 }, { rotate: `${degrees}deg` }, { translateX: (size / 4 * -1) }],
  };

  const textElement = (textVisible) ? (
    <Text style={textStyle} numberOfLines={1}>{text}</Text>
  ) : null;

  return (
    <View style={[styles.outerCircle, { backgroundColor: outerColor }, style]}>
      <View style={[styles.halfCircle, degressStyle]}/>
      <View style={styles.innerCircle}>
        {textElement}
      </View>
    </View>
  );
};

Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  off: PropTypes.number.isRequired,
  size: PropTypes.number,
  outerColor: PropTypes.string,
  internalColor: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  textStyle: PropTypes.object,
  textVisible: PropTypes.bool,
};

Speedometer.defaultProps = {
  size: 200,
  outerColor: '#e6e6e6',
  internalColor: '#2eb82e',
  style: {},
  text: '',
  textStyle: {},
  textVisible: false,
};

export default Speedometer;
