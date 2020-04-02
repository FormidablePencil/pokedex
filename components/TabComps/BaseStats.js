import React from 'react'
import { useSelector } from 'react-redux'
import { Container, StatsView, StatsText } from '../../styles/TabContentStyles';

const BaseStats = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)

  return (
    <Container>
      {Object.keys(fetchedSpecificPokemon).length > 0 && fetchedSpecificPokemon.pokemonInfo.stats.map((cluster, index) =>
        <StatsView key={index}>
          <StatsText>{cluster.stat.name}</StatsText>
          <StatsText>{cluster.base_stat}</StatsText>
        </StatsView>
      )}
    </Container>
  )
}

export default BaseStats
