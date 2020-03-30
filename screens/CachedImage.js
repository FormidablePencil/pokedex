import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import shorthash from 'shorthash'
import * as FileSystem from 'expo-file-system';
import { IndexPokemonImage } from '../styles/miscStyles';

const CachedImage = ({ source }, props) => {
   const [imageCached, setImageCached] = useState({ source: null })

   //~ other problem was optimizing preformace cause of the memoray leak with FlatList...
   useEffect(() => { //~ how to cancel async/await
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
      }
   }, [])


   return (
      <View>
         <IndexPokemonImage
            source={imageCached.source}>
            {props.children}
         </IndexPokemonImage>
      </View>
   )
}

export default CachedImage
