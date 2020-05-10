import React, { useState, useEffect } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataToAllPokemon, saveLocalStorageToRedux, fetchSpecificPokemon } from '../../actions/actions'
import usePrevious from './usePrevious'
import { SAVE_DATA_TO_ALL_POKEMON, SAVE_FROM_LOCALSTORAGE } from '../../actions/types'
// import { cacheDataToAsyncStorage } from './useCacheDataToAsyncStorage'
import cacheDataToAsyncStorageObj from '../hooks/cacheDataToAsyncStorageObj'
const useLocalStorage = () => {
  const { favoritePokemon, fetchedAllPokemon, fetchedSpecificPokemon, pokemonTeam, theme } = useSelector(state => state)
  const dispatch = useDispatch()

  //get from localsystem fetchedAllPokemon
  // console.log(cacheDataToAsyncStorageObj.getLocallyStoredData)
  useEffect(() => {
    (async () => {
      let resFetchedAllPokemon = await cacheDataToAsyncStorageObj.getLocallyStoredData('fetchedAllPokemon')

      let teamList = await cacheDataToAsyncStorageObj.getLocallyStoredData('pokemonTeam')
      // if (teamList === null) teamList == {}
      let favList = await cacheDataToAsyncStorageObj.getLocallyStoredData('favoritePokemon')
      // if (favList === null) favList == {}
      let theme = await cacheDataToAsyncStorageObj.getLocallyStoredData('theme')
      // if (theme === null) theme == {}

      // console.log(favList, 'favListfavListfavListfavList')

      if (Object.keys(resFetchedAllPokemon).length === 0) {
        dispatch(fetchDataToAllPokemon())
      } else {
        dispatch({ type: SAVE_DATA_TO_ALL_POKEMON, payload: resFetchedAllPokemon })
        dispatch({ type: SAVE_FROM_LOCALSTORAGE, payload: { favList, teamList, theme } })
      }
    })()
  }, [])

  //save to local system fetchedAllPokemon
  useEffect(() => {
    (async () => {
      const response = await cacheDataToAsyncStorageObj.getLocallyStoredData('fetchedAllPokemon')
      if (response === null || Object.keys(response).length === 0) {
        cacheDataToAsyncStorageObj.storeToLocalStorage('fetchedAllPokemon', fetchedAllPokemon)
      }
    })()
  }, [fetchedAllPokemon])

  // first caching system created 

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
      // console.log(getLocallyStoredData, 'team')
      // console.log(getLocallyStoredData1, 'fav')
      // console.log(Object.keys(getLocallyStoredData2), 'specificpoke')
    })()
  })


  // const cacheDataToAsyncStorage = async (data, dirName) => {
  // return await validateAndUpdateData(data, dirName)
  // }



}

export default useLocalStorage

