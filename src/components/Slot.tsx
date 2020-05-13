import React, { useState, useEffect, useRef } from 'react'
import {  Dimensions, Animated } from "react-native"
import pokeballImg from '../assets/images/Pokeball1.png'
import { useSelector, useDispatch } from 'react-redux';
import { PokemonSlotImageBg, PokemonImage } from '../styles/imageStyles'
import RenderTypes from './RenderTypes';
import { SlotContainer } from '../styles/containerStyles';
import usePanHandlerBouceBack from './hooks/usePanHandlerBouceBack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fetchSpecificPokemon } from '../actions/actions';
import useRenderImgsDynamically from '../components/hooks/useRenderImgsDynamically'
import * as Animatable from 'react-native-animatable';

const screenHeight = Dimensions.get('window').height
const AnimatedPokemonSlotImageBg = Animated.createAnimatedComponent(PokemonSlotImageBg)

// when double clicked open modal to veiw pokemon's effectivness/favAndAdd-to-team-options
const Slot = ({ id, draggingMode, navigation }) => {
  const { panResponder, positionOfSlot, scaleOfBg } = usePanHandlerBouceBack({ draggingMode })
  const [onPressCount, setOnPressCount] = useState()
  const [onPressCountTimer, setOnPressCountTimer] = useState()
  const dispatch = useDispatch()
  const spinLoadingAnim = useRef(null)
  const [renderPokemonImg, setRenderPokemonImg] = useState(null)
  const fetchedAllPokemon = useSelector((state: any) => state.fetchedAllPokemon)
  const [pokemonProps, setPokemonProps] = useState({ type: [], pokemon_id: null })

  useEffect(() => {
    if (fetchedAllPokemon[0]) {
      setPokemonProps(fetchedAllPokemon.filter(cluster => cluster.pokemon_id === id)[0])
    }
  }, [fetchedAllPokemon])

  useEffect(() => {
    useRenderImgsDynamically({ pokemon_id: id, setRenderPokemonImg })
  }, [id])

  const onPressHandler = async () => {
    if (!draggingMode) {
      setOnPressCount(1)
      if (onPressCount > 0) {
        clearTimeout(onPressCountTimer)
        setOnPressCount(0)
        spinLoadingAnim.current.rotate()
        await dispatch(fetchSpecificPokemon(pokemonProps.pokemon_id))
        navigation.navigate('PokeStatsScreen')
      } else {
        setOnPressCountTimer(
          setTimeout(() => {
            setOnPressCount(0)
          }, 1000)
        )
      }
    }
  }
  return (
    <Animated.View
      {...draggingMode && { ...panResponder.panHandlers }}
      useNativeDriver
      style={[positionOfSlot.getLayout(), { flex: 1 }]}
    >
      <TouchableOpacity onPress={() => onPressHandler()}>
        <SlotContainer style={{ height: screenHeight / 4 }}>
          <RenderTypes type={pokemonProps.type} />
          <Animatable.View useNativeDriver ref={spinLoadingAnim} style={{ position: 'absolute'}}>
            <AnimatedPokemonSlotImageBg useNativeDriver style={{ transform: [{ scale: scaleOfBg }] }} fadeDuration={1} source={pokeballImg} />
          </Animatable.View>

          <PokemonImage source={renderPokemonImg} />
        </SlotContainer>
      </TouchableOpacity>
    </Animated.View >
  )
}

export default Slot