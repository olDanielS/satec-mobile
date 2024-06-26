import styled from "styled-components/native"
import { bg_primary, gray, white_primary } from "../../defaultColors"
export const Container = styled.SafeAreaView`
flex: 1;
background-color: ${bg_primary};

`

export const Title = styled.Text`
font-size: 17px;
font-weight: bold;
margin-top: 20px;
margin-bottom: 20px;
text-align: center;
color: ${white_primary};

`
export const Content = styled.View`
flex: 1;
padding: 10px;

`

export const HorizontalCards = styled.View`
flex-direction: row;
height: 80px;
align-items: center;
justify-content: center;
padding: 10px;
`
export const HorizontalCard = styled.TouchableOpacity`
    padding: 10px;
    align-items: center;
    height: 50px;
    margin-right: 20px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background-color: ${bg_primary};
    
`
export const TextHorizontalCard = styled.Text`
    color: #000;
    font-weight: bold;
`

