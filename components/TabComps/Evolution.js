import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'
import { Container } from '../../styles/TabContentStyles';
import { capitalizeFirstChar } from '../../logic/logic';
import CachedImage from '../../screens/CachedImage';
import { EvolutionContainer, ImageContainer } from '../../styles/containerStyles';
import { GoToPokemonBtn } from '../../styles/btnStyles';
import { fetchSpecificPokemon } from '../../actions/actions';

const Evolution = () => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()

  const getInfoOfPokemon = (pokemon) => {
    return fetchedAllPokemon.filter(item => item.pokemon_name === capitalizeFirstChar(pokemon))[0]
  }
  const onPressHandlerGoToCertainPokemon = (pokemon) => {
    dispatch(fetchSpecificPokemon(pokemon))
  }
  const EvolutionChainItem = ({ name, stage }) => {
    const pokemon = getInfoOfPokemon(name)
    return (
      <ImageContainer>
        <Text style={{ fontSize: 12, color: 'black' }}>{stage}</Text>
        {typeof pokemon === Object > 0 &&
          <CachedImage source={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokemon_id}.png`} />
        }
        <Text style={{ fontSize: 12, color: 'black' }}>{capitalizeFirstChar(name)}</Text>
      </ImageContainer>
    )
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
                <>
                  <GoToPokemonBtn key={index} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                    <EvolutionChainItem name={cluster.species.name} stage='stage1' />
                  </GoToPokemonBtn>
                  <>
                    {cluster.evolves_to.map((cluster, index2) =>
                      <GoToPokemonBtn  key={index2} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                        <EvolutionChainItem name={cluster.species.name} stage='stage2' />
                      </GoToPokemonBtn>
                    )}
                  </>
                </>
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


export default Evolution
