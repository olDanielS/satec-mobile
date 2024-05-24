import {
  Container, Title, Content, HorizontalCards,
  HorizontalCard, TextHorizontalCard,
} from './styles';
import Header from '../../components/header';
import { TouchableWithoutFeedback, Keyboard, ScrollView, FlatList, View, ActivityIndicator } from 'react-native';
import { gray, primary } from '../../defaultColors';
import { useEffect, useState } from 'react';

import { db } from "../../services/firebaseConnect";
import { collection, getDocs, orderBy, limit, startAfter, query, where } from 'firebase/firestore';
import { format } from 'date-fns';

import TicketsCard from '../../components/TicketsCard';


const listRef = collection(db, "Chamados");



interface DocumentData {
  id: string,
  name: string;
  description: string;
  lab: string;
  created: Date;
  createdFormat: string;
  equip: string;
  status: string;
  number: string;
}

export default function Tickets() {

  const [selected, setSelected] = useState("Todos");
  const [tickets, setTickets] = useState<DocumentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEmply, setIsEmply] = useState(false);


  useEffect(() => {
    setLoading(true);
    async function loadTickets() {

      let consult;
      if (selected == "Todos") {
        consult = query(listRef);
      } else {
        consult = query(listRef, where("status", "==", selected));
      }
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

        });
      });

      setTickets(chamados => [...chamados, ...list]);
    } else {
      setIsEmply(true)
    }

  }

  function handleChangeOption(type: string) {
    if (type == "all") {
      setSelected("Todos")
    }
    else if (type == "open") {
      setSelected("Aberto")
    }
    else if (type == "finish") {
      setSelected("Finalizado")
    }
    else if (type == "progress") {
      setSelected("Em Progresso")
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <Content>

          <Title>Status de chamados</Title>
          <View style={{ height: 90 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
              <HorizontalCards>
                <HorizontalCard onPress={() => handleChangeOption('all')}
                  style={{
                    backgroundColor: selected == "Todos" ? primary : "#dcdcdc",
                  }}>
                  <TextHorizontalCard style={{ color: selected == "Todos" ? "#FFF" : "#000" }}>
                    Todos</TextHorizontalCard>
                </HorizontalCard>
                <HorizontalCard onPress={() => handleChangeOption('open')} style={{ backgroundColor: selected == "Aberto" ? primary : "#dcdcdc" }}>
                <TextHorizontalCard style={{ color: selected == "Aberto" ? "#FFF" : "#000" }}>Abertos</TextHorizontalCard>
                </HorizontalCard>
                <HorizontalCard onPress={() => handleChangeOption('progress')} style={{ backgroundColor: selected == "Em Progresso" ? primary : "#dcdcdc" }} >
                <TextHorizontalCard style={{ color: selected == "Em Progresso" ? "#FFF" : "#000" }}>Em progresso</TextHorizontalCard>
                </HorizontalCard >
                <HorizontalCard onPress={() => handleChangeOption('finish')} style={{ backgroundColor: selected == "Finalizado" ? primary : "#dcdcdc" }}>
                <TextHorizontalCard style={{ color: selected == "Finalizado" ? "#FFF" : "#000" }}>Encerrados</TextHorizontalCard>
                </HorizontalCard>
              </HorizontalCards>
            </ScrollView>
          </View>

          {
            loading ? <ActivityIndicator size={50} color={primary} /> :

              <FlatList
                data={tickets}
                renderItem={({ item }) => <TicketsCard data={item} />}
                keyExtractor={item => item.id}

              />
          }

        </Content>

      </Container>
    </TouchableWithoutFeedback>
  );
}