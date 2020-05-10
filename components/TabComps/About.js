import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, StatsView, StatsText, DescriptionView, TabTextStandard, TabTextHeader, TabTextDescription } from '../../styles/TabContentStyles';
import { StandardHeaderText, StandardText } from '../../styles/textStyles';

const About = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const [description, setDescription] = useState()

  useEffect(() => {
    if (fetchedSpecificPokemon.species !== undefined) {
      setDescription(fetchedSpecificPokemon.species.flavor_text_entries.filter(cluster => cluster.language.name === 'en')[0].flavor_text)
    }
  }, [fetchedSpecificPokemon])

  // console.log(fetchedSpecificPokemon)
  return (
    <Container>
      {fetchedSpecificPokemon &&
        <View>
          <DescriptionView>
            <TabTextHeader>Description</TabTextHeader>
            <TabTextDescription>{description}</TabTextDescription>
          </DescriptionView>
          <StatsView>
            <TabTextStandard>weight</TabTextStandard>
            <TabTextStandard>{Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.weight}</TabTextStandard>
          </StatsView>
          <StatsView>
            <TabTextStandard>height</TabTextStandard>
            <TabTextStandard>{Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.height}</TabTextStandard>
          </StatsView>
        </View>
      }
    </Container>
  )
}

export default About
