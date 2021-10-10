import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    width: 265,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 10,
  },
  text: {
    borderLeftWidth: 2,
    borderColor: '#dedede',
  },
  label: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#dedede',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderRightWidth: 2,
    borderColor: '#dedede',
  },
  size: {
    paddingHorizontal: 10,
  },
})
