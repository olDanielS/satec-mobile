import React, { useState, useContext } from 'react';

import {
  Container, Input, LogoArea, Logo,
  InputArea, Submit, SubmitText, SwitchOptionArea,
  SwitchOptionText, SwitchOptionLabel
} from './styles'
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { gray, bg_primary } from '../../defaultColors';

import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/StackRoutes';

import { AuthContext } from '../../contexts/Auth';

export default function SignIn() {

  const [securePasswd, setSecurePasswd] = useState(true);
  const navigation = useNavigation<StackTypes>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { signIn, loadingAuth }:any = useContext(AuthContext);

  function handleAuth() {
    if (!email || !password) {
      Alert.alert("Ops", "Os campos precisam ser preenchidos")
      return
    }
    signIn({ email, password })
  }

  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>

        <LogoArea>
          <Logo source={require("../../assets/logo2.png")} />
        </LogoArea>

        <InputArea>
          <Feather name='mail' size={20} color={gray} />
          <Input placeholder="Email"
            autoCapitalize="none"
            value={email}
            onChangeText={(value: string) => setEmail(value)}
          />
        </InputArea>

        <InputArea>
          <Feather name='lock' size={20} color={gray} />

          <Input placeholder="Senha"
            secureTextEntry={securePasswd}
            autoCapitalize="none"
            onChangeText={(value: string) => setPassword(value)}
          />
          <TouchableOpacity onPress={() => setSecurePasswd(!securePasswd)}>
            <Feather name={securePasswd ? "eye" : "eye-off"} size={20} />
          </TouchableOpacity>
        </InputArea>

        <Submit onPress={() => handleAuth()}>
          {
            loadingAuth ?
              <ActivityIndicator size={28} color="#FFF" />
              :
              <SubmitText>Entrar</SubmitText>

          }
        </Submit>
        <SwitchOptionArea onPress={() => navigation.navigate("SignUp")}>
          <SwitchOptionLabel>Não possui uma conta? <SwitchOptionText> Criar Conta</SwitchOptionText> </SwitchOptionLabel>
        </SwitchOptionArea>

      </Container>
    </TouchableWithoutFeedback>
  );
}