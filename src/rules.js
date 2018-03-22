export const getStyles = (size) => ({
  outerCircle: {
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: size * 0.5,
    height: (size / 2) * 0.5,
    borderTopLeftRadius: size / 2,
    borderTopRightRadius: size / 2,
    paddingLeft: 3,
    paddingRight: 3,
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
  labelsView: {
    flexDirection: 'row',
  },
  initialLabel: {
    flex: 1,
  },
  finalLabel: {
    flex: 0,
  },
});
