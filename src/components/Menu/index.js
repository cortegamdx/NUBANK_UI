import React from 'react';
import {
  Container,
  Code,
  Nav,
  NavItem,
  NavText,
  SignOutButton,
  SignOutButtonText,
} from './style.js';
import QRECode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu(props) {
  const text = 'https://www.google.com/';
  const {translateY} = props;

  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 350],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRECode
          value={text}
          size={60}
          color="#8B10AE"
          backgroundColor="white"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" color="#fff" />
          <NavText>Me Ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" color="#fff" />
          <NavText>Perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="credit-card" color="#fff" />
          <NavText>Configurar cartão</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" color="#fff" />
          <NavText>Configurações do App</NavText>
        </NavItem>
      </Nav>
      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DO APP</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
