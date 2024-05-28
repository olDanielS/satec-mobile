import { useState, useEffect} from 'react';

import { Container, Title, Content, Head, Body } from './styles';
import { ActivityIndicator, Text } from 'react-native'
import { primary } from '../../defaultColors';
import Header from '../../components/Header';

import {AccordionList } from 'accordion-collapse-react-native';
import Feather from '@expo/vector-icons/Feather'

import { collection, getDocs, orderBy, limit, startAfter, query } from 'firebase/firestore';
import { db } from "../../services/firebaseConnect";

interface DocumentData {
  id: string,
  title: string,
  content: string
}

const listRef = collection(db, "faqs");

export default function Faqs() {

  const [loading, setLoading] = useState(true);

  function _head(item:any) {
    return (

      <Head style={{ alignItems: 'baseline' }}>
        <Feather name={"chevron-right"} size={22} color="#000" />
        <Text>{item.title}</Text>
      </Head>

    );
  }

  function _body(item:any) {
    return (
      <Body >
        <Text style={{ textAlign: 'center' }}>{item.content}</Text>
      </Body>
    );
  }
  const [faqs, setFaqs] = useState<DocumentData[]>([]);

  useEffect(() => {
      
      async function loadFaqs() {
          const consult = query(listRef, limit(10));

          const consultSnapshot = await getDocs(consult);
          setFaqs([])
          setLoading(false)
          updateState(consultSnapshot)
      }

      loadFaqs();

      return () => { }
  },
      [])

      async function updateState(consultSnapshot:any) {         
              let list: DocumentData[] = [];
  
              consultSnapshot.forEach((doc:any) => {
                  const data = doc.data() as DocumentData;
                
                  list.push({
                      id: doc.id,
                     title: data.title,
                     content: data.content
  
                  });
              });
             setFaqs(faq => [...faq, ...list]);

      }


  return (
    <Container>
      <Header />

      <Content>

        <Title>Perguntas Respondidas Frequentemente</Title>
        {loading ? <ActivityIndicator size={50} color={primary}/> : 
        <AccordionList
          list={faqs}
          header={_head}
          body={_body}
          keyExtractor={(item: any) => item.id}
        
        />
        
        }
      </Content>
    </Container>
  );
}