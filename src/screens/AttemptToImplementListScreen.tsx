import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { LayoutProvider, RecyclerListView, DataProvider } from 'recyclerlistview'
import IndexCardComp from '../components/IndexCardComp'


const SCREEN_WIDTH = Dimensions.get('window').width

const AttemptToImplementListScreen = () => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const [data, setData] = useState({ list: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(fetchedAllPokemon) })

  // useEffect(() => {
  //   const data = []
  //   for (i = 0; i < 100; i++) {
  //     data.push({
  //       type: 'NORMAL',

  //     })
  //   }
  // })

  const layoutProvider = new LayoutProvider((i) => {
    // console.log(i)
    // console.log(data.list.getDataForIndex(i))
    // return data.list.getDataForIndex(i).form
    return i
  }, (i, dim) => {
    switch (i) {
      default:
        dim.width = SCREEN_WIDTH / 2.0001
        dim.height = 170
        break
    }
  })

  const rowRenderer = (type, data) => {
    // console.log(data.pokemon_name, 'suc')
    // const {image, name, description, time} = data.item
    return (
      <View style={{ flex: 1 }}>
        <IndexCardComp
          specificPokemon={data}
        // handleOnPressGoToStatsScreen={handleOnPressGoToStatsScreen} 
        />
        {/* <Text>{data.pokemon_name}</Text>
        <Text>{data.pokemon_id}</Text> */}
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <RecyclerListView
        // style={{ flex: 1 }}
        // renderAheadOffset={20}
        rowRenderer={rowRenderer}
        dataProvider={data.list}
        layoutProvider={layoutProvider}
      />
    </View>
  )
}

export default AttemptToImplementListScreen
