import React, { Component, useState, useEffect, createContext } from 'react'
import { View, ImageBackground, Button, Text, ScrollView, LayoutAnimation, BackHandler } from 'react-native'
import { SimpleView } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import { themes } from '../theming/themingStyles'
import CachedImage from './CachedImage';
import { CLEAR_SPECIFIC_POKEMON_DATA } from '../actions/types';
import PokemonStats from '../components/PokemonStats';
import PokemonStatsCard from '../components/Tabs';
import PokeStatsHeader, { PokemonStatsHeaderRight } from '../components/PokeStatsHeader';
import { capitalizeFirstChar } from '../logic/logic';
import { fetchSpecificPokemon } from '../actions/actions';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export const PokeStatsContext = createContext()

export const PokeStatsScreen = ({ navigation }) => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const [isReady, setIsReady] = useState(false)
  const [uri, setUri] = useState()
  const dispatch = useDispatch()
  const customSpring = { duration: 300, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }

  navigation.setOptions({
    headerTransparent: true,
    headerLeft: () => <Ionicons name="md-checkmark-circle" name='' onPress={() => clearEverything()} />,
    // headerTitle: () =>
    //   <PokeStatsHeader
    //     pokemonName={capitalizeFirstChar(fetchedSpecificPokemon.pokemonInfo.name)}
    //     pokemonTypes={fetchedSpecificPokemon.pokemonInfo.types}
    //   />,
    // headerRight: () => <PokemonStatsHeaderRight pokemonId={fetchedSpecificPokemon.pokemonInfo.id} />
  })




  const clearEverything = () => {
    navigation.goBack()
    // console.log('cleared')
    // setIsReady(false)
    // dispatch({ type: CLEAR_SPECIFIC_POKEMON_DATA })
  }

  useEffect(() => {
    (() => {
      if (Object.keys(fetchedSpecificPokemon).length > 0) {
        setUri(fetchedSpecificPokemon.pokemonInfo.id)
        setIsReady(true)
      }
    })()
  }, [fetchedSpecificPokemon])



  useEffect(() => {
    // if (isReady) LayoutAnimation.configureNext(customSpring);
  }, [isReady])
  return (
    <PokeStatsContext.Provider value={{ uri }}>
      <View style={{ height: '100%' }}>
        {isReady ?
          <PokemonStats />
          : <Loading />
        }
      </View >
    </PokeStatsContext.Provider>
  )
}


export default PokeStatsScreen