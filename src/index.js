import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const Speedometer = ({ size, outerColor, internalColor, value, off, style }) => {
  const styles = getStyles(size);
  const degreesValue = (value > off) ? off : value;
  const degrees = ((degreesValue * 180) / off) - 90;
  const degressStyle = {
    backgroundColor: internalColor,
    transform: [{ translateX: size / 4 }, { rotate: `${degrees}deg` }, { translateX: (size / 4 * -1) }],
  };

  return (
    <View style={[styles.outerCircle, { backgroundColor: outerColor }, style]}>
      <View style={[styles.halfCircle, degressStyle]}/>
      <View style={styles.innerCircle} />
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
};

Speedometer.defaultProps = {
  size: 200,
  outerColor: '#e6e6e6',
  internalColor: '#2eb82e',
  style: {},
};

const getStyles = (size) => ({
  outerCircle: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: size,
    height: size / 2,
    borderTopLeftRadius: size / 2,
    borderTopRightRadius: size / 2,
    overflow: 'hidden',
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: size * 0.5,
    height: (size / 2) * 0.5,
    borderTopLeftRadius: size / 2,
    borderTopRightRadius: size / 2,
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: size / 2,
    height: size,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: size / 2,
  },
});
