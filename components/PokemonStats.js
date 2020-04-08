import React, { useContext, useState, useEffect, useRef } from 'react'
import { View, Animated, PanResponder, Button } from 'react-native'
import { themes } from '../theming/themingStyles'
import { PokeStatsContext } from '../screens/PokeStatsScreen'
import { useSelector } from 'react-redux'
import { styles } from '../styles/globalStyles'
import { CachedImageStyle, ImageBackground } from '../styles/imageStyles'
import Tabs from './Tabs'
import About from './TabComps/About'
import BaseStats from './TabComps/BaseStats'
import Moves from './TabComps/Moves'
import Evolution from './TabComps/Evolution'
import useCachedImage from './hooks/useCachedImage'
import SwitchToNextPokemon from './SwitchToNextPokemon'
//! Loading screen, pokemonImage over navigiationHeader => then we got design... favorite pokemon page and team of 6 pokemon. 

const IMAGE_HEIGHT = 450
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const PokemonStats = () => {
   const theme = useSelector(state => state.theme)
   const { uri } = useContext(PokeStatsContext)
   const [scrollAnimatedValue] = useState(new Animated.Value(0));
   const [scrollEnabled, setScrollEnabled] = useState(false)
   const cachedImage = useCachedImage(`https://pokeres.bastionbot.org/images/pokemon/${uri}.png`)
   const ref = useRef(null)
   
   useEffect(() => {
      if (ref.current !== null) {
         console.log(ref.current)
      }
   }, [ref])
   
   const interpolateTranslateY = {
      translateY: scrollAnimatedValue.interpolate({
         inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
         outputRange: [+IMAGE_HEIGHT / 2, 0, -IMAGE_HEIGHT / 2], //? this is fascinating. It resizes the screen according to what position the ScrollView is in
         extrapolateRight: 'clamp'
      })
   }
   const interpolateScale = {
      scale: scrollAnimatedValue.interpolate({
         inputRange: [-IMAGE_HEIGHT, 0],
         outputRange: [2, 1],
         extrapolateRight: 'clamp'
      })
   }
   useEffect(() => {
      // const animatedListenerId =  scrollAnimatedValue.addListener

      // const animatedListenerId = scrollAnimatedValue.addListener(({ value }) =>
      //    (() => {
      //       if (value < 135) {
      //          setScrollEnabled(false)
      //          console.log('21')
      //       } else if (value > 135) {
      //          setScrollEnabled(true)
      //          console.log('abc')
      //       }
      //       // console.log(value < 135, 'eeee')
      //    })()
      // );
      // return () => {
      //    scrollAnimatedValue.addListener(animatedListenerId);
      // }
   }, [])
   // console.log(scrollEnabled === true)
   useEffect(() => {
      // console.log( 'scrollEnabled')
   }, [scrollEnabled])

   const testFunc = () => {
      let three
      three = 2
      if (1 === 1) {
         three = 40
      }
      console.log(three)
   }

   const handleScroll = (event) => {

      console.log(event.nativeEvent.contentOffset.y)
      // console.log('passed122')
   }

   return (
      <View style={{ flex: 1, }}>
         {/* <SwitchToNextPokemon /> */}
         <AnimatedImageBackground
            source={themes[theme].backgroundImage}
            style={{
               height: IMAGE_HEIGHT,
               transform: [
                  interpolateTranslateY,
                  interpolateScale
               ]
            }}
         >
            <CachedImageStyle
               source={cachedImage.source}
            />
         </AnimatedImageBackground>
         <Animated.ScrollView
            ref={ref}
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: scrollAnimatedValue } } }],
               { useNativeDriver: true },
            )}
            scrollEventThrottle={8}
            contentContainerStyle={{ ...styles.scrollViewContentContainer, marginTop: IMAGE_HEIGHT }}>
            <View style={{ zIndex: 1900 }}>
               <Button style={{ margin: 29 }} title='test123' onPress={() => testFunc()} />
               <Tabs
                  btnStyle={{ backgroundColor: '#04BD78' }}
                  textStyle={{ color: 'white' }}
                  tabTitles={['about', 'base stats', 'moves', 'evolutions']}
                  contentComponents={[
                     <About />,
                     <BaseStats />,
                     <Moves />,
                     <Evolution scrollEnabled={scrollEnabled} setScrollEnabled={setScrollEnabled} />
                  ]} />
            </View>
         </Animated.ScrollView>
      </View>
   )
}

export default PokemonStats

// const name = (params) => {
   // if (value < 135 && MscrollIsEnabled) {
   //    setScrollEnabled(false)
   //    console.log('21')
   // } else if (value > 135 && !MscrollIsEnabled) {
   //    setScrollEnabled(true)
   //    scrollIsEnabled = true
   //    console.log('abc')
   // }
// }