import {
  TYPE_BUG,
  TYPE_DARK,
  TYPE_DRAGON,
  TYPE_ELECTRIC,
  TYPE_FAIRY,
  TYPE_FIGHTING,
  TYPE_FIRE,
  TYPE_FLYING,
  TYPE_GHOST,
  TYPE_GRASS,
  TYPE_GROUND,
  TYPE_ICE,
  TYPE_NORMAL,
  TYPE_POISON,
  TYPE_PSYCHIC,
  TYPE_ROCK,
  TYPE_STEEL,
  TYPE_WATER
} from './types'

const themeFire = {
  red: 'red',
  MARGIN_TOP: '10px'
}

export const setThemeByPokeType = (pokeType) => async dispatch => {
  const randomNum = Math.floor(Math.random() * 2) + 0;
  console.log('pressed')
  const pokeTypeAndTheme = [];
  for (let i = 0; i < pokeType.length; i++) {
    let array = [
      theme = {},
    ]
    switch ('Fire') {
      case 'Fire':
        // thus us where I add the logic
        //Take the pokeType and mix the css classes together based on the pokemon type
        
        // array.push(pokeType)
        console.log(array)
        // console.log(array.)
        break
      case 'Water':

        console.log('case Water')
        break
      case 'Grass':

        console.log('case Grass')
        break
      case 'Ice':
        console.log('case Ice')

        break
      case 'Ground':
        console.log('case Ground')

        break
      default:

    }
  }
  console.log()
  //push it to the pokeTypeAndTheme
}