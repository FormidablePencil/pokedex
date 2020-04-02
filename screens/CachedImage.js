import React, { useState, useEffect } from 'react'
import { View, Text, LayoutAnimation } from 'react-native'
import shorthash from 'shorthash'
import * as FileSystem from 'expo-file-system';
import styled from 'styled-components';

//@own styles and default style option. 
export const CachedImageStyle = styled.Image`
 height: 100px;
 width: 100px; 
`

const CachedImage = ({ source, imageStyles }) => {
   const [imageCached, setImageCached] = useState({ source: null })
   
   useEffect(() => {
      let isCancelled = false
      if (isCancelled === false) {
         (async () => {
            const uri = source
            const name = shorthash.unique(uri) //you'd secure the images
            const path = `${FileSystem.cacheDirectory}${name}` //this is where the directory where the cached files where to exist
            const image = await FileSystem.getInfoAsync(path)
            if (image.exists) {
               setImageCached({ source: { uri: image.uri } })
               return
            }
            const newImage = await FileSystem.downloadAsync(uri, path)
            setImageCached({ source: { uri: newImage.url } })
         })()
      }
      return () => {
         isCancelled = true
         // setImageCached({ source: null })
      }
   }, [source])

   return (
      <>
         <CachedImageStyle
            style={imageStyles}
            source={imageCached.source} />
      </>
   )
}

export default CachedImage
