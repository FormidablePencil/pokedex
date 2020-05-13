import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataToAllPokemon } from '../../actions/actions'
import { SAVE_DATA_TO_ALL_POKEMON, SAVE_FROM_LOCALSTORAGE } from '../../actions/types'
import cacheDataToAsyncStorageObj from '../hooks/cacheDataToAsyncStorageObj'

const useLocalStorage = () => {
  const { favoritePokemon, fetchedAllPokemon, fetchedSpecificPokemon, pokemonTeam, theme } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      let resFetchedAllPokemon = await cacheDataToAsyncStorageObj.getLocallyStoredData('fetchedAllPokemon')
      let teamList = await cacheDataToAsyncStorageObj.getLocallyStoredData('pokemonTeam')
      let favList = await cacheDataToAsyncStorageObj.getLocallyStoredData('favoritePokemon')
      let theme = await cacheDataToAsyncStorageObj.getLocallyStoredData('theme')
      if (resFetchedAllPokemon) {
        dispatch({ type: SAVE_DATA_TO_ALL_POKEMON, payload: resFetchedAllPokemon })
        dispatch({ type: SAVE_FROM_LOCALSTORAGE, payload: { favList, teamList, theme } })
      } else {
        dispatch(fetchDataToAllPokemon())
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await cacheDataToAsyncStorageObj.getLocallyStoredData('fetchedAllPokemon')
      if (response === null || Object.keys(response).length === 0) {
        cacheDataToAsyncStorageObj.storeToLocalStorage('fetchedAllPokemon', fetchedAllPokemon)
      }
    })()
  }, [fetchedAllPokemon])

  useEffect(() => {
    (async () => {
      if (Object.keys(favoritePokemon).length === 0) return
      await cacheDataToAsyncStorageObj.validateAndUpdateData(favoritePokemon, 'favoritePokemon')
    })()
  }, [favoritePokemon])

  useEffect(() => {
    (async () => {
      if (Object.keys(pokemonTeam).length === 0) return
      await cacheDataToAsyncStorageObj.validateAndUpdateData(pokemonTeam, 'pokemonTeam')
    })()
  }, [pokemonTeam])

  useEffect(() => {
    (async () => {
      if (Object.keys(theme).length === 0) return
      await cacheDataToAsyncStorageObj.validateAndUpdateData(theme, 'theme')
    })()
  }, [theme])

  useEffect(() => {
    (async () => {
      const getLocallyStoredData = await cacheDataToAsyncStorageObj.getLocallyStoredData('pokemonTeam')
      const getLocallyStoredData1 = await cacheDataToAsyncStorageObj.getLocallyStoredData('favoritePokemon')
    })()
  }, [fetchedAllPokemon])
}

export default useLocalStorage

