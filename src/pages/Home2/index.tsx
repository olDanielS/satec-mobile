import { Container, Content, Title, TitleArea, AmountTickets, AmountTicketsArea,
  OptionsArea, BtnOptions, BtnText, BtnFooter, TextBtnFooter
} from './styles'
import Header from '../../components/header';
import TicketsCard from '../../components/TicketsCard';

import { useContext } from 'react';

import { AuthContext } from '../../contexts/Auth';
import { FlatList, View, Text } from 'react-native';



export default function Home2() {
  
  const {user}:any = useContext(AuthContext);

  const myTickets = [
    {id: 1, status: "Aberto", name: "Daniel", number: 123, lab: "F1"},
    {id: 2, status: "Em Progresso", name: "Daniel", number: 123, lab: "F1"},
    {id: 3, status: "Finalizado", name: "Daniel", number: 123, lab: "F1"}
  ];
  


  return (
    <Container>
      <Header />

      <Content>
          <TitleArea>
            <Title>Meus chamados</Title>
            <AmountTicketsArea>
              <AmountTickets>3</AmountTickets>
            </AmountTicketsArea>
          </TitleArea>

          <OptionsArea>
            <BtnOptions>
              <BtnText>Em Aberto</BtnText>
            </BtnOptions>

            <BtnOptions>
              <BtnText>Em andamento</BtnText>
            </BtnOptions>
          </OptionsArea>

          <OptionsArea>
            <BtnOptions>
              <BtnText>Finalizados</BtnText>
            </BtnOptions>
          </OptionsArea>

          <FlatList
            style={{flex: 1,marginBottom:10, marginTop: 25}}
            data={myTickets}
            renderItem={({ item }) => <TicketsCard data={item} />}
            keyExtractor={item => item.id}
            
          />


          <BtnFooter>
            <TextBtnFooter>Nova Solicitação</TextBtnFooter>
          </BtnFooter>


      </Content>
    </Container>
  );
}