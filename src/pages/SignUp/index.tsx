import React, { useState, useContext } from 'react';

import {
  Container, Input, LogoArea, Logo,
  InputArea, Submit, SubmitText, SwitchOptionArea,
  SwitchOptionText, SwitchOptionLabel
} from '../SignIn/styles'
import { TouchableWithoutFeedback, Keyboard, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import { gray } from '../../defaultColors';

import Feather from '@expo/vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/StackRoutes';

import { AuthContext } from '../../contexts/Auth';

export default function SignIn() {

  const [securePasswd, setSecurePasswd] = useState(true);
  const navigation = useNavigation<StackTypes>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loadingAuth }:any = useContext(AuthContext);

  function handleSignUp() {
    if (!name || !email || !password) {
      Alert.alert("Ops", "Os campos precisam ser preenchidos")
      return
    }
    signUp({name, email, password })
  }


  return (

    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <LogoArea>
          <Logo source={require("../../assets/logo.png")} />
        </LogoArea>

        <InputArea>
          <Feather name='user' size={20} color={gray} />
          <Input placeholder="Nome"
          value={name} onChangeText={(value: string) => setName(value)}/>
        </InputArea>

        <InputArea>
          <Feather name='mail' size={20} color={gray} />
          <Input placeholder="Email" autoCapitalize="none"  value={email} 
          onChangeText={(value: string) => setEmail(value)} />
        </InputArea>

        <InputArea>
          <Feather name='lock' size={20} color={gray} />

          <Input placeholder="Senha" secureTextEntry={securePasswd} 
          autoCapitalize="none"value={password} 
          onChangeText={(value: string) => setPassword(value)}
          />
          <TouchableOpacity onPress={() => setSecurePasswd(!securePasswd)}>
            <Feather name={securePasswd ? "eye" : "eye-off"} size={20} />
          </TouchableOpacity>
        </InputArea>

        <Submit onPress={()=>  handleSignUp()}>
        {
            loadingAuth ?
              <ActivityIndicator size={28} color="#FFF" />
              :
              <SubmitText>Criar conta</SubmitText>

          }
        </Submit>
        <SwitchOptionArea onPress={() => navigation.navigate("SignIn")}>
          <SwitchOptionLabel>Já possui uma conta?<SwitchOptionText> Acessar conta</SwitchOptionText> </SwitchOptionLabel>
        </SwitchOptionArea>

      </Container>
    </TouchableWithoutFeedback>
  );
}