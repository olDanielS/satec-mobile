import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { FlatList,ActivityIndicator, View, Text} from 'react-native';

import { Container, Content, Title, TitleArea, AmountTickets, AmountTicketsArea,
  OptionsArea, BtnOptions, BtnText, BtnFooter, TextBtnFooter
} from './styles'
import Feather from '@expo/vector-icons/Feather';

import Header from '../../components/Header';
import TicketsCard from '../../components/TicketsCard';
import { gray_primary, primary } from '../../defaultColors';

import { db } from "../../services/firebaseConnect";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { format } from 'date-fns';

import {  DrawerNavigationProp} from "@react-navigation/drawer";
import { ParamListBase, useNavigation } from '@react-navigation/native';


interface DocumentData {
  id: string,
  name: string;
  description: string;
  lab: string;
  created: any;
  createdFormat: string;
  equip: string;
  status: string;
  number: string;
  userID: string;
}


export default function Home() {
  
  const {user}:any = useContext(AuthContext);

  const [selected, setSelected] = useState("Aberto");
  const [tickets, setTickets] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEmply, setIsEmply] = useState(false);
  
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  const listRef = collection(db, "Chamados");

  useEffect(() => {
    setLoading(true);
    console.log(user)
    async function loadTickets() {

      const consult = query(listRef, 
        where("status", "==", selected), 
        where("userID", "==", user.uid));
      
      const consultSnapshot = await getDocs(consult);
      setTickets([])
      await updateState(consultSnapshot)

      setLoading(false)
    }

    loadTickets();

    return () => { }
  },
    [selected])
  
    async function updateState(consultSnapshot: any) {
      const isCollectionEmpty = consultSnapshot.size === 0;
  
      if (!isCollectionEmpty) {
        let list: DocumentData[] = [];
  
        consultSnapshot.forEach((doc: any) => {
          const data = doc.data() as DocumentData;
  
          const createdDate = data.created.toDate();
          const formattedDate = format(createdDate, 'dd/MM/yyyy');
  
          list.push({
            id: doc.id,
            description: data.description,
            lab: data.lab,
            name: data.name,
            created: data.created,
            equip: data.equip,
            createdFormat: formattedDate,
            status: data.status,
            number: data.number,
            userID: data.userID,
  
          });
        });
        
        console.log(user)
        console.log(list)
        setTickets(chamados => [...chamados, ...list]);
        

      } else {
        setIsEmply(true)
      }
  
    }

  return (
    <Container>
      <Header />

      <Content>
          <TitleArea>
            <Title>Meus chamados</Title>
            <AmountTicketsArea>
              <AmountTickets>{tickets.length}</AmountTickets>
            </AmountTicketsArea>
          </TitleArea>

          <OptionsArea>
            <BtnOptions onPress={() => setSelected("Aberto")} style={{borderWidth: 2, borderColor: selected == "Aberto" ? primary : gray_primary}}>
              <BtnText>Em Aberto</BtnText>
            </BtnOptions>

            <BtnOptions onPress={() => setSelected("Em Progresso")}  style={{borderWidth: 2, borderColor: selected == "Em Progresso" ? "#ffbd54" : gray_primary}}>
              <BtnText>Em andamento</BtnText>
            </BtnOptions>
          </OptionsArea>

          <OptionsArea>
          <BtnOptions onPress={() => setSelected("Finalizado")} style={{borderWidth: 2, borderColor: selected == "Finalizado" ? "#ff7d7d" : gray_primary}}>
              <BtnText>Finalizados</BtnText>
            </BtnOptions>
          </OptionsArea>
          

          {
            isEmply && (
              <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Feather name='message-square' size={80} color="#FFF"/>
                <Text style={{fontSize: 18, color: "#fff", textAlign: "center"}}>Você ainda não possui chamados criados</Text>
              </View>
            )
          }

          {
            loading ? <ActivityIndicator size={50} color={primary} /> :

              <FlatList
                data={tickets}
                renderItem={({ item }) => <TicketsCard data={item} />}
                keyExtractor={item => item.id}
                style={{marginTop: 25, marginBottom: 25 }}
              />
          }

          <BtnFooter onPress={() => navigation.navigate("NewTicket")}>
            <TextBtnFooter>Nova Solicitação</TextBtnFooter>
          </BtnFooter>


      </Content>
    </Container>
  );
}