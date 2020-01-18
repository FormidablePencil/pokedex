import React from 'react'
import { View, Text, Input, Button, Container, Header, Left, Right, Body, Title } from 'native-base';
import { globalStyles } from '../styles/globalStyles';


const HeaderComp = () => {
  return (
    <Header transparent >
      <Left />
      <Body>
        <Title>Pokedex</Title>
      </Body>
      <Right />
    </Header>
  )
}

export default HeaderComp
