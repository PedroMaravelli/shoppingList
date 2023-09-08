import { ContainerCard, Content, ImageRemove, Name, NameProductAndQuantity, Quantity, RightContent } from "./styles";
import unselected from '../../assets/unselected.png'
import remove from '../../assets/delete.png'
import { useContext, useState } from "react";

import fruta from '../../assets/fruta.png'
import carne from '../../assets/carne.png'
import legume from '../../assets/legume.png'
import bebida from '../../assets/bebida.png'
import padaria from '../../assets/padaria.png'
import selected from '../../assets/selected.png'




import {Image, TouchableOpacity} from 'react-native'
import { ProductContext } from "../../contexts/ProductContext";


export function CardProducts (){

    const {products} = useContext(ProductContext)
    const [isSelected, setIsSelected] = useState<boolean>(false)

    const { handleBuyProduct } = useContext(ProductContext)

    function productBuy(){
        if(isSelected){
            setIsSelected(false)
        }else{
            setIsSelected(true)
            
        }
        handleBuyProduct(isSelected)

        
    }

    return(
        <>
        {
            products.map((product) => {
                return (
                    <ContainerCard 
                    productBuy={isSelected} 
                    key={product.name}
                    >
                        <Content>
                            <TouchableOpacity onPress={productBuy}>
                                <Image source={isSelected ? selected: unselected}></Image>
                            </TouchableOpacity>
                            <NameProductAndQuantity>
                                <Name style={isSelected ? 'line-through': 'none'} productBuy={true}>
                                    {product.name}
                                </Name>
                                <Quantity>{product.numberProducts} {product.quantity}</Quantity>
                            </NameProductAndQuantity>
                        </Content>
                        <RightContent> 
                            <Image source={product.category == 'Fruta' ? fruta: 
                                product.category == 'Legume' ? legume: 
                                product.category == 'Bebida'? bebida: 
                                product.category == 'Padaria'? padaria: carne}></Image>
                            <TouchableOpacity>
                                <ImageRemove source={remove}></ImageRemove>
                            </TouchableOpacity>

                        </RightContent>
                    </ContainerCard>

                )
            })
        }
        
            
        </>
    )
}