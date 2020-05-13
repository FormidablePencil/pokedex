import styled from 'styled-components';

export const ImageBackgroundPokeStats = styled.ImageBackground`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const CachedImageStyle = styled.Image`
   height: 200px;
   width: 200px; 
   bottom: 22%;
   position: absolute;
`
export const ImageBackground = styled.ImageBackground`
   position: absolute; 
   top: 0;
   left: 0;
   right: 0;
   height: 100px;
   align-self: center;
   width: 100%;
   align-items: center;
   justify-content: center;
`
export const PokemonSlotImageBg = styled.Image`
  z-index: 10;
  height: 130px;
  width: 130px;
  resize-mode: contain;
  opacity: .60;
`;
export const PokemonImage = styled.Image`
  z-index: 20;
  height: 100px;
  width: 100px;
  resize-mode: contain;
  position: absolute;
`;
export const ImageStyled = styled.Image`
 height: 100%;
 width: 100%;
 resize-mode: contain;
`
export const Image123 = styled.Image`
  width: 100%;
  height: 80%;
  margin-top: 5px;
  resize-mode: contain;
`;
export const ChartImage = styled.Image`
  resize-mode: contain;
  height: 100%;
  width: 100%;
`;
export const PokeTypeImage = styled.Image`
  height: 53px;
  width: 40px;
  bottom: 0px;
`;
export const TabNavImage = styled.Image`
  resize-mode: contain;
  flex: 1;
  margin-top: 5px;
  opacity: ${({ active }) => active ? 1 : .3};
`;