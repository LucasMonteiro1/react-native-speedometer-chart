import color from 'color';

export const getStyles = ({ size, percentSize, internalColor, innerColor, outerColor, indicatorColor, showIndicator }, degrees, degreesValue) => ({
  outerCircle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: size,
    height: size / 2,
    borderTopLeftRadius: size / 2,
    borderTopRightRadius: size / 2,
    overflow: 'hidden',
    backgroundColor: outerColor,
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: size * percentSize,
    height: (size / 2) * percentSize,
    borderTopLeftRadius: size / 2,
    borderTopRightRadius: size / 2,
    paddingLeft: 3,
    paddingRight: 3,
    backgroundColor: innerColor,
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
    backgroundColor: internalColor,
    transform: [{ translateX: size / 4 }, { rotate: `${degrees}deg` }, { translateX: (size / 4 * -1) }],
  },
  labelsView: {
    flexDirection: 'row',
    width: size,
  },
  initialLabel: {
    flex: 1,
  },
  finalLabel: {
    flex: 0,
  },
  percentText: {
    backgroundColor: innerColor,
  },
  text: {
    backgroundColor: innerColor,
  },
  indicator: {
    height: 4,
    zIndex: 1000,
    justifyContent: 'center',
    transform: [{ translateX: size / 4 }, { rotate: `${(degrees + 90)}deg` }, { translateX: (size / 4 * -1) }],
    width: size / 2,
    backgroundColor: indicatorColor,
    position: 'absolute',
    left: 0,
    top: (size / 2) - 2,
  },
  pointIndicator: {
    borderRadius: 50,
    width: 15,
    height: 15,
    alignSelf: 'flex-end',
    transform: [{ translateX: 7.5 }],
    backgroundColor: color(indicatorColor).darken(0.2).hex(),
  },
  content: (showIndicator) ? {
    marginBottom: 10,
  } : null,
});
