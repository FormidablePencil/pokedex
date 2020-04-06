import React, { useState, useEffect, useRef } from 'react'
import useCachedImage from "./hooks/useCachedImage"
import { View, Dimensions, Animated } from "react-native"
import pokeballImg from '../assets/images/Pokeball1.png'
import { useSelector, useDispatch } from 'react-redux';
const screenHeight = Dimensions.get('window').height
import { PokemonSlotImageBg, PokemonImage } from '../styles/imageStyles'
import RenderTypes from './RenderTypes';
import { SlotContainer } from '../styles/containerStyles';
import usePanHandlerBouceBack from './hooks/usePanHandlerBouceBack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fetchSpecificPokemon } from '../actions/actions';

const AnimatedPokemonSlotImageBg = Animated.createAnimatedComponent(PokemonSlotImageBg)

//go though my code and seperate logic into hooks
//~ when double clicked open modal to veiw pokemon's effectivness/favAndAdd-to-team-options
const Slot = ({ id, draggingMode, navigation }) => {
  /////1.. The pokeball will start changing.
  // //2. singleclick click to view the effectiveness of the pokemon. There's an api for that
  // 3, doubleclick to navigate to the pokestats page 
  const { type, pokemon_name } = useSelector(state => state.fetchedAllPokemon.filter(cluster => cluster.pokemon_id === id)[0])
  const cachedPokemonImage = useCachedImage(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
  const { panResponder, positionOfSlot, scaleOfBg } = usePanHandlerBouceBack({ draggingMode })
  const [onPressCount, setOnPressCount] = useState()
  const [onPressCountTimer, setOnPressCountTimer] = useState()
  const dispatch = useDispatch()
  
  const onPressHandler = () => {
    if (!draggingMode) {
      console.log('clicked')
      setOnPressCount(1)
      if (onPressCount > 0) {
        clearTimeout(onPressCountTimer)
        setOnPressCount(0)
        console.log('doubleClick')
        dispatch(fetchSpecificPokemon(pokemon_name))
        navigation.navigate('PokeStatsScreen') // additional step mayhave to be take
      } else {
        setOnPressCountTimer(
          setTimeout(() => {
            setOnPressCount(0)
            console.log('rest')
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
        <SlotContainer style={{ height: screenHeight / 4, width: 200, alignItems: 'center', justifyContent: 'center' }}>
          <RenderTypes type={type} />
          <View useNativeDriver style={{ position: 'absolute' }}>
            <AnimatedPokemonSlotImageBg useNativeDriver style={{ transform: [{ scale: scaleOfBg }] }} fadeDuration={1} source={pokeballImg} />
          </View>
          <PokemonImage source={cachedPokemonImage.source} />
        </SlotContainer>
      </TouchableOpacity>
    </Animated.View >
  )
}

export default Slot





  // const onPressHandlerOpenModelIfPass = () => {
  //   console.log("Clicked")
  //   setBackCount(backCount + 1)
  //   if (backCount == 1) {
  //     clearTimeout(backTimer)
  //     console.log("Clicked twice")
  //   } else {
  //     setBackTimer(setTimeout(() => {
  //       setBackCount(0)
  //       console.log('reset')
  //     }, 1000)) //#mention here the time for clearing the counter in ms
  //   }
  // }