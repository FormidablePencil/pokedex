import React, { useState, useEffect, createContext } from 'react'
import { View, LayoutAnimation } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import PokemonStats from '../components/PokemonStats';
import PokeStatsHeader from '../components/PokeStatsHeader';
import { testObjEmptyFunc } from '../logic/logic';
import { CLEAR_SPECIFIC_POKEMON_DATA } from '../actions/types';
import HeaderRightPokeStats from '../components/HeaderRightPokeStats';
import { themes } from '../theming/themingStyles';
import * as ScreenOrientation from 'expo-screen-orientation';


export const PokeStatsContext = createContext()

export const PokeStatsScreen = ({ navigation }) => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const [isReady, setIsReady] = useState(false)
  const [uri, setUri] = useState()
  const dispatch = useDispatch()
  const customSpring = { duration: 300, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }
  const theme = useSelector(state => state.theme)

  navigation.setOptions({
    headerTransparent: true,
    headerTintColor: themes[theme].pokeBox.color,
    headerTitle: () => <PokeStatsHeader />,
    headerRight: () => <HeaderRightPokeStats isReady={isReady} pokemonId={testObjEmptyFunc(fetchedSpecificPokemon) ? fetchedSpecificPokemon.pokemonInfo.id : ''} navigation={navigation} />,
  })
  useEffect(() => {
    return async () => {
      await setIsReady(false)
      dispatch({ type: CLEAR_SPECIFIC_POKEMON_DATA })
    }
  }, []);

  useEffect(() => {
    (() => {
      if (Object.keys(fetchedSpecificPokemon).length > 0) {
        setUri(fetchedSpecificPokemon.pokemonInfo.id)
        setIsReady(true)
      }
    })()
  }, [fetchedSpecificPokemon])

  useEffect(() => {
    if (isReady) LayoutAnimation.configureNext(customSpring);
  }, [isReady])
  return (
    <PokeStatsContext.Provider value={{ uri }}>
        {isReady ?
          <PokemonStats />
          : <Loading />
        }
    </PokeStatsContext.Provider>
  )
}


export default PokeStatsScreen