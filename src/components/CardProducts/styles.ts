import styled from "styled-components/native";

interface ProductBuyProps {
    productBuy: boolean
}


export const ContainerCard= styled.View<ProductBuyProps>`
    margin-left: 24px;
    margin-right: 24px;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;
    background-color: #17171A;
    border: 1px solid #252529;
    justify-content: space-between;
    flex-direction: row;
    background-color: #17171A;
    opacity:  ${(props:ProductBuyProps ) => props.productBuy ? 0.7: 1 };;
    
`
export const Content = styled.View`
    flex-direction: row;
    align-items: center;
`
export const NameProductAndQuantity = styled.View`
    gap: 2px;
    margin-left: 16px;
`
const styleText = {
    strikethrough: 'line-through' ,
    none: 'none',
} as const


interface NameStyleProps {
    productBuy: ProductBuyProps
    style:  keyof typeof styleText
}
export const Name = styled.Text<NameStyleProps>`
    color: ${(props: NameStyleProps) => props.productBuy ? '#FBF9FE': '#FBF9FE' };
    
    font-size: 14px;
    font-weight: 700;
    text-decoration-line: ${(props: NameStyleProps ) => props.productBuy ? props.style: props.style};

   
    
`
export const Quantity = styled.Text`
    color: #AFABB6;
    font-size: 12px;
    font-weight: 400;
`
export const RightContent = styled.View`
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 12px;
`
export const ImageRemove = styled.Image`
    width: 25px;
    height: 25px;
    
`
