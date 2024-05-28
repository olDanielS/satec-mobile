import { View } from 'react-native';
import { Container, LabelDate, LabelItem, BoxItemsCard, BoxStatus } from './styles';
import { useMemo } from 'react';

import { primary } from '../../defaultColors';

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

export default function TicketsCard({ data }: { data: DocumentData }) {

  const labelName = useMemo(() => { //Use Memo vai "memorizar" os dados 
    if(data.status == "Todos"){
        return{
            color: {primary},
          
        }
    }else if(data.status == "Aberto"){
        return{
            color: primary,
            
        }
    }else if(data.status == "Em Progresso"){
        return{
            color: "#ffbd54",
            
        }
    }else{
        return{
          color: "#ff7d7d",
         
        }
      }
    }, [data]) 
    
  
  return (
    <Container bg={labelName}>
      <LabelDate>{data.createdFormat}</LabelDate>

      <BoxItemsCard>
        <LabelItem>{`Solicitante ${data.name}`}</LabelItem>
        <LabelItem>{`Patrimonio ${data.number}`}</LabelItem>
      </BoxItemsCard>
      <BoxItemsCard>
        <LabelItem>{`Labortório ${data.lab}`}</LabelItem>

        <View style={{flexDirection: 'row', gap: 5}}>

          <LabelItem style={{textAlign: 'center', fontWeight: 'bold'}}>Status</LabelItem>
          <BoxStatus>
            <LabelItem style={{ color: "#FFF", fontStyle: "italic", fontWeight: 'bold' }}>{data.status}</LabelItem>
          </BoxStatus>
        </View>
      </BoxItemsCard>

    </Container>
  );
}