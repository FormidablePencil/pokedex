import React, { useState, useEffect } from 'react'
import shorthash from 'shorthash'
import * as FileSystem from 'expo-file-system';

const useCachedImage = (source) => {
  // console.log(source)
  const [imageCached, setImageCached] = useState({ source: null })  //~ create your own hook 

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
  
  return imageCached
}

export default useCachedImage
