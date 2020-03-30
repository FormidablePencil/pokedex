import { SAVE_DATA_TO_ALL_POKEMON, FETCHED_SPECIFIC_POKEMON_DATA } from "./types"

export const fetchDataToAllPokemon = () => async dispatch => {
   //names, types, id 
   const res = await fetch('https://pogoapi.net/api/v1/pokemon_types.json')
   const data = await res.json()
   const fitleredCollection = data.filter(cluster => cluster.form === 'Normal' || cluster.form === undefined)
   dispatch({ type: SAVE_DATA_TO_ALL_POKEMON, payload: fitleredCollection })
}
export const fetchSpecificPokemon = (pokemon) => async dispatch => {
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
   const pokemonInfo = await res.json()

   const speciesResponse = await fetch(pokemonInfo.species.url)
   const species = await speciesResponse.json()

   const evolutionChainResponse = await fetch(species.evolution_chain.url)
   const evolutionChain = await evolutionChainResponse.json()

   dispatch({ type: FETCHED_SPECIFIC_POKEMON_DATA, payload: { pokemonInfo, species, evolutionChain } })
   
   // console.log(Object.keys(pokemonInfo))
   // console.log(Object.keys(species))
   // console.log(Object.keys(evolutionChain.chain))
}
