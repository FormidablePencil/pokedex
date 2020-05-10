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
  /* position: absolute; */
  opacity: .35;
`;
export const PokemonImage = styled.Image`
  z-index: 20;
  height: 100px;
  width: 100px;
  resize-mode: contain;
  position: absolute;
`;