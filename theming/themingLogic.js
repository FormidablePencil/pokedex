import {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
  default_
} from './themingStyles'


export const determineThemeByType = (pokeType) => {
  let array = []
  console.log(pokeType)
  switch (pokeType) {
    case 'Bug':
      array.push(bug)
      break
    case 'Dark':
      array.push(dark)
      break
    case 'Dragon':
      array.push(dragon)
      break
    case 'Electric':
      console.log('???')
      array.push(electric)
      break
    case 'Fairy':
      array.push(fairy)
      break
    case 'Fighting':
      array.push(fighting)
      break
    case 'Fire':
      array.push(fire)
      break
    case 'Flying':
      array.push(flying)
      break
    case 'Ghost':
      array.push(ghost)
      break
    case 'Grass':
      array.push(grass)
      break
    case 'Ground':
      array.push(ground)
      break
    case 'Ice':
      array.push(ice)
      break
    case 'Normal':
      array.push(normal)
      break
    case 'Poison':
      array.push(poison)
      break
    case 'Psychic':
      array.push(psychic)
      break
    case 'Rock':
      array.push(rock)
      break
    case 'Steel':
      array.push(steel)
      break
    case 'Water':
      array.push(water)
      break
    default:
      array.push(default_)
  }
  return array[0]
}
