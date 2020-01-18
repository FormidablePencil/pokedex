import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  stats: {
    backgroundColor: 'white',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    paddingTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  rowStats: {
    height: 600
  },
 
  transparent: {
    backgroundColor: 'transparent'
  },
  pokemonGif: {
    height: 170,
    width: 500,
    position: 'absolute',
    top: -130
  },
  tabs: {
    paddingHorizontal: 10
  },
  imageInInput: {
    height: 30,
    width: 30,
    marginRight: 5,
  }
})