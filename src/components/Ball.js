//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, StyleSheet, PanResponder, Animated, Image } from 'react-native';
import dragon from '../assets/images/pokeTypesWithNames/electric.png'
// create a component
const Ball = () => { 
   const position = new Animated.ValueXY()
   const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, // config...
      onPanResponderMove: (event, gesture) => { //tracks your mouse movement when pressed and dragged from from the dot
         // position.setOffset({ x: gesture.dx, y: gesture.dy }) //assigns the values of where your mouse is a varaible
         position.setValue({ x: gesture.dx, y: gesture.dy }); //assigns the values of where your mouse is a varaible
      },
      //@ how to we start again with the position we left off at
   })
   console.log(position)
   // this.state = { panResponder, position };

   return (
      <Animated.Image
         source={dragon}
         style={[position.getLayout()]} //
         {...panResponder.panHandlers} //enables panResponder for this element
      />
   );
}

const styles = StyleSheet.create({
   ball: {
      height: 80,
      width: 80,
      borderColor: 'black',
      borderRadius: 40,
      borderWidth: 40
   },
});
//make this component available to the app
export default Ball;