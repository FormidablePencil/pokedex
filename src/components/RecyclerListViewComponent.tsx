import React, { Component } from 'react';
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native';
// import faker from 'faker';
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview';
import IndexCardComp from './IndexCardComp';
import { PokeIndexContainer } from '../styles/containerStyles';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class RecyclerListViewComponent extends Component {

  constructor(props) {
    super(props);

    // const fakeData = [];
    // for (i = 0; i < 100; i += 1) {
    //   fakeData.push({
    //     type: 'NORMAL',
    //     item: {
    //       id: i,
    //       image: faker.image.avatar(),
    //       name: faker.name.firstName(),
    //       description: faker.random.words(5),
    //     },
    //   });
    // }
    this.state = {
      list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(this.props.fetchedAllPokemon),
    };

    this.layoutProvider = new LayoutProvider((i) => {
      // console.log(this.state.list.getDataForIndex(i));
      // return this.state.list.getDataForIndex(i).type;
      return 1
    }, (i, dim) => {
      switch (i) {
        case i === 0:
          dim.width = SCREEN_WIDTH;
          dim.height = 100;
          break;
        default:
          dim.width = SCREEN_WIDTH / 2.001;
          dim.height = 130;
          break;
      };
    })
  }

  rowRenderer = (type, data) => {
    return (
      <View style={{ flex: 1 }}>
        <IndexCardComp
          specificPokemon={data}
          handleOnPressGoToStatsScreen={this.props.handleOnPressGoToStatsScreen}
        />
      </View>
    )
  }

  render() {
    return (
      <RecyclerListView
        renderAheadOffset={600}
        style={{ flex: 1 }}
        rowRenderer={this.rowRenderer}
        dataProvider={this.state.list}
        layoutProvider={this.layoutProvider}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    minHeight: 1,
    minWidth: 1,
  },
  body: {
    marginLeft: 10,
    marginRight: 10,
    maxWidth: SCREEN_WIDTH - (80 + 10 + 20),
  },
  image: {
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    opacity: 0.5,
  },
  listItem: {
    flexDirection: 'row',
    margin: 10,
  },
});