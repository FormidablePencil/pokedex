import React from 'react'
import { useSelector } from 'react-redux'
import { Container, StatsView, StatsText, TabTextStandard } from '../../styles/TabContentStyles';
import { themes } from '../../theming/themingStyles';

const BaseStats = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const theme = useSelector(state => state.theme)
  const txtColor = themes[theme].pokeBox.contentTxtColor

  return (
    <Container>
      {Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.stats.map((cluster, index) =>
        <StatsView key={index}>
          <TabTextStandard
            color={txtColor}
          >{cluster.stat.name}</TabTextStandard>
          <TabTextStandard
            color={txtColor}
          >{cluster.base_stat}</TabTextStandard>
        </StatsView>
      )}
    </Container>
  )
}

export default BaseStats
