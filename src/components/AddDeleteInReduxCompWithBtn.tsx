import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import PokeTeamLimitMsg from './PokeTeamLimitMsg'
import { TOGGLE_POKE_MSG_TEAM_LIST, ADD_TO_TEAM } from '../actions/types'

//* How this component works. You set a value that toggles two options => matches then filters out matching else if not then puts it to state. It returns a touchableOpacity which renders conditionally two differnt custom elements of your choosing. The two conditions are => when value in redux exists and when it doesn't.
//* Customization: Put anything within TouchableOpacity, style TouchableOpacity, use any state from redux state, compare with any item in redux state and name the dispatch types.
//* In a few words, it's a btn that that saves and deletes data from redux and responds accordingly. 
//~ Highly reusable comp
interface ReduxAddDelete { payload, whatState, compareFromCluster?, addType, deleteType, child1, child2, btnStyle }
const AddDeleteInReduxCompWithBtn = ({ payload, whatState, compareFromCluster, addType, deleteType, child1, child2, btnStyle }: ReduxAddDelete) => {

  const pokeMessageOpen = useSelector(state => state.pokeMessageOpen)
  const pokemonTeam = useSelector(state => state.pokemonTeam)


  const itemExists = useSelector(state => state[whatState] ? state[whatState].filter(cluster => {
    if (compareFromCluster) return cluster[compareFromCluster] === payload
    else return cluster === payload
  })[0] : null)
  const dispatch = useDispatch()
  
  useEffect(() => {
  }, [itemExists])

  const onPressStar = () => {
    if (!itemExists) dispatch({ type: addType, payload })
    else dispatch({ type: deleteType, payload })
    
    if (!itemExists && pokemonTeam.length === 6) {
      dispatch({ type: TOGGLE_POKE_MSG_TEAM_LIST })
    }
  }

  return (
    <>
      <TouchableOpacity onPress={onPressStar} style={btnStyle}>
        {!itemExists ?
          <>
            {child1}
          </>
          :
          <>
            {child2}
          </>
        }
      </TouchableOpacity>
    </>
  )
}

export default AddDeleteInReduxCompWithBtn
