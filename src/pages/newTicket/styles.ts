import styled from "styled-components/native"
import { gray, primary } from "../../defaultColors"

import { StyleSheet } from 'react-native';

export const stylePicker = StyleSheet.create({
    backgroundPicker: {
        width: "70%",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#9D9D9D",
        fontSize: 14,
        marginBottom: 10,
        borderRadius: 10,
        
      
    }
})

export const Container = styled.SafeAreaView`
flex: 1;

`
export const Content = styled.View`
flex: 1;
padding: 10px;

`
export const Title = styled.Text`
font-size: 16px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;

`
export const Label = styled.Text`
font-size: 14px;
margin-bottom: 5px;

`
export const Input = styled.TextInput`
width: 70%;
background-color: #fff;
border: 1px solid #9D9D9D;
font-size: 14px;
margin-bottom: 10px;
border-radius: 7px;
padding: 7px;

`
export const InputLong = styled.TextInput.attrs({
    multiline: true,
    textAlignVertical: 'top',
})`

width: 80%;
height: 100px;
background-color: #fff;
border: 1px solid #9D9D9D;
font-size: 14px;
margin-bottom: 10px;
border-radius: 7px;
padding: 5px;

`
export const SubmitArea = styled.TouchableOpacity`
    margin: 0 auto;
    background-color: ${primary};
    padding: 10px;
    border-radius: 7px;
    align-items: center;
    justify-content: center;
`
export const SubmitText = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`