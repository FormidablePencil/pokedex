import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Container, StatsView, DescriptionView, TabTextStandard, TabTextHeader, TabTextDescription } from '../../styles/TabContentStyles';
import { themes } from '../../theming/themingStyles';

const About = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const [description, setDescription] = useState()
  const theme = useSelector(state => state.theme)
  const txtColor = themes[theme].pokeBox.contentTxtColor

  useEffect(() => {
    if (fetchedSpecificPokemon.species !== undefined) {
      setDescription(fetchedSpecificPokemon.species.flavor_text_entries.filter(cluster => cluster.language.name === 'en')[0].flavor_text)
    }
  }, [fetchedSpecificPokemon])

  return (
    <Container>
      {fetchedSpecificPokemon &&
        <View>
          <DescriptionView>
            <TabTextHeader>Description</TabTextHeader>
            <TabTextDescription
              color={txtColor}
            >{description}</TabTextDescription>
          </DescriptionView>
          <StatsView>
            <TabTextStandard
              color={txtColor}
            >weight</TabTextStandard>
            <TabTextStandard
              color={txtColor}
            >{Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.weight}</TabTextStandard>
          </StatsView>
          <StatsView>
            <TabTextStandard
              color={txtColor}
            >height</TabTextStandard>
            <TabTextStandard
              color={txtColor}
            >{Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.height}</TabTextStandard>
          </StatsView>
        </View>
      }
    </Container>
  )
}

export default About
