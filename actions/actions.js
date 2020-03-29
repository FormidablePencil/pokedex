import { SAVE_DATA_TO_ALL_POKEMON } from "./types"

export const fetchDataToAllPokemon = () => async dispatch => {
   //names, types, id 
   const res = await fetch('https://pogoapi.net/api/v1/pokemon_types.json')
   const data = await res.json()
   const fitleredCollection = data.filter(cluster => cluster.form === 'Normal' || cluster.form === undefined)
   dispatch({type: SAVE_DATA_TO_ALL_POKEMON, payload: fitleredCollection})
}
export const fetchSpecificPokemon = (dataOfSpecificPokemon) => async dispatch => {
   console.log(dataOfSpecificPokemon)
}
