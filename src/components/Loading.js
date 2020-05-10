import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';
import styled from 'styled-components';
import { LoadingContainer } from '../styles/containerStyles';

export const Loading = () => {
   const progress = new Animated.Value(0)

   useEffect(() => {
      Animated.timing(progress, {
         toValue: 1,
         duration: 1000,
         easing: Easing.linear,
      }).start();
   })

   return (
      <LoadingContainer colors={['#390148', '#27229F']} start={[1.5, .8]}>
         <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
   );
}
export default Loading

export const LoadingText = styled.Text`
   font-style: italic;
   font-size: 25px;
   color: white;
   font-weight: bold;
`;