import styled from "styled-components/native";
import { primary } from "../../defaultColors";

export const Container = styled.View `
    flex: 1;

`
export const TitleArea = styled.View `
    align-items: center;
    justify-content: center;
    background-color: rgba(2, 148, 93, 0.05);
    padding: 8px;
    border-radius: 10px;
    flex-direction: row;
    gap: 10px;
    
`
export const Title = styled.Text `
    font-size: 18px;
    color: #000;
    font-weight: 500;
    font-style: normal;
    color: ${primary};
`
export const Content = styled.View `
    flex: 1;
    padding: 10px;
 
`
export const Cards = styled.View `
    flex-direction: row;
    justify-content: space-evenly;


`
export const TitleCard = styled.Text `
     font-size: 14px;
    font-weight: bold;
    padding-top: 10px;
    text-align: center;
`


export const Footer = styled.View `
     flex: 1;
     padding: 10px;
     margin-top: 50px;
`
export const TitleFooter = styled.Text `
    font-size: 16px;
    font-weight: bold;
    color: ${primary};
`
export const BoxFooter = styled.View `
    background-color: rgba(2, 148, 93, 0.1);
    margin-top: 10px;
    width: 100%;
    height: 100px;
    border-radius: 12px;
    padding: 10px;
`
export const TextBoxFooter = styled.Text `
    font-size: 14px;
    color: ${primary};
    font-weight: 500;
    line-height: 18px;
`

