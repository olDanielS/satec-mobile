import React, {useContext} from 'react';
import { Alert, StatusBar } from 'react-native';

import {Container, Hamburger, BtnLogout, Logo} from './styles';

import { primary } from '../../defaultColors';
import Feather from '@expo/vector-icons/Feather';
import logo from '../../assets/logo2.png'

import {  DrawerNavigationProp} from "@react-navigation/drawer";
import { ParamListBase, useNavigation } from '@react-navigation/native';

import { AuthContext } from '../../contexts/Auth';

export default function Header() {
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    const {Logout} = useContext(AuthContext)

    function handleLogout(){
        Alert.alert(
            'Satec',
            'Deseja mesmo sair?',
            [
              {
                text: 'Não',
                onPress: () => {},
                style: 'cancel',
              },
              {
                text: 'Sim',
                onPress: () => Logout(),
                style: "default",
              },
            ],
            {
              cancelable: true,
              onDismiss: () =>
                Alert.alert(
                  'This alert was dismissed by tapping outside of the alert dialog.',
                ),
            },
          );
      }
    

 return (
   <Container>
        <StatusBar barStyle="light-content" backgroundColor={primary}/>
        <Hamburger onPress={() => navigation.toggleDrawer()}>
            <Feather name='align-right' size={30} color="#fff"/> 
        </Hamburger>
        <Logo  source={logo} style={{width: 130, height: 65}}/>

        <BtnLogout onPress={() => handleLogout()}>
            <Feather name='log-out' size={30} color="#fff"/> 
        </BtnLogout>
   </Container>
 );
}