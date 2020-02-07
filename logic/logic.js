export const getSelectedPokemonType = (pokemonSelected, pokemonTypeList) => {
  console.log(typeof pokemonTypeList)
  if (Object.values(pokemonSelected.item)[0]) {
    const pokemonType = pokemonTypeList.filter(item =>
      item.pokemon_name === Object.values(pokemonSelected.item)[0] &&
      item.form !== 'Alola' &&
      item.form !== 'Fall_2019' &&
      item.form !== 'Purified' &&
      item.form !== 'Shadow'
    )
    return pokemonType
  } else {
    const pokemonType = pokemonTypeList.filter(item =>
      item.pokemon_name === pokemonSelected &&
      item.form !== 'Alola' &&
      item.form !== 'Fall_2019' &&
      item.form !== 'Purified' &&
      item.form !== 'Shadow'
      )
      return pokemonType
    // console.log(pokemonType) 
  }
}

export const sliceOffDigits = (pokemonNum) => {
  let slicedResult = []
  if (pokemonNum.charAt(0) === '0' && pokemonNum.charAt(1) === '0') {
    slicedResult = pokemonNum.slice(2, 3)
  } else if (pokemonNum.charAt(0) === '0' && pokemonNum.charAt(1) !== '0') {
    slicedResult = pokemonNum.slice(1, 3)
  } else if (pokemonNum.charAt(0) !== '0') {
    slicedResult = pokemonNum.slice(0, 3)
  }
  return slicedResult
}
