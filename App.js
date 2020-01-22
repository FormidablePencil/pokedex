import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, ImageBackground } from 'react-native';
import { AppLoading } from 'expo';
import axios from 'axios';
import { Input, Button, Container, Header, Left, Right, Body, Title, Content, Tabs, Tab, Icon, Item } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from './styles/globalStyles';

import Description from './components/Description';
import HeaderComp from './components/Header';
import MainContent from './components/MainContent';
const pokemonGif = require('pokemon-gif');
import { Col, Row, Grid } from 'react-native-easy-grid';
import Tab1About from './components/tabs/Tab1About';

export default class App extends Component {
  state = {
    isReady: true,
    pokemon: '001Bulbasaur',
    isReady: '',
    images: [],
    linkUri: './assets/Pokémon/1stGeneration/002Ivysaur.png'
    // images: [hi = {hey}]
  }

  whosThatPokemon = () => {
    const images = imageLoader();
    this.setState({ images:images });
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    
    // console.log(images.Ivysaur);
    let dd = require("./assets/Pokémon/1stGeneration/002Ivysaur.png") 
    // const initialArr = images;
        // console.log(imageLoader[0].require)
    // let image = './assets/Pokémon/1stGeneration/' + this.state.pokemon + '.png';

    let hellow = 4;

    return (
      <Container style={globalStyles.mainContainer}>
        <Image style={globalStyles.backgroundImage} source={require('./assets/nativePokemonPaper.png')} />

        <Header transparent span searchBar rounded>
          <Item>
            <Icon active name="search" />
            {/* <Input placeholder="Search" onChangeText={this.whosThatPokemon()} /> */}

            <Image style={globalStyles.imageInInput} source={require('./assets/pngkey.com-pokeball-png-249653.png')} />
            {/* <Icon active name="people" /> */}
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Container style={globalStyles.transparent}>
            <Grid>
              <Row style={globalStyles.transparent}>
              </Row>
              <Row style={globalStyles.rowStats}>
                <Container style={globalStyles.stats} >
                  
                  <Image style={globalStyles.pokemonGif} resizeMode="contain" source={{ uri: `https://pokeres.bastionbot.org/images/pokemon/${hellow}.png`}} />
                  
             
                  <Tabs style={globalStyles.tabs}>
                    <Tab heading="testing">
                      <Tab1About />
                    </Tab>
                    <Tab heading="testings">
                      <Text>100</Text>
                    </Tab>
                    <Tab heading="testingss">
                      <Text>100</Text>
                    </Tab>
                    <Tab heading="health">
                      <Text>100</Text>
                      <Button success onPress={this.whosThatPokemon}><Text>hello</Text></Button>
                    </Tab>

                  </Tabs>
                </Container>
              </Row>
            </Grid>
          </Container>
        </Content>
      </Container>


    );
  }
}

  //~ we are going to use the pokemon api to display the stats of the pokemon

  // saveToAsyncStorage = (passedIn) => {
  //   console.log(passedIn);
  //   AsyncStorage.setItem('saved', passedIn);
  // }

  // displayData = async () => {
  //   try {
  //     let saved = await AsyncStorage.getItem('saved'); 
  //     alert(saved);
  //   }
  //   catch(error) {
  //     alert(error);
  //   }
  // }

  // searchPoke = () => {
  //   this.setState({ onCall: true });
  //   let self = this;
  //   axios.get('http://pokeapi.co/api/v2/pokemon/' + this.state.pokeSearch.toLowerCase())
  //     .then(function (response) {
  //       self.setState({ data: response.data });
  //       self.setState({ onCall: false });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }
