import { StyleSheet } from 'react-native';
export const globalStyles = StyleSheet.create({
  centerEverything: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCol: {
    flexDirection: 'row',
  },
  pokemonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 350,
    
  },
  simpleView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
    height: 40,
  },
  statsContainer: {
    flexDirection: 'row',
    marginHorizontal: 30
  },
  statsText: {
    color: 'grey',
    width: 80,
    marginVertical: 6
  },
  resultForStats: {
    marginLeft: 50,
    marginVertical: 6
  },
  pokemonTypePosition: {
    // marginTop: 50,
    // marginLeft: 50,
    width: 150,
    height: 100,
    // flexDirection: 'row',
    // justifyContent: "space-between",
    // position: 'fixed',
      position: 'absolute',
      top:10, flex: 1
  },
  pokemonTypes: {
    backgroundColor: 'grey',
    borderRadius: 20,
    paddingHorizontal:10,
    paddingVertical:5,
    width: 70,
    alignItems: 'center',
  },
  boldHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: -10
  },
  paddingBottom: {
    marginBottom: 20,
    marginTop: 25
  },
  glitchWithFramwork: {
    height: 100
  }
})

export const globalStyles2 = StyleSheet.create({

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
  },
  noteToSelf: {
    backgroundColor: 'yellow',
    color: 'grey'
  },
})