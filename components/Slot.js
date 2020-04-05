import React, { useState, useEffect } from 'react'
import useCachedImage from "./hooks/useCachedImage"
import { View, Text, Dimensions, ImageBackground, LayoutAnimation, PanResponder, Animated } from "react-native"
import styled from 'styled-components';
import pokeballImg from '../assets/images/Pokeball1.png'
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { themes } from '../theming/themingStyles';
const screenHeight = Dimensions.get('window').height
import { PokemonSlotImageBg } from '../styles/imageStyles'

const AnimatedPokemonSlotImageBg = Animated.createAnimatedComponent(PokemonSlotImageBg)

const Slot = ({ id }) => {
  //here you will be able to do three diffrent things hold and drag to change places. double click to view the effectiveness of the pokemon and 3, navigate to the pokestats page
  const { type } = useSelector(state => state.fetchedAllPokemon.filter(cluster => cluster.pokemon_id === id)[0])
  const [pokeSlotImgLoaded, setPokeSlotImgLoaded] = useState(false)
  const cachedPokemonImage = useCachedImage(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
  const customSpring = { duration: 300, create: { type: 'linear', property: 'opacity' }, update: { type: 'spring', springDamping: 0.4 }, delete: { type: 'linear', property: 'opacity' } }
  const positionOfSlot = new Animated.ValueXY()
  const scaleOfSlot = new Animated.Value(1)
  const scaleOfBg = new Animated.Value(1)

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true, // config...
    onPanResponderMove: (event, gesture) => {
      positionOfSlot.setValue({ x: gesture.dx, y: gesture.dy }); //assigns the values of where your mouse is a varaible
    },
    onPanResponderGrant: (event, gesture) => {
      scaleOfSlot.setValue(1.1)
      scaleOfBg.setValue(1.2)
    },
    onPanResponderEnd: (event, gesture) => {
      scaleOfSlot.setValue(1)
      scaleOfBg.setValue(1)
    },
  })

  return (
    <Animated.View
      style={[positionOfSlot.getLayout(), { flex: 1, transform: [{ scale: scaleOfSlot }] }]}
      {...panResponder.panHandlers}
    >
      <SlotContainer style={{ height: screenHeight / 4, alignItems: 'center', justifyContent: 'center' }}>
        <TypesContainer style={{ top: -70, zIndex: 15, justifyContent: 'center', width: 40 }}>
          {type.map(specificType => {
            const adjustedMissalignedTypeImg = specificType === 'Bug' ? { top: -1 } : { top: 0 }
            return (
              // <LinearGradient end={[.1, 1.3]} style={{ width: 50, height: 30, borderRadius: 4, marginVertical: 2 }} key={specificType}>
              <View style={{ height: 40, width: 40, borderRadius: 4, marginVertical: 2, overflow: 'hidden' }}>
                <PokeTypeImage style={adjustedMissalignedTypeImg} source={themes[specificType.toLowerCase()].typeImage} />
              </View>
              // {/* <Text>{specificType}</Text> */}
              // </LinearGradient>
            )
          })}
        </TypesContainer>
        <AnimatedPokemonSlotImageBg style={{ transform: [{ scale: scaleOfBg }] }} fadeDuration={1} source={pokeballImg} />
        {/* {pokeSlotImgLoaded && */}
        <PokemonImage source={cachedPokemonImage.source} />
        {/* } */}
      </SlotContainer>
    </Animated.View >
  )
}
export default Slot

export const PokemonImage = styled.Image`
  z-index: 20;
  height: 140px;
  width: 140px;
  resize-mode: contain;
  position: absolute;
`;
export const PokeTypeImage = styled.Image`
  /* flex: 1; */
  height: 53px;
  width: 40px;
  bottom: 0px;
  /* resize-mode: contain; */
`;
export const SlotContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export const TypesContainer = styled.View` 
  z-index: 15;
  flex-direction: row;
`;

//~ use icons for types