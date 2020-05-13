import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'
import { Container } from '../../styles/TabContentStyles';
import { capitalizeFirstCharFunc } from '../../logic/logic';
import { ImageContainer, QuestionMarkContainer, PokemonEvolutionChainContainer, PokeEvolutionContainerAdjusting, PokemonEvolutionMainContainer } from '../../styles/containerStyles';
import { GoToPokemonBtn } from '../../styles/btnStyles';
import { fetchSpecificPokemon } from '../../actions/actions';
import { FontAwesome, Entypo } from '@expo/vector-icons'
import useRenderImgsDynamically from '../hooks/useRenderImgsDynamically';
import { ImageStyled } from '../../styles/imageStyles';
import { globalStyles } from '../../styles/globalStyles';
import { themes } from '../../theming/themingStyles';

const Evolution = ({ scrollEnabled, setScrollEnabled }) => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)
  const txtColor = themes[theme].pokeBox.contentTxtColor


  const onPressHandlerGoToCertainPokemon = (pokemonName) => {
    const pokmeonId = fetchedAllPokemon.filter(cluster => cluster.pokemon_name === capitalizeFirstCharFunc(pokemonName))[0].pokemon_id
    dispatch(fetchSpecificPokemon(pokmeonId))
  }

  // if only pokemon chain has no more than one pokemon in a stage then render side by side else render top down.
  return (
    <PokemonEvolutionChainContainer>
      <PokeEvolutionContainerAdjusting>
        <PokemonEvolutionMainContainer>
          <>
            {(fetchedSpecificPokemon.evolutionChain !== undefined) &&
              <>
                <GoToPokemonBtn onPress={() => onPressHandlerGoToCertainPokemon(fetchedSpecificPokemon.evolutionChain.chain.species.name)}>
                  <EvolutionChainItem
                    name={fetchedSpecificPokemon.evolutionChain.chain.species.name} stage='0' />
                </GoToPokemonBtn>
              </>
            }
          </>
          <>
            {(fetchedSpecificPokemon.evolutionChain !== undefined) && fetchedSpecificPokemon.evolutionChain.chain.evolves_to.map((cluster, index) =>
              <>
                <>
                  <GoToPokemonBtn key={index} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                    <EvolutionChainItem
                      name={cluster.species.name} stage='1' />
                  </GoToPokemonBtn>
                </>
                {cluster.evolves_to.map((cluster, index2) =>
                  <GoToPokemonBtn key={index2} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                    <EvolutionChainItem
                      name={cluster.species.name} stage='2' />
                  </GoToPokemonBtn>
                )}
              </>
            )}
          </>
        </PokemonEvolutionMainContainer>
      </PokeEvolutionContainerAdjusting>
    </PokemonEvolutionChainContainer>
  )
}

const EvolutionChainItem = ({ name, stage }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const theme = useSelector(state => state.theme)
  const txtColor = themes[theme].pokeBox.contentTxtColor

  const getInfoOfPokemon = (pokemon) => {
    return fetchedAllPokemon.filter(item => item.pokemon_name === capitalizeFirstCharFunc(pokemon))[0]
  }

  const [renderPokemonImg, setRenderPokemonImg] = useState(null)
  const pokemon = getInfoOfPokemon(name)

  useEffect(() => {
    if (pokemon) useRenderImgsDynamically({ pokemon_id: pokemon.pokemon_id, setRenderPokemonImg })
  }, [pokemon])

  const getStage = (stage) => {
    if (stage === '0') return 'dot-single'
    if (stage === '1') return 'dots-two-vertical'
    if (stage === '2') return 'dots-three-vertical'
    else return 'dot-circle'
  }
  const dots = getStage(stage)

  return (
    <ImageContainer>
      {pokemon !== undefined ?
        <ImageStyled source={renderPokemonImg} />
        :
        <QuestionMarkContainer>
          <FontAwesome name='question' size={50} color='gray' />
        </QuestionMarkContainer>
      }
      <Entypo style={{ ...globalStyles.pokemonEvolutionIndicators }} name={dots} size={15} />
      <Text style={{
        ...globalStyles.pokemonEvolutionName,
        color: txtColor ? txtColor : 'white'
      }}>   {capitalizeFirstCharFunc(name)}</Text>
    </ImageContainer>
  )
}

export default Evolution
