import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { PokemonIdText } from '../styles/textStyles'
import { useSelector } from 'react-redux'
import { testObjEmptyFunc } from '../logic/logic'
import AddDeleteItemFromReduxBtn from './AddDeleteInReduxCompWithBtn'
import { ADD_TO_TEAM, REMOVE_FROM_TEAM, REMOVE_FAVORITE, SAVE_FAVORITE } from '../actions/types'
import { PokeFavoriteBtn } from '../styles/btnStyles'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { PokeBtnsContainer } from '../styles/containerStyles'
import { globalStyles } from '../styles/globalStyles'
import { themes } from '../theming/themingStyles'


const HeaderRightPokeStats = ({ isReady, navigation, pokemonId }) => {
  const pokeId = useSelector(state =>
    testObjEmptyFunc(state.fetchedSpecificPokemon) > 0 ?
      state.fetchedSpecificPokemon.pokemonInfo.id : {}
  )
  const theme = useSelector(state => state.theme)
  const txtColor = theme ? themes[theme].pokeBox.color : null

  if (isReady) {
    return (
      <PokeBtnsContainer>
        <PokemonIdText
          color={txtColor}
        >{typeof pokeId === 'number' ? pokeId : ''}</PokemonIdText>
        <TouchableWithoutFeedback style={{ marginBottom: 25 }} onPress={() => navigation.navigate('PokemonEffectivenessChart')}>
          <MaterialCommunityIcons style={globalStyles.goToPokemonEffectivenessIcon} name='poker-chip' size={30} color={txtColor ? txtColor : 'white'} />
        </TouchableWithoutFeedback>
        <PokeFavoriteBtn style={{ marginBottom: 25 }}>
          <AddDeleteItemFromReduxBtn
            payload={pokemonId}
            whatState={'favoritePokemon'}
            addType={SAVE_FAVORITE}
            deleteType={REMOVE_FAVORITE}
            child1={<FontAwesome name='star-o' size={25} color={txtColor ? txtColor : 'white'} />}
            child2={<FontAwesome name='star' size={25} color={'#ECDB1C'} />}
            btnStyle
          />
        </PokeFavoriteBtn>
        <PokeFavoriteBtn>
          <AddDeleteItemFromReduxBtn
            payload={pokemonId}
            whatState={'pokemonTeam'}
            addType={ADD_TO_TEAM}
            deleteType={REMOVE_FROM_TEAM}
            child1={<MaterialCommunityIcons name='pokeball' size={25} color={txtColor ? txtColor : 'white'} />}
            child2={<MaterialCommunityIcons name='pokeball' size={25} color={'#FD7E7E'} />}
            btnStyle
          />
        </PokeFavoriteBtn>
      </PokeBtnsContainer>
    )
  } else return null
}

export default HeaderRightPokeStats
