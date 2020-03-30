import React, { Component, useState, useEffect } from 'react'
import { View, ImageBackground, Button, Text, ScrollView } from 'react-native'
import { SimpleView } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading';

export const PokeStatsScreen = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    // console.log(Object.keys(fetchedSpecificPokemon))
    setIsReady(true)
  }, [fetchedSpecificPokemon])

  return (
    <View style={{ position: 'relative' }} >
      {isReady ?
        <ScrollView>
          <Text>eee</Text>
          <View style={{ height: 400 }}>
            <ImageBackground
              resizeMethod={'auto'}
              style={{ height: 400, width: 400, position: 'absolute', top: 0 }}
            // source={theme.backgroundImage}
            >
              {/* <PokemonFrame /> */}
              <SimpleView></SimpleView>
            </ImageBackground>
          </View>
        </ScrollView>
        : <Loading />
      }
    </View >
  )
}


export default PokeStatsScreen