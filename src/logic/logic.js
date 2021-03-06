
export const getSelectedPokemonType = (selectedPokemon, pokemonTypeList) => {
  const pokemonType = pokemonTypeList.filter(item =>
    item.pokemon_name === selectedPokemon &&
    item.form !== 'Alola' &&
    item.form !== 'Fall_2019' &&
    item.form !== 'Purified' &&
    item.form !== 'Shadow'
  )
  return pokemonType
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

export const getEvolutionsTypes = (evolutions, pokemonTypeList) => {
  const toUppercase = (evol) => {
    return evol[0].toUpperCase() + evol.substring(1)
  }
  let basic
  let stage1
  let stage2
  if (evolutions.basic) {
    const uppercasedBasic = toUppercase(evolutions.basic)
    basic = getSelectedPokemonType(uppercasedBasic, pokemonTypeList)
  }
  if (evolutions.stage1) {
    const uppercasedStage1 = toUppercase(evolutions.stage1)
    stage1 = getSelectedPokemonType(uppercasedStage1, pokemonTypeList)
  }
  if (evolutions.stage2) {
    const uppercasedStage2 = toUppercase(evolutions.stage2)
    stage2 = getSelectedPokemonType(uppercasedStage2, pokemonTypeList)
  }
  const result = {}
  result.basic = basic
  result.stage1 = stage1
  result.stage1 = stage1
  result.stage2 = stage2
  return result
}

export const capitalizeFirstCharFunc = (string) => {
  return string.charAt(0).toUpperCase() + string.substring(1)
}

export const searchSuggestionsFunc = ({ text, arrayToFilterThrough, ObjKeyToCompare }) => {
  return arrayToFilterThrough.filter(function (item) {
    const itemData = item[ObjKeyToCompare] ? item[ObjKeyToCompare].toUpperCase() : ''.toUpperCase();
    const textData = text.toUpperCase();
    return itemData.indexOf(textData) > -1;
  });
}
export const searchPokemonById = (typedText, findInArr) => {
  const typedNum = parseInt(typedText)
  const filtered = findInArr.filter(item => item.pokemon_id === typedNum)
  return filtered
}


export const testArrEmtyFunc = (arr) => {
  return arr.length > 0
}


export const testObjEmptyFunc = (obj) => {
  return Object.keys(obj).length > 0
}

//rounds down by default
export const findNearestNumDivisibleByNum = (index, divisible, setting) => {
  if (index % divisible !== 0) {
    for (let i = index; Math.sign(index) === 1 ? i : -i > 0; setting === 'roundUp' ? i++ : i--) {
      if (i % divisible === 0) {
        return i
      }
    }
  } else {
    return index
  }
}
