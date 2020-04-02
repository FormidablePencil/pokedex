import React, { useEffect, useContext, useState } from 'react'
import { View, Text, ImageBackground, Animated, StyleSheet, Button } from 'react-native'
import { themes } from '../theming/themingStyles'
import { PokeStatsContext } from '../screens/PokeStatsScreen'
import { ScrollView } from 'react-native-gesture-handler'
import CachedImage from '../screens/CachedImage'
import { SimpleView } from '../styles/globalStyles'
import { useSelector } from 'react-redux'
import { PokeStatsContainer, StatsSection } from '../styles/containerStyles'
import { ImageBackgroundPokeStats } from '../styles/miscStyles'
import Tabs from './Tabs'
import { addListener } from 'expo/build/Updates/Updates'
import About from './TabComps/About'
import BaseStats from './TabComps/BaseStats'
import Moves from './TabComps/Moves'
import Evolution from './TabComps/Evolution'

//@ problem: want to turn off interpolation when it reaches a certain value so the pokemon was visible when scrolling through it's stats
//~ what there is to master in animations: How to minipulate the number assigned to the styles
// const AnimatedImageBackgroundPokeStats = Animated.createAnimatedComponent(ImageBackgroundPokeStats);
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);

const IMAGE_HEIGHT = 450

const PokemonStats = () => {
   const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
   const { theme, uri } = useContext(PokeStatsContext)
   scrollAnimatedValue = new Animated.Value(0);
   const [interpolationValue, setInterpolationValue] = useState(false)
   // console.log(Object.keys(fetchedSpecificPokemon))

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

   // when scrolling background chages

   return ( //~ keeping it unRefractored for refernce
      <View style={{ flex: 1, }}>
         <AnimatedImageBackground
            source={theme ? themes[theme].backgroundImage : null}
            style={{
               position: 'absolute', top: 0, left: 0, right: 0,
               height: IMAGE_HEIGHT,
               alignSelf: 'center',
               width: '100%',
               alignItems: 'center',
               justifyContent: 'center',
               transform: [
                  interpolateTranslateY,
                  interpolateScale
               ]
            }}
         >
            {/* <View.Animated
               style={{opacity: }}
            > */}
               <CachedImage
                  imageStyles={{ zIndex: 300, bottom: 135, position: 'absolute', transform: [{ scale: 2 }] }}
                  source={`https://pokeres.bastionbot.org/images/pokemon/${uri}.png`} />
            {/* </View.Animated> */}
         </AnimatedImageBackground>
         <Animated.ScrollView
            onScroll={Animated.event(
               [{ nativeEvent: { contentOffset: { y: scrollAnimatedValue } } }],
               { useNativeDriver: true }
            )}
            scrollEventThrottle={8}
            contentContainerStyle={styles.scrollViewContentContainer}>
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

const contentsDummyData = [{ tab: 'eatMe' }, { tab: 'jelly' }]
const FakeItem = () => <View style={{
   height: 100,
   borderRadius: 8,
   marginVertical: 10,
   marginHorizontal: 20,
   backgroundColor: '#dedede',
}} />;
const FakeItem2 = () => <View style={{
   height: 100,
   borderRadius: 8,
   marginVertical: 10,
   marginHorizontal: 20,
   backgroundColor: 'orange',
}} />;

export default PokemonStats

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   scrollViewContentContainer: {
      marginTop: IMAGE_HEIGHT,
      backgroundColor: 'white',
      paddingTop: 10,
   },
   fakeItemContainer: {
      height: 100,
      borderRadius: 8,
      marginVertical: 10,
      marginHorizontal: 20,
      backgroundColor: '#dedede',
   },
   catImage: {
      position: 'absolute', top: 0, left: 0, right: 0,
      height: IMAGE_HEIGHT,
      alignSelf: 'center',
   }
});
