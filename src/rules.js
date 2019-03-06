export const getStyles = ({ size, percentSize, internalColor, innerColor, outerColor }, degrees) => ({
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
});
