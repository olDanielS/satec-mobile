import { Container, Content, Title, TitleArea, Cards,
   TitleCard, Footer, TitleFooter, BoxFooter, TextBoxFooter } from './styles'
import Header from '../../components/header';
import Card from '../../components/Card';

import Feather from '@expo/vector-icons/Feather'
import { primary } from '../../defaultColors';
import { useContext } from 'react';

import { AuthContext } from '../../contexts/Auth';

export default function Home() {
  
  const {user}:any = useContext(AuthContext);
  const str = user.name;
  const modStr = str[0].toUpperCase() + str.slice(1);
  
  
  return (
    <Container>
      <Header />

      <Content>
        <TitleArea>
          <Title>Olá {modStr}, bem vindo!</Title>
          <Feather name='bar-chart-2' size={20} color={primary} />
        </TitleArea>

        <Cards>
          <Card type="nt">
            <Feather name="file-plus" size={50} color={primary} />
            <TitleCard style={{ color: primary }}>Novo Chamado</TitleCard>
          </Card>
          <Card type="ac">
            <Feather name="navigation" size={50} color="#2F4F4F" />
            <TitleCard color="#2F4F4F">Acompanhar Chamados</TitleCard>
          </Card>
        </Cards>
        <Cards>

          <Card type="faqs">
            <Feather name="alert-triangle" size={50} color="#5141AC" />
            <TitleCard style={{ color: "#5141AC" }}>FAQS</TitleCard>
          </Card>
        </Cards>


        <Footer>
          <TitleFooter>Proposta do sistema</TitleFooter>
          <BoxFooter>
              <TextBoxFooter>
              Nossa proposta é promover a conexão entre os 
              alunos do IFBA e a CGTI, visando manter nossos
              ambientes acadêmicos sempre prontos para o
              aprendizado e pesquisa.
              </TextBoxFooter>
          </BoxFooter>
        </Footer>

      </Content>
    </Container>
  );
}