import React from 'react'
import styled from 'styled-components';
import useCachedImage from '../components/hooks/useCachedImage';

//@own styles and default style option. 
export const CachedImageStyle = styled.Image`
 flex: 1;
 resize-mode: contain;
 /* background-color:red; */
`
const CachedImage = ({ source, imageStyles }) => {
   const cachedImage = useCachedImage(source)
   // console.log(cachedImage)
   return (
      <>
         <CachedImageStyle
            style={imageStyles}
            source={cachedImage.source} />
      </>
   )
}

export default CachedImage