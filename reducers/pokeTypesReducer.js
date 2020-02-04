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
} from '../actions/types'

const initialState = {
  pokeType: [],
    color: 'aqua',
    color2: 'green',
    //This theming will be for pokeStats.js. It'll hold class names and within styles is where the props will go.
  // themeDarkMode: [
    //This theme is going to be for pokeIndex and pokeStats
  // ],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPE_FIRE:
      return {
        ...state,
        theme: action.payload
      }
    case TYPE_WATER:
      return {
        ...state,
        pokeType: action.payload
      }
      default:
        return state;
  }
} 