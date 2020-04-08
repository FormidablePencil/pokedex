import React, { useState, useEffect, createContext } from 'react'
import { View, LayoutAnimation, Text, } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import PokemonStats from '../components/PokemonStats';
import PokeStatsHeader from '../components/PokeStatsHeader';
import { testObjEmptyFunc } from '../logic/logic';
import { CLEAR_SPECIFIC_POKEMON_DATA } from '../actions/types';
import { PokemonIdText } from '../styles/textStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HeaderRightPokeStats from '../components/HeaderRightPokeStats';

export const PokeStatsContext = createContext()

export const PokeStatsScreen = ({ navigation }) => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const [isReady, setIsReady] = useState(false)
  const [uri, setUri] = useState()
  const dispatch = useDispatch()
  const customSpring = { duration: 300, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }

  navigation.setOptions({
    headerTransparent: true,
    headerTitle: () => <PokeStatsHeader />,
    headerRight: () => <HeaderRightPokeStats pokemonId={testObjEmptyFunc(fetchedSpecificPokemon) ? fetchedSpecificPokemon.pokemonInfo.id : ''} navigation={navigation} />
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
      <View style={{ height: '100%', backgroundColor: '#fff' }}>
        {isReady ?
          <PokemonStats />
          : <Loading />
        }
      </View >
    </PokeStatsContext.Provider>
  )
}


export default PokeStatsScreen