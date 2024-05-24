import { useContext, useState } from "react";

import { Container, Title, Content, Label, Input, InputLong, 
  SubmitArea, SubmitText,stylePicker } from "./styles";

import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView,
   Platform, Alert, ActivityIndicator, ScrollView } from "react-native";

import Header from "../../components/header";

import { AuthContext } from "../../contexts/Auth";

import { auth, db } from '../../services/firebaseConnect';
import { addDoc, collection } from 'firebase/firestore'

import { useNavigation } from "@react-navigation/native";
import { DrawerTypes } from "../../routes/DrawerRoutes";

import { Picker } from '@react-native-picker/picker';


export default function NewTicket() {

  const {user}:any = useContext(AuthContext);

  const str = user.name;
  const modStr = str[0].toUpperCase() + str.slice(1);


  const [name, setName] = useState(modStr);
  const [selectedLab, setSelectedSelectedLab] = useState("F1");
  const [number, setNumber] = useState("");
  const [equip, setEquip] = useState("");
  const [description, setDescription] = useState("");
  
  const navigation = useNavigation<DrawerTypes>();  
  const [loading, setLoading] = useState(false);

  async function handleRegister() {

    setLoading(true)
    if (!selectedLab || !description || !equip) {
      
      setLoading(false)
      Alert.alert("Ops, Verifique os campos e tente novamente")
      return
    }
  
    await addDoc(collection(db, "Chamados"), {
      created: new Date(),
      name: name,
      lab: selectedLab,
      number: number,
      status: "Aberto",
      description: description,
      equip: equip,
      userID: user.uid

    }).then(() => {
      setLoading(false)
      Alert.alert("Sucesso", "Chamado registrado")
      navigation.navigate("Home");
    }).catch((error) => {
      setLoading(false)
      Alert.alert("Ops, erro ao registrar o chamado")
      console.log(error)
    })

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === "android" ? -800 : 0} // Ajuste conforme necessário
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <Header />
            <Content>
              <Title>Abertura de chamado</Title>
              <Label>Nome do solicitante <Title>(Autopreenchido)</Title></Label>
              <Input
                placeholder={`Aluno:  ${user.name.toUpperCase()} Autopreenchido`}
                value={name}
                onChangeText={(value: string) => setName(value)}
                editable={false}
              />

              <Label>Laboratório</Label>

              <Picker
                selectedValue={selectedLab}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedSelectedLab(itemValue)
                  
                }  style={stylePicker.backgroundPicker}>
                <Picker.Item label="F1" value="F1"/>
                <Picker.Item label="F2" value="F2"/>
                <Picker.Item label="F3" value="F3"/>
                <Picker.Item label="F5" value="F5"/>
                <Picker.Item label="G3" value="G3"/>
                <Picker.Item label="G4" value="G4"/>
                
              </Picker>

              <Label>N° de Patrimônio</Label>
              <Input
                placeholder="EX: 666"
                value={number}
                onChangeText={(value: string) => setNumber(value)}
              />

              <Label>Equipamento</Label>
              <Input
                placeholder="Ex: Computador"
                value={equip}
                onChangeText={(value: string) => setEquip(value)}
              />

              <Label>Descrição do problema</Label>
              <InputLong
                placeholder="Descrição do problema e localização do equipamento(opcional)"
                value={description}
                onChangeText={(value: string) => setDescription(value)}
              />

              <SubmitArea onPress={() => handleRegister()}>
                <SubmitText> {loading ? <ActivityIndicator size={22} color="#fff"/> : "Cadastrar Chamado"}
                </SubmitText>
              </SubmitArea>
            </Content>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}