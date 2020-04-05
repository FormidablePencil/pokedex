import React, { useState, useEffect, useRef } from 'react'
import useCachedImage from "./hooks/useCachedImage"
import { View, Text, Dimensions, ImageBackground, LayoutAnimation, PanResponder, Animated, TouchableHighlight } from "react-native"
import styled from 'styled-components';
import pokeballImg from '../assets/images/Pokeball1.png'
import { useSelector } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { themes } from '../theming/themingStyles';
const screenHeight = Dimensions.get('window').height
import { PokemonSlotImageBg, PokemonImage } from '../styles/imageStyles'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import RenderTypes from './RenderTypes';
import { SlotContainer } from '../styles/containerStyles';

const AnimatedPokemonSlotImageBg = Animated.createAnimatedComponent(PokemonSlotImageBg)
const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight)

//~ when double clicked open modal to veiw pokemon's effectivness/favAndAdd-to-team-options
const Slot = ({ id, selectorMode }) => {
  //here you will be able to do three diffrent things hold and drag to change places after longpress held. The pokeball will start changing. 2. Double click to view the effectiveness of the pokemon and 3, navigate to the pokestats page by double clicking
  const { type } = useSelector(state => state.fetchedAllPokemon.filter(cluster => cluster.pokemon_id === id)[0])
  const cachedPokemonImage = useCachedImage(`https://pokeres.bastionbot.org/images/pokemon/${id}.png`)
  const [backCount, setBackCount] = useState(0)
  const [backTimer, setBackTimer] = useState()
  const positionOfSlot = new Animated.ValueXY({ x: 0, y: 0 })
  const scaleOfSlot = new Animated.Value(1)
  const scaleOfBg = new Animated.Value(1)
  const ref = useRef(null) //manually trigger method on element that held ref
  const ref2 = useRef(null)
  const bounce = () => ref.current.pulse(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  // const movementPanHandler = ref.current = 

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      if (selectorMode) {
        positionOfSlot.setValue({ x: gesture.dx, y: gesture.dy });
      }
    },
    onPanResponderGrant: (event, gesture) => {
      scaleOfSlot.setValue(1.1)
      scaleOfBg.setValue(1.2)
    },
    onPanResponderEnd: (event, gesture) => {
      scaleOfSlot.setValue(1)
      scaleOfBg.setValue(1)
    },
    onPanResponderRelease: (e, gesture) => {
      Animated.spring(positionOfSlot, {
        toValue: { x: 0, y: 0 },
        friction: 5
      }).start();
    },
  })

  const onPressHandlerOpenModelIfPass = () => {
    console.log("Clicked")
    setBackCount(backCount + 1)
    if (backCount == 1) {
      clearTimeout(backTimer)
      console.log("Clicked twice")
    } else {
      setBackTimer(setTimeout(() => {
        setBackCount(0)
        console.log('reset')
      }, 1000)) //#mention here the time for clearing the counter in ms
    }
  }

  useEffect(() => {
    if (selectorMode) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        executeAnimation()
      }, (Math.random() * 3000) + 500)
    }
  }, [selectorMode])
  const executeAnimation = () => {
    // scaleOfBg.setValue(1)
    Animated.timing(scaleOfBg, {
      toValue: 1.1,
      friction: 20,
      duration: 300,
      // delay: 6000
    }).start(() => executeAnimation2()); //when selectorMode === true then fire function 
  }

  const executeAnimation2 = () => {
    // scaleOfBg.setValue(1.5)
    Animated.timing(scaleOfBg, {
      toValue: 1.22,
      friction: 10,
      duration: 300,
      // delay: 6000
    }).start(() => executeAnimation());
  }

  // runAnimation() {
  //   this.animatedValue.setValue(300);
  //   Animated.timing(this.animatedValue, {
  //     toValue: -100,
  //     duration: 3000,
  //   }).start(() => this.runAnimation());
  // }

  return (
    <Animated.View
      {...selectorMode && { ...panResponder.panHandlers }}
      useNativeDriver
      ref={ref2}
      style={[positionOfSlot.getLayout(), { flex: 1 }]}
    >
      <SlotContainer style={{ height: screenHeight / 4, width: 200, alignItems: 'center', justifyContent: 'center' }}>
        <RenderTypes type={type} />
        <View useNativeDriver style={{ position: 'absolute' }}>
          <AnimatedPokemonSlotImageBg useNativeDriver style={{ transform: [{ scale: scaleOfBg }] }} fadeDuration={1} source={pokeballImg} />
        </View>
        <PokemonImage source={cachedPokemonImage.source} />
      </SlotContainer>
    </Animated.View >
  )
}
export default Slot