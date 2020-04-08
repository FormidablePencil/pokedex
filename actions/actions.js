import { SAVE_DATA_TO_ALL_POKEMON, FETCHED_SPECIFIC_POKEMON_DATA, SAVE_FROM_LOCALSTORAGE } from "./types"

export const fetchDataToAllPokemon = () => async dispatch => {
   //names, types, id 
   const res = await fetch('https://pogoapi.net/api/v1/pokemon_types.json')
   const data = await res.json()
   const filteredCollection = data.filter(cluster => cluster.form === 'Normal' || cluster.form === undefined)
   dispatch({ type: SAVE_DATA_TO_ALL_POKEMON, payload: filteredCollection })
}

export const saveLocalStorageToRedux = ({ fetchedAllPokemon, fetchedSpecificPokemon, favList, teamList, theme }) => async dispatch => {
   dispatch({ type: SAVE_FROM_LOCALSTORAGE, payload: { fetchedAllPokemon, fetchedSpecificPokemon, favList, teamList, theme } })
}

export const fetchSpecificPokemon = (pokemonId) => async dispatch => {
   // const response = cacheDataToAsyncStorageObj.getLocallyStoredData(pokemonId)
   let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
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

