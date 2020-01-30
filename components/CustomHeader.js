import React, { Component } from 'react'
import { Text, View, Image, StatusBar, ImageBackground } from 'react-native'
import { Container, Header, Body, Right, Left, Content, Input } from 'native-base';
import TabsComp from '../components/TabsComp';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { globalStyles } from '../styles/globalStyles';
import PokemonFrame from '../components/PokemonFrame';
import { connect } from 'react-redux'
import { createPokemon } from '../actions/postActions' // this is the funciton that make the dominos of redux tumble down

//! this component is to add a custom header for PokeStats' React Navigation header. Must be moved when done with it.
export default CustomHeader = () => { //~ For this header to work on the top of it then I'll have to create 1. fetch the pokemon types and set it to state (we've already done that, we just need to put the fetch in redux's postActions and then 2, hook up this header component to redux state and set the pokemon types respectively.
    return (
      <View>{
        this.props.types ? (

          <View>

            <Text>{title}</Text>
            {/* <Text>{type}hi</Text> */}
            <Text>{}</Text>
            {/* <View style={{ backgroundColor: 'pink', paddingTop: 50, paddingRight: 50 }}> */}
            {type.map((item, index) => (<View style={globalStyles.pokemonTypes}><Text style={{ color: 'white' }} key={index}>{item}</Text></View>))}
            {/* </View> */}
          </View >
        ) : (
            null
          )
      }
      </View>
    )
  }