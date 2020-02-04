export const typeBoxColorSwitch = (type) => {
  let styledComponent = ''
  switch (type) {
    case 'Fire':
      styledComponent = 'fireTypeContainer'
      // console.log('fire!')
      break
    case 'Water':
      styledComponent = 'waterTypeContainer'
      // console.log('blue!')
      break
    default:
      styledComponent = 'white'
  }
  return styledComponent
}