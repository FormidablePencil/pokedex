import React from 'react'
import { View, Text, Tabs, Tab, TabHeading, Icon } from 'native-base'
import { globalStyles } from '../styles/globalStyles'
import Tab1 from './Tab1'


const TabsComp = ({ tabColor, pokemonId, type }) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Tabs tabBarUnderlineStyle={{ backgroundColor: tabColor }}>
        <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Text>About</Text></TabHeading>}>
          <Tab1 pokemonId={pokemonId} type={type} />
        </Tab>
        <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Text>Base Stats</Text></TabHeading>}>
          {/* <Tab2 /> */}
        </Tab>
        <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Text>Evolution</Text></TabHeading>}>
          {/* <Tab3 /> */}
        </Tab>
        <Tab heading={<TabHeading style={{ backgroundColor: 'white' }}><Text>Moves</Text></TabHeading>}>
          {/* <Tab3 /> */}
        </Tab>
      </Tabs>
    </View>
  )
}

export default TabsComp


{ /* <Tab1 /> */ }