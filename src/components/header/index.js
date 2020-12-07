import React from 'react';

import {Container, Top, Logo, Title} from './style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoImg from '~/assets/Nubank_Logo.png';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={LogoImg} />
        <Title>Caique</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#fff" />
    </Container>
  );
}
