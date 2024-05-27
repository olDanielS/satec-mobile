import styled from "styled-components/native"
import { gray, primary } from "../../defaultColors"

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #121214;
    flex-direction: column;
    margin: 0;
    padding: 30px;
`
export const LogoArea = styled.View`
    width: 300px;
    height: 250px;
`
export const Logo = styled.Image`
    width: 100%;
    height: 100%;
`

export const InputArea = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    height: 55px;
    width: 95%;
    background-color: #FFF;
    color: #000;
    border-radius: 8px;
    border: 1px solid ${gray};
    gap: 5px;
    margin-bottom: 15px;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: "#9D9D9D"
})`
    height: 100%;
    width: 250px;
    font-size: 16px;
    color: #000;
    `
export const Submit = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 44px;
    width: 90%;
    background-color: ${primary};
    border-radius: 8px;
    margin-bottom: 20px;
    margin-top: 10px;

    `
export const SubmitText = styled.Text`
   color: #FFF;
   font-size: 20px;
   font-weight: bold;
    `
export const SwitchOptionArea = styled.TouchableOpacity`
    text-align: center;

    `
export const SwitchOptionLabel = styled.Text`
   color: ${primary};
   font-size: 14px;
    `
export const SwitchOptionText = styled.Text`
   color: ${primary};
   font-size: 14px;
   font-weight: bold;
    `

