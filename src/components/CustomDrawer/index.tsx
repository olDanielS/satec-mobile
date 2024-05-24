import {useContext} from "react";
import { AuthContext } from "../../contexts/Auth";

import { Container,Card, TitleCard, TextCard,CardOptionDrawer, CardOptionDrawerTitle } from './styles';

import { useNavigation } from "@react-navigation/native";

import { DrawerTypes } from "../../routes/DrawerRoutes";
import { Alert } from "react-native";

export default function CustomDrawer() {

  const {user, Logout}:any = useContext(AuthContext);
  const str = user.name;
  const modStr = str[0].toUpperCase() + str.slice(1);
 

  const navigation = useNavigation<DrawerTypes>();

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
       <Card>
        <TitleCard>Aluno</TitleCard>
        <TextCard>{modStr}</TextCard>
      </Card>

      <CardOptionDrawer onPress={() => navigation.navigate("Home")}>
          <CardOptionDrawerTitle>Home</CardOptionDrawerTitle>
      </CardOptionDrawer>
      <CardOptionDrawer onPress={() => navigation.navigate("Tickets")}>
          <CardOptionDrawerTitle>Acompanhar chamados</CardOptionDrawerTitle>
      </CardOptionDrawer>
      <CardOptionDrawer onPress={() => handleLogout()}>
          <CardOptionDrawerTitle>Sair</CardOptionDrawerTitle>
      </CardOptionDrawer>
   </Container>
  );
}