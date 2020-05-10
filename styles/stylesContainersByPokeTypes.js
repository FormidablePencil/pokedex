import styled from 'styled-components'

export const FireTypeContainer = styled.View`
  background: red;
`
export const WaterTypeContainer = styled.View`
  background: blue;
`
export const TextPokemonTypes = styled.Text`
  color: white;
`

//make case for pokemonIndexIndividual container
export const PokemonTypes = styled.View`
  border-radius: 20px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  width: 70px;
  align-items: center;
  background-color: ${props => {
    // console.log(props.theme)
    switch (props.theme) {
      case 'Bug':
        return 'black'
        break
      case 'Dark':
        return 'black'
        break
      case 'Dragon':
        return 'black'
        break
      case 'Electric':
        return 'black'
        break
      case 'Fairy':
        return 'black'
        break
      case 'Fighting':
        return 'black'
        break
      case 'Fire':
        return 'red'
        break
      case 'Flying':
        return 'grey'
        break
      case 'Ghost':
        return 'black'
        break
      case 'Grass':
        return 'green'
        break
      case 'Ground':
        return 'black'
        break
      case 'Ice':
        return 'black'
        break
      case 'Normal':
        return 'black'
        break
      case 'Poison':
        return 'black'
        break
      case 'Psychic':
        return 'black'
        break
      case 'Rock':
        return 'black'
        break
      case 'Steel':
        return 'black'
        break
      case 'Water':
        return 'black'
        break
      default:
        return 'black'
    }
  }}
  `
