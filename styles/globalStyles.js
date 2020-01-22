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
    height: 600,
  },
 
  transparent: {
    backgroundColor: 'transparent'
  },
  pokemonGif: {
    height: 250,
    width: 500,
    position: 'absolute',
    top: -200,
  },
  tabs: {
    paddingHorizontal: 10,
    backgroundColor: 'white'

  },
  imageInInput: {
    height: 30,
    width: 30,
    marginRight: 5,
  },
  blueButton: {
    backgroundColor: 'green',
    margin: 5,
    color: 'pink'
  }
})