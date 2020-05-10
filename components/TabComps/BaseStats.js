import React from 'react'
import { useSelector } from 'react-redux'
import { Container, StatsView, StatsText, TabTextStandard } from '../../styles/TabContentStyles';

const BaseStats = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)

  return (
    <Container>
      {Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.stats.map((cluster, index) =>
        <StatsView key={index}>
          <TabTextStandard>{cluster.stat.name}</TabTextStandard>
          <TabTextStandard>{cluster.base_stat}</TabTextStandard>
        </StatsView>
      )}
    </Container>
  )
}

export default BaseStats
