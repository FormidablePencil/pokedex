import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'
import AddDeleteInReduxCompWithBtn from './AddDeleteInReduxCompWithBtn'
import { PokeFavoriteBtn, TouchableOpacityOverImage } from '../styles/btnStyles';
import { SAVE_FAVORITE, REMOVE_FAVORITE, ADD_TO_TEAM, REMOVE_FROM_TEAM } from '../actions/types'
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { fetchSpecificPokemon } from '../actions/actions';
import useRenderImgsDynamically from './hooks/useRenderImgsDynamically';
import { Image123 } from '../styles/imageStyles';
import { FavCard, IconsContainer, FavCardCompContainerAnimated } from '../styles/containerStyles';
import pokemonRetroImgs from '../allGenPokeName/retroImgs';

const FavCardComp = ({ id, cardStyle, imageStyle }) => {
  const [renderPokemonImg, setRenderPokemonImg] = useState()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   useRenderImgsDynamically({ pokemon_id: id, setRenderPokemonImg })
  // }, [id])


  const onPressHandler = async () => {
    await dispatch(fetchSpecificPokemon(id))
    navigation.navigate('PokeStatsScreen')
  }

  return (
    <FavCardCompContainerAnimated>
      <FavCard style={cardStyle}>
        <TouchableOpacityOverImage onPress={() => onPressHandler()}>
          {/* <Image123 style={imageStyle} source={renderPokemonImg} /> */}
          <Image123 source={pokemonRetroImgs[id - 1].src} />
        </TouchableOpacityOverImage>
        <IconsContainer>
          <PokeFavoriteBtn style={{ bottom: 20 }}>
            <AddDeleteInReduxCompWithBtn
              payload={id}
              whatState={'favoritePokemon'}
              addType={SAVE_FAVORITE}
              deleteType={REMOVE_FAVORITE}
              child1={<FontAwesome name='star-o' size={30} />}
              child2={<FontAwesome name='star' size={30} color={'#ECDB1C'} />}
              btnStyle
            />
          </PokeFavoriteBtn>
          <PokeFavoriteBtn style={{ bottom: 20, right: 0 }}>
            <AddDeleteInReduxCompWithBtn
              payload={id}
              whatState={'pokemonTeam'}
              addType={ADD_TO_TEAM}
              deleteType={REMOVE_FROM_TEAM}
              child1={<MaterialCommunityIcons name='pokeball' size={30} />}
              child2={<MaterialCommunityIcons name='pokeball' size={30} color={'#FD7E7E'} />}
              btnStyle
            />
          </PokeFavoriteBtn>
        </IconsContainer>
      </FavCard>
    </FavCardCompContainerAnimated>
  )
}

export default FavCardComp