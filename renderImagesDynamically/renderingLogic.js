
import React from 'react'
import { View, Text, Image } from 'react-native'
import {  } from 'native-base';

import gen1 from './gen1';
import gen2 from './gen2';
import gen3 from './gen3';
import gen4 from './gen4';
import gen5 from './gen5';
import gen6 from './gen6';
import gen7 from './gen7';
import { globalStyles } from '../styles/globalStyles';

let convertToOrderedObject = (png, startingPokemonNum, amountOfPokemon, path) => {
  let newArray = [];
  for(i = 1; i <= amountOfPokemon; i++) {
    newArray.push({num: i+startingPokemonNum-1, image: png[i-1], src: require('../assets/Pokémon/1stGeneration/004Charmander.png') });
  };

  return newArray;
}
//  path + png[i-1] + '\'

// let gen1Converted = convertToOrderedObject(gen1, 1, 151, 'Image source={require(\'../assets/Pokémon/1stGeneration/'); //pokemon num-151
let gen1Converted = convertToOrderedObject(gen1, 1, 151, '\'../assets/Pokémon/1stGeneration/'); //pokemon num-151
let gen2Converted = convertToOrderedObject(gen2, 152, 100, '../assets/Pokémon/2ndGeneration/');  //num: 152-251 
let gen3Converted = convertToOrderedObject(gen3, 252, 135, '../assets/Pokémon/3rdGeneration/');  //num: 252-386
let gen4Converted = convertToOrderedObject(gen4, 387, 108, '../assets/Pokémon/4thGeneration/');  //num: 387-494
let gen5Converted = convertToOrderedObject(gen5, 495, 156, '../assets/Pokémon/5thGeneration/');  //num: 387-495
let gen6Converted = convertToOrderedObject(gen6, 650, 71, '../assets/Pokémon/6thGeneration/');  //num: 387-495
let gen7Converted = convertToOrderedObject(gen7, 722, 81, '../assets/Pokémon/7thGeneration/');  //num: 387-495

let allPokemon = gen1Converted.concat(gen2Converted, gen3Converted, gen4Converted, gen5Converted, gen6Converted, gen7Converted);

// console.log(495-387) //108

// console.log(gen7.length);
// console.log(allPokemon.length);
// console.log(gen1Converted);
// console.log(gen7Converted);
// console.log(gen6Converted);

console.log(gen1Converted[0]['src']);

let okeydoky = gen1Converted[0]['src'];
// // console.log(eval(gen1Converted[0]['src']));

// // let pokemonSelected = '../assets/Pokémon/1stGeneration/004Charmander.png';
// let pokemonSelected = eval('../004Charmander.png');

// const path = { require: require(pokemonSelected) }
// const path2 = { require: require(`../assets/Pokémon/1stGeneration/004Charmander.png`) }

const Profiles=[
  {
  "id" : "1",
  "name" : "Peter Parker",
  "src" : require('../assets/Pokémon/1stGeneration/004Charmander.png'),
  "age":"70",
},
{
"id" : "2",
"name" : "Barack Obama",
// "src" : require('../images/user2.png'),
"age":"19",
},
{
"id" : "3",
"name" : "Hilary Clinton",
// "src" : require('../images/user3.png'),
"age":"50",
}
]

const RenderingLogic = () => {
  return (
    <View  style={{height: 100, width: 100}}>
      {/* <View>{okeydoky}</View>  */}
      {/* <Image source={result} style={globalStyles.pokemonGif} /> */}
      <Image source={gen1Converted[0]['src']} style={globalStyles.pokemonGif} />

    </View>
  )
}

export default RenderingLogic

