import styled from "styled-components/native";
import { primary, bg_primary, white_primary, gray_primary } from "../../defaultColors";

export const Container = styled.View`
    flex: 1;
    ;

`
export const Content = styled.View`
    flex: 1;
    padding: 15px;
    background-color: ${bg_primary};
`
export const TitleArea = styled.View`
    margin-top: 10px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
`
export const Title = styled.Text`
    color: ${white_primary};
    font-size: 20px;
    font-weight: bold;
`


export const AmountTicketsArea = styled.View`
    background-color:  ${gray_primary};
    padding: 10px;
    height: 40px;
    width: 40px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`

export const AmountTickets = styled.Text`
    color: ${white_primary};
    font-size: 16px;
    font-weight: bold;
`

export const OptionsArea = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    gap: 15px;

`
export const BtnOptions = styled.TouchableOpacity`
    flex: 1;
    margin-top: 15px;
    width: "50%";
    background-color: ${gray_primary};
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

`
export const BtnText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-weight: bold;
`
export const BtnFooter = styled.TouchableOpacity`
    background-color: ${primary};
    width: 100%;
    padding: 10px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;

`
export const TextBtnFooter = styled.Text`
    color: ${white_primary};
    font-size: 18px;
    font-weight: bold;
`



