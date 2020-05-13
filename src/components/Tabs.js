import React, { useEffect, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import styled from 'styled-components';

const SliderAnimation = Animated.createAnimatedComponent(View);
const screenWidth = Math.round(Dimensions.get('window').width);

const Tabs = ({ defualtTabSelected, tabTitles, contentComponents, btnStyle, textStyle, lineColor }) => {
   const [slideAnimaton] = useState(new Animated.Value(0))
   const [currentTab, setCurrentTab] = useState(0)
   const [sliderWidth, setSliderWidth] = useState(0)

   useEffect(() => {
      if (defualtTabSelected) setCurrentTab(2)
      else setCurrentTab(0)
      setSliderWidth(100 / contentComponents.length)
   }, [])

   useEffect(() => {
      if (contentComponents.length >= 1) {
         Animated.spring(slideAnimaton, {
            duration: 200,
            toValue: screenWidth / contentComponents.length * currentTab,
            useNativeDriver: true
         }).start();
      } else if (currentTab === 0) {
         Animated.spring(slideAnimaton, {
            duration: 200,
            toValue: 0,
            useNativeDriver: true
         }).start();
      }
   }, [currentTab])

   const onPressHandler = ({ index }) => {
      setCurrentTab(index)
   }

   return (
      <TabContainer>
         <SliderAnimation
            transition='translate'
            style={{
               height: 3, width: `${sliderWidth}%`, bottom: -39, backgroundColor: lineColor, zIndex: 10,
               transform: [{
                  translateX: slideAnimaton
               }],
            }} />
         <TabNavigatorContainer>
            {tabTitles.map((tabTitle, index) =>
               <TabBtn
                  key={index}
                  index={index}
                  onPress={() => onPressHandler({ index })}
                  style={btnStyle}
                  activeOpacity={1}
                  underlayColor='transparent'>
                  <TabText style={textStyle}>{tabTitle}</TabText>
               </TabBtn>
            )}
         </TabNavigatorContainer>
         <TabSection>
            <TabContent>
               {contentComponents.map((contentComponent, index) => {
                  return (
                     <View
                        key={index}
                        style={index === currentTab ? { display: 'flex' } : { display: 'none' }} >
                        {contentComponent}
                     </View>
                  )
               })}
            </TabContent>
         </TabSection>
      </TabContainer >
   );
}

export default Tabs

export const TabBtn = styled.TouchableOpacity`
   background-color: transparent;
   flex: 1;
   justify-content: center;
   align-items: center; 
   border-radius: 0;
   height: 40px;
   top: -15px;
   padding: 27px 0px;
   z-index: 5;
`;
export const TabContent = styled.View`
   min-height: 850px;
`;
export const TabContainer = styled.View`
`;
export const TabText = styled.Text`
   color: #fff;
   font-size: 12px;
   font-family: LemonadaRegular;
`;
export const TabNavigatorContainer = styled.View`
   flex-direction: row;
   height: 20px;
`;
export const TabSection = styled.View`
   margin-top: 12px;
`;
