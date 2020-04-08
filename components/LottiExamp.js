import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import LottieView from 'lottie-react-native';

export const LottiExample = () => {
   const progress = new Animated.Value(0)

   useEffect(() => {
      Animated.timing(progress, {
         toValue: 1,
         duration: 1000,
         easing: Easing.linear,
      }).start();
   })

   return (
      <LottieView
         style={{ backgroundColor: 'red' }}
         // source={require('../path/to/animation.json')}
         source={require('../assets/lotti/17803-loading.json')}
         progress={progress} />
   );
}
export default LottiExample