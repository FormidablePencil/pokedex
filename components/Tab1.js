import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../styles/globalStyles'


export default Tab1 = ({pokemonId, type}) => {
  return (
    <View>
      <View>
        <Text style={{ color: 'green' }}>{pokemonId}</Text>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>Species</Text>
          <Text style={globalStyles.resultForStats}>ghjf</Text>
        </View>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>Height</Text>
          <Text style={globalStyles.resultForStats}>dfvb</Text>
        </View>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>Weight</Text>
          <Text style={globalStyles.resultForStats}>Sed</Text>
        </View>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>Abilities </Text>
          <Text style={globalStyles.resultForStats}>sesd</Text>
        </View>

      </View>
        <View style={{ ...globalStyles.statsContainer, ...globalStyles.paddingBottom }}>
          <Text style={globalStyles.boldHeader}>Breeding</Text>
        </View>
      <View>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>gender</Text>
          <Text style={globalStyles.resultForStats}>boy girl 10%</Text>
        </View>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>Egg Groups</Text>
          <Text style={globalStyles.resultForStats}>MonsteR</Text>
        </View>
        <View style={globalStyles.statsContainer}>
          <Text style={globalStyles.statsText}>Egg Cycle</Text>
          <Text style={globalStyles.resultForStats}>Grasz</Text>
        </View>



        <View style={globalStyles.glitchWithFramwork}></View>

      </View>
    </View>
  )
}
