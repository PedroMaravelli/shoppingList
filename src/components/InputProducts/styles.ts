import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ContainerProducts = styled.View`
    margin-top: -40px; 
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 40px;
`
export const ContainerInput = styled.View`
    flex-direction: row;
    align-items: start;


`

export const TitleInput = styled.Text`
    color: #AFABB6;
    margin-bottom: 8px;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;

`
export const InputItems = styled.TextInput`
    padding: 12px;
    align-items: center;
    gap: 8px;
    background-color: #111112;
    border-radius: 6px;
    border: 1px solid #252529;
    margin-bottom: 12px;
    color: #FFF;
`
export const InputQuantity = styled.TextInput`
    padding: 12px;
    align-items: center;
    gap: 8px;
    height: 40px;
    padding: 12px;
    width: 66px;
    color: #FFF;
    border-bottom-left-radius:6px;
    border-top-left-radius:6px;
    background-color:#111112 ;
    border: 1px solid #252529;

`
export const Select = styled.View`
        padding-right:4px;
        background-color:#17171A ;
        color: #FFF;
        border: 1px solid #252529;
        width: 72px;
        height: 40px;
        border-bottom-right-radius:6px;
        border-top-right-radius:6px;
        text-align: center;
        margin-right: 12px;

`
export const CategoryContainer = styled.View`
    margin-top: -21px;
`
export const CategoryInput = styled.View`
    background-color:#17171A ;
    width: 160px;
    height: 40px;
    border-radius: 6px;
    border: 1px solid #252529;
    margin-right: 12px;

`
export const ButtonProduct = styled.TouchableOpacity`
    border-radius:999px ;
    padding: 8px;
    background-color: #7450AC;
    align-items: center;
    justify-content: center;

`

export const dropdown = StyleSheet.create({
    container:{
        color:'#AFABB6',
        fontSize:14,
        textAlign:'left'

    },
    drop:{
        backgroundColor:'#17171A ',
        height:40,


    },
    items:{
        backgroundColor:'#17171A ',
        width:130,
    },
    text:{
        color:'#AFABB6',
        
    },
    search:{
        width:110,
        height:40
    }

})