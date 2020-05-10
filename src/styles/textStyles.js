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
  color: ${props => props.color};
  font-size: 30px;
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