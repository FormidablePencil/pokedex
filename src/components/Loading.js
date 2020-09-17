import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import { LoadingContainer, LoadingText } from '../styles/containerStyles';

export const Loading = () => {
   const progress = new Animated.Value(0)

   useEffect(() => {
      Animated.timing(progress, {
         toValue: 1,
         duration: 1000,
         easing: Easing.linear,
         useNativeDriver: true
      }).start();
   })

   return (
      <LoadingContainer colors={['#2AC73F', '#EFF54C']} start={[1.8, .8]}>
         <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
   );
}
export default Loading