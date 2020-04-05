import React from 'react'
import styled from 'styled-components';

const Loading = () => {
   return (
      <LoadingContainer>
         <Text>Loading ...</Text>
      </LoadingContainer>
   )
}

const LoadingContainer = styled.View`
   background-color: #fff;
   height: 100%;
   justify-content: center;
   align-items: center;
`;

const Text = styled.Text`
 font-size: 21px;
  /* color: white; */
`

export default Loading
