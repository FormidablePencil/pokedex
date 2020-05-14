import styled from 'styled-components';

export const TextNum = styled.Text`
  font-size: 25px;
  position: absolute;
  right: 45px;
`
export const StandardText = styled.Text`
  font-size: 15px;
`
export const TextName = styled.Text`
  color: #606f76;
  position: absolute;
  font-weight: bold;
`

export const PokemonIdText = styled.Text`
  font-family: LemonadaMedium;
  color: ${({color}) => color ? color : 'white'};
  font-size: 35px;
  margin-top:100px;
  top: 2px;
  margin-bottom: -5px;
`;
export const PokeTypeText = styled.Text`
  margin-right: 5px;
  color: white;
  margin-right: 10px;
  font-size: 13px;
  text-align: right;
`;
export const TextWhite = styled.Text`
  color: white;
`;
export const HeaderText = styled.Text`
   font-size: 30px;
   margin: 0px 10px;
   color: ${({ color }) => color ?? '#353535'};
   font-family: LemonadaMedium;
   font-size: 25px;
`;
export const EmptyListMsgText = styled(HeaderText)`
  color: white;
  text-align: center;
`;
export const PokeTypesText = styled.Text`
   font-family: LemonadaRegular;
   color: ${({ typeTxtColor }) => typeTxtColor ? typeTxtColor : 'white'}; 
   ${({ pokeStats }) => {
    if (pokeStats) {
      return [
        `padding: 0px 15px;`,
        `margin: 0px 5px;`,
        `border-radius: 20px;`
      ]
    }
  }};
   background-color: ${({ bgColor }) => bgColor ? bgColor : 'grey'};
   font-size: 10px;
   flex-wrap: nowrap;
`;
export const TextInputStyled = styled.TextInput`
  background-color: #E5FFB0;
  color: black;
  margin: 10px 0px;
  height: 50px;
  padding: 0px 10px;
`;
export const ModalCloseText = styled.Text`
  font-family: LemonadaMedium;
  color: white;
`;
export const ModalContentText = styled.Text`
  font-family: LemonadaMedium;
  margin: 20px;
  text-align: center;
`;