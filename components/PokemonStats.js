import React, { useContext, useState, useEffect } from 'react'
import { View, Animated } from 'react-native'
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

//! Loading screen, pokemonImage over navigiationHeader => then we got design... favorite pokemon page and team of 6 pokemon. 

const IMAGE_HEIGHT = 450
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const PokemonStats = () => {
  const favoritePokemon = useSelector(state => state.favoritePokemon)
   const theme = useSelector(state => state.theme)
   const { uri } = useContext(PokeStatsContext)
   const [scrollAnimatedValue] = useState(new Animated.Value(0));
   const cachedImage = useCachedImage(`https://pokeres.bastionbot.org/images/pokemon/${uri}.png`)
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
      console.log(favoritePokemon)
   }, [favoritePokemon])
   
   return (
      <View style={{ flex: 1, }}>
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
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: scrollAnimatedValue } } }],
               { useNativeDriver: true }
            )}
            scrollEventThrottle={8}
            contentContainerStyle={{ ...styles.scrollViewContentContainer, marginTop: IMAGE_HEIGHT }}>
            <Tabs
               textStyle={{ color: 'black' }}
               tabTitles={['about', 'base stats', 'moves', 'evolutions']}
               btnStyle
               contentComponents={[
                  <About />,
                  <BaseStats />,
                  <Moves />,
                  <Evolution />
               ]} />
         </Animated.ScrollView>
      </View>
   )
}

export default PokemonStats

