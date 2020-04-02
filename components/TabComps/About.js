import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, StatsView, StatsText, DescriptionView } from '../../styles/TabContentStyles';
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
            <StandardHeaderText>Description</StandardHeaderText>
            <StandardText>{description}</StandardText>
          </DescriptionView>
          <StatsView>
            <StatsText>weight</StatsText>
            <StatsText>{Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.weight}</StatsText>
          </StatsView>
          <StatsView>
            <StatsText>height</StatsText>
            <StatsText>{Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.height}</StatsText>
          </StatsView>
        </View>
      }
    </Container>
  )
}

export default About
