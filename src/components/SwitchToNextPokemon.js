import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { SwitchToNextPokemonContainer } from '../styles/containerStyles'
import { SwitchToNextPokemonBtn, SwitchToNextPokemonBtnR } from '../styles/btnStyles'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSpecificPokemon } from '../actions/actions'

const SwitchToNextPokemon = () => {
  const pokemon_id = useSelector(state => state.fetchedSpecificPokemon.pokemonInfo.id)
  const dispatch = useDispatch()
  const nextPokemon = pokemon_id + 1
  const prevPokemon = pokemon_id - 1
  const switchToNextPokemonFunc = (movement) => {
    if (movement === 'next') dispatch(fetchSpecificPokemon(nextPokemon))
    else dispatch(fetchSpecificPokemon(prevPokemon))
  }

  return (
    <SwitchToNextPokemonContainer>
      <SwitchToNextPokemonBtn onPress={() => switchToNextPokemonFunc('back')}>
        <Entypo name='triangle-left' size={50} color='white' />
      </SwitchToNextPokemonBtn>
      <SwitchToNextPokemonBtnR onPress={() => switchToNextPokemonFunc('next')}>
        <Entypo name='triangle-right' size={50} color='white' />
      </SwitchToNextPokemonBtnR>
    </SwitchToNextPokemonContainer>
  )
}

export default SwitchToNextPokemon
