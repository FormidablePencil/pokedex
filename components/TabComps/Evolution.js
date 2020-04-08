import React, { useRef, useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Animated } from 'react-native'
import { Container } from '../../styles/TabContentStyles';
import { capitalizeFirstCharFunc } from '../../logic/logic';
import CachedImage from '../../screens/CachedImage';
import { EvolutionContainer, ImageContainer } from '../../styles/containerStyles';
import { GoToPokemonBtn } from '../../styles/btnStyles';
import { fetchSpecificPokemon } from '../../actions/actions';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome, Entypo } from '@expo/vector-icons'

const Evolution = ({ scrollEnabled, setScrollEnabled }) => {
  const fetchedSpecificPokemon = useSelector(state => state.fetchedSpecificPokemon)
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const dispatch = useDispatch()
  const [highestStage, setHighestStage] = useState(1)
  // const VIEW_HEIGHT = useRef(new Animated.Value(500))

  const onPressHandlerGoToCertainPokemon = (pokemonName) => {
    const pokmeonId = fetchedAllPokemon.filter(cluster => cluster.pokemon_name === capitalizeFirstCharFunc(pokemonName))[0].pokemon_id
    dispatch(fetchSpecificPokemon(pokmeonId))
  }

  useEffect(() => {
    styleDynamically(fetchedSpecificPokemon.evolutionChain.chain.evolves_to)
    for (let i = 0; i < fetchedSpecificPokemon.evolutionChain.chain.evolves_to.length; i++) {
      styleDynamically(fetchedSpecificPokemon.evolutionChain.chain.evolves_to[i].evolves_to)
    }
  }, [fetchedSpecificPokemon])
  useEffect(() => {
    // console.log(VIEW_HEIGHT)
  })
  const styleDynamically = (chain) => {
    console.log(chain.length)
    if (chain.length === 2 && highestStage >= 1) {
      console.log('2')
      VIEW_HEIGHT.current = 700
    } else if (chain.length === 3 && highestStage >= 2) {
      console.log('3')
      VIEW_HEIGHT.current = 900
    } else if (chain.length === 4 && highestStage >= 3) {
      console.log('4')
      VIEW_HEIGHT.current = 1100
    }
  }

  // if only pokemon chain has no more than one pokemon in a stage then render side by side else render top down.
  return (
    <View
      style={{ backgroundColor: 'pink', height: 1200, alignItems: 'flex-start' }}>
      <View style={{ width: '100%', height: 500, alignItems: 'flex-end', }}>
        <Container style={{ flexDirection: 'row', width: '100%', flexWrap: 'wrap', justifyContent: 'space-evenly' }} >
          <>
            {(fetchedSpecificPokemon.evolutionChain !== undefined) &&
              <>
                <GoToPokemonBtn style={{}} onPress={() => onPressHandlerGoToCertainPokemon(fetchedSpecificPokemon.evolutionChain.chain.species.name)}>
                  <EvolutionChainItem name={fetchedSpecificPokemon.evolutionChain.chain.species.name} stage='0' />
                </GoToPokemonBtn>
              </>
            }
          </>
          <>
            {fetchedSpecificPokemon.evolutionChain.chain.evolves_to.map(cluster =>
              <> 
                <>
                  <GoToPokemonBtn style={{}} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                    <EvolutionChainItem name={cluster.species.name} stage='1' />
                  </GoToPokemonBtn>
                </>
                {cluster.evolves_to.map(cluster =>
                  <>
                    <GoToPokemonBtn style={{}} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                      <EvolutionChainItem name={cluster.species.name} stage='2' />
                    </GoToPokemonBtn>
                    {/* <GoToPokemonBtn style={{}} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                      <EvolutionChainItem name={cluster.species.name} stage='basic' />
                    </GoToPokemonBtn>
                    <GoToPokemonBtn style={{}} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                      <EvolutionChainItem name={cluster.species.name} stage='basic' />
                    </GoToPokemonBtn> */}
                  </>
                )}
              </>
            )}
          </>
        </Container>
      </View>
    </View>
  )
}

{/* <>
  <EvolutionContainer style={{ width: '100%', backgroundColor: 'yellow' }}>
    <GoToPokemonBtn style={{ }} onPress={() => onPressHandlerGoToCertainPokemon(fetchedSpecificPokemon.evolutionChain.chain.species.name)}>
      <EvolutionChainItem name={fetchedSpecificPokemon.evolutionChain.chain.species.name} stage='basic' />
    </GoToPokemonBtn>
    <>
      {fetchedSpecificPokemon.evolutionChain.chain && fetchedSpecificPokemon.evolutionChain.chain.evolves_to.map((cluster, index) =>
        <View style={{ position: 'absolute', right: 10, width: '100%' }} key={index}>
          <GoToPokemonBtn style={{ justifyContent: 'center', alignItems: 'center', width: '100%', right: 10 }} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
            <EvolutionChainItem name={cluster.species.name} stage='stage1' />
          </GoToPokemonBtn>
          <>
            {cluster.evolves_to.map((cluster, index2) =>
              <GoToPokemonBtn style={{ position: 'absolute', right: 0, backgroundColor: 'brown' }} key={index2} onPress={() => onPressHandlerGoToCertainPokemon(cluster.species.name)}>
                <EvolutionChainItem name={cluster.species.name} stage='stage2' />
              </GoToPokemonBtn>
            )}
          </>
        </View>
      )}
    </>
  </EvolutionContainer>
</>
}  */}

const EvolutionChainItem = ({ name, stage }) => {
  const fetchedAllPokemon = useSelector(state => state.fetchedAllPokemon)
  const getInfoOfPokemon = (pokemon) => {
    return fetchedAllPokemon.filter(item => item.pokemon_name === capitalizeFirstCharFunc(pokemon))[0]
  }
  const getStage = (stage) => {
    if (stage === '0') return 'dot-single'
    if (stage === '1') return 'dots-two-vertical'
    if (stage === '2') return 'dots-three-vertical'
    else return 'dot-circle'
  }
  const dots = getStage(stage)

  console.log(stage)
  const pokemon = getInfoOfPokemon(name)
  return (
    <ImageContainer>
      {pokemon !== undefined ?
        < CachedImage source={`https://pokeres.bastionbot.org/images/pokemon/${pokemon !== undefined && pokemon.pokemon_id}.png`} />
        :
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
          <FontAwesome name='question' size={50} color='gray' />
        </View>
      }
      <Entypo style={{position: 'absolute', bottom: 0, }} name={dots} size={15} />
      <Text style={{ fontSize: 12, color: 'black', alignSelf: 'center' }}>{capitalizeFirstCharFunc(name)}</Text>
    </ImageContainer>
  )
}

export default Evolution
