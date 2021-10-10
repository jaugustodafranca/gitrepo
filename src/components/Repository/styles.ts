import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  cardContainer: {
    margin: 5,
    width: '95%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    marginBottom: 10,
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#dedede'
  }
});
