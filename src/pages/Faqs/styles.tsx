import styled from "styled-components/native"
import { gray } from "../../defaultColors"
export const Container = styled.SafeAreaView`
flex: 1;

`

export const Title = styled.Text`
font-size: 17px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;
text-align: center;

`
export const Content = styled.View`
flex: 1;
padding: 10px;

`
export const Head = styled.View`
background-color: #F4F4F4;
padding: 10px;
border: 1px solid rgba(0,0,0,0.2);
border-radius: 2px;
margin: 0;
flex-direction: row;
`
export const Body = styled.View`
background-color: #FFF;
padding: 15px;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;

`

