import { AsyncStorage } from "react-native"

export const cacheDataToAsyncStorageObj = {
  storeToLocalStorage: async (storeTo, whatData) => {
    try {
      const stringifiedData = JSON.stringify(whatData)
      await AsyncStorage.setItem(storeTo.toString(), stringifiedData)
    } catch (err) {
      console.warn(err)
    }
  },
  getLocallyStoredData: async (getFrom) => {
    const localStorageString = await AsyncStorage.getItem(getFrom)
    return JSON.parse(localStorageString)
  },
  validateAndUpdateData: async (data, dirName) => {
    const localStorageResponse = await cacheDataToAsyncStorageObj.getLocallyStoredData(dirName)
    if (localStorageResponse === null || data !== localStorageResponse) {
      cacheDataToAsyncStorageObj.storeToLocalStorage(dirName, data)
      return 'cached data'
    } else {
      return `${dirName} updated`
    }
  },
}

export default cacheDataToAsyncStorageObj
