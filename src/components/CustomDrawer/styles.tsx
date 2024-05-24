import styled from "styled-components/native"
import { primary } from "../../defaultColors"

export const Container = styled.View `
    flex: 1;
    background-color: ${primary};
    align-items: center;
    padding: 10px;
    
`
export const Card = styled.View `
  height: 90px;
  width: 100%;
  background-color: #007A4C;
  border-radius: 17px;
  margin-top: 80px;
  margin-bottom: 60px;
  padding: 10px;
`
export const TitleCard = styled.Text`
    text-align: right;
    color: #fff;
    font-weight: bold;
`
export const TextCard = styled.Text`
    color: #fff;
    font-weight: bold;
    padding-left: 10px;
    font-size: 16px;
`
export const CardOptionDrawer = styled.TouchableOpacity `
  height: 50px;
  width: 100%;
  background-color: #007A4C;
  border-radius: 8px;
  margin-top:15px;
  padding: 10px;
`
export const CardOptionDrawerTitle = styled.Text `
   color: #fff;
    font-weight: bold;
    padding-left: 10px;
    font-size: 16px;
`