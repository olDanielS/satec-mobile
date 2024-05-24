import {useMemo } from "react";

import { Container} from "./styles"; 

import { useNavigation } from "@react-navigation/native";
import { DrawerTypes } from "../../routes/DrawerRoutes";

export default function Card(props:any) {

  const navitation = useNavigation<DrawerTypes>()

  const labelName = useMemo(() => { //Use Memo vai "memorizar" os dados 
    if(props.type == "nt"){
        return{
            color: "rgba(2, 148, 93, 0.2)",
            label:"Novo chamado"
        }
    }else if(props.type == "faqs"){
        return{
            color: "rgba(81, 65, 172, 0.1)",
            
            label:"FAQS"
        }
    }else{
        return{
          color: "rgba(172, 216, 230, 0.2)",
          label:"Acompanhar chamados"
        }
    }
}, [props]) //Toda vez que essa propriedade for alterada ele vai memorizar o novo valor e vamos poder manipula-lo

  function handleButtons() {
    if(props.type == "nt"){
      navitation.navigate("NewTicket")
     
  }else if(props.type == "faqs"){
      navitation.navigate("Faqs")
  }else{
    navitation.navigate("Tickets")
  }
  }

  return (
   <Container bg={labelName.color} onPress={() => handleButtons()} >
      {props.children}
   </Container>

  );
}