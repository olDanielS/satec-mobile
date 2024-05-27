import styled from "styled-components/native"
import { gray, primary, gray_primary, white_primary } from "../../defaultColors";

export const Container = styled.View`
background-color: ${gray_primary};
margin-bottom: 10px;
padding: 10px;
border-left: 1px;
border-left-width: 10px;
border-left-color: ${props => props.bg.color};

`
export const LabelDate = styled.Text`
font-size: 14px;
margin-bottom: 5px;
color: ${white_primary};
text-align: right;
`
export const LabelItem = styled.Text`
font-size: 15px;
margin-bottom: 5px;
color: ${white_primary};
text-align: right;

`
export const BoxItemsCard = styled.View`
flex-direction: row;
justify-content: space-between;
`
export const BoxStatus = styled.View`
background-color: ${primary};
padding: 5px;
border-radius: 5px;
`


