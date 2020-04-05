import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'
import { Container } from '../../styles/TabContentStyles';
import { capitalizeFirstCharFunc } from '../../logic/logic';
import CachedImage from '../../screens/CachedImage';
import { EvolutionContainer, ImageContainer } from '../../styles/containerStyles';
import { GoToPokemonBtn } from '../../styles/btnStyles';
import { fetchSpecificPokemon } from '../../actions/actions';

const Evolution = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const dispatch = useDispatch()


  const onPressHandlerGoToCertainPokemon = (pokemon) => {
    dispatch(fetchSpecificPokemon(pokemon))
  }
  return (
    <Container>
      {fetchedSpecificPokemon.evolutionChain !== undefined &&
        <>
          <EvolutionContainer>
            <GoToPokemonBtn onPress={() => onPressHandlerGoToCertainPokemon(fetchedSpecificPokemon.evolutionChain.chain.species.name)}>
              <EvolutionChainItem name={fetchedSpecificPokemon.evolutionChain.chain.species.name} stage='basic' />
            </GoToPokemonBtn>
            <>
              {fetchedSpecificPokemon.evolutionChain.chain && fetchedSpecificPokemon.evolutionChain.chain.evolves_to.map((cluster, index) =>
                <View key={index}>
                  <GoToPokemonBtn onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                    <EvolutionChainItem name={cluster.species.name} stage='stage1' />
                  </GoToPokemonBtn>
                  <>
                    {cluster.evolves_to.map((cluster, index2) =>
                      <GoToPokemonBtn key={index2} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                        <EvolutionChainItem name={cluster.species.name} stage='stage2' />
                      </GoToPokemonBtn>
                    )}
                  </>
                </View>
              )}
            </>
          </EvolutionContainer>
          <View>
            {[fetchedSpecificPokemon.evolutionChain.chain].map((item, index) =>
              <View key={index}>
                <Text>{item.species.name}</Text>
              </View>
            )}
          </View>
        </>
      }
    </Container>
  )
}

const EvolutionChainItem = ({ name, stage }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const getInfoOfPokemon = (pokemon) => {
    return fetchedAllPokemon.filter(item => item.pokemon_name === capitalizeFirstCharFunc(pokemon))[0]
  }
  const pokemon = getInfoOfPokemon(name)
  console.log(pokemon.pokemon_id, 'pokemon.pokemon_id')
  return (
    <ImageContainer>
      <Text style={{ fontSize: 12, color: 'black' }}>{stage}</Text>
      <CachedImage source={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokemon_id}.png`} />
      <Text style={{ fontSize: 12, color: 'black' }}>{capitalizeFirstCharFunc(name)}</Text>
    </ImageContainer>
  )
}

export default Evolution
