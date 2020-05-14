import React, { useContext, useState, useEffect } from 'react'
import { View, Animated, Text } from 'react-native'
import { themes } from '../theming/themingStyles'
import { PokeStatsContext } from '../screens/PokeStatsScreen'
import { useSelector } from 'react-redux'
import { styles, FlexContainer } from '../styles/globalStyles'
import { CachedImageStyle, ImageBackground } from '../styles/imageStyles'
import Tabs from './Tabs'
import About from './TabComps/About'
import BaseStats from './TabComps/BaseStats'
import Moves from './TabComps/Moves'
import Evolution from './TabComps/Evolution'
import { LinearGradient } from 'expo-linear-gradient'
import { LightenDarkenColor } from 'lighten-darken-color';
import useRenderImgsDynamically from './hooks/useRenderImgsDynamically'
import PokeTeamLimitMsg from './PokeTeamLimitMsg'

const IMAGE_HEIGHT = 450
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const PokemonStats = () => {
   const theme = useSelector(state => state.theme)
   const { uri } = useContext(PokeStatsContext)
   const [scrollAnimatedValue] = useState(new Animated.Value(0));
   const [scrollEnabled, setScrollEnabled] = useState(false)
   const [renderPokemonImg, setRenderPokemonImg] = useState(null)
   const txtColor = themes[theme].pokeBox.contentTxtColor

   useEffect(() => {
      useRenderImgsDynamically({ pokemon_id: uri,  setRenderPokemonImg })
   }, [uri])

   const interpolateTranslateY = {
      translateY: scrollAnimatedValue.interpolate({
         inputRange: [-IMAGE_HEIGHT, 0, IMAGE_HEIGHT],
         outputRange: [+IMAGE_HEIGHT / 2, 0, -IMAGE_HEIGHT / 2],
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

   return (
      <FlexContainer>
         {/* <PokeTeamLimitMsg /> */}
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
            <CachedImageStyle source={renderPokemonImg} />
         </AnimatedImageBackground>
         <Animated.ScrollView
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: scrollAnimatedValue } } }],
               { useNativeDriver: true },
            )}
            scrollEventThrottle={8}
            contentContainerStyle={{ ...styles.scrollViewContentContainer, marginTop: IMAGE_HEIGHT }}>
            <LinearGradient colors={themes[theme].pokeBox.linearGradientColors} start={[1, .01]} end={[1, .4]}>
               <View /* style={{ zIndex: 30 }} */>
                  <Tabs
                     btnStyle={{ backgroundColor: LightenDarkenColor(themes[theme].pokeBox.linearGradientColors[0], 30) }}
                     lineColor={LightenDarkenColor(themes[theme].pokeBox.linearGradientColors[1], 60)}
                     textStyle={{ color: txtColor ? txtColor : 'white' }}
                     tabTitles={['about', 'base stats', 'moves', 'evolutions']}
                     contentComponents={[
                        <About />,
                        <BaseStats />,
                        <Moves />,
                        <Evolution scrollEnabled={scrollEnabled} setScrollEnabled={setScrollEnabled} />
                     ]} />
               </View>
            </LinearGradient>
         </Animated.ScrollView>
      </FlexContainer>
   )
}

export default PokemonStats