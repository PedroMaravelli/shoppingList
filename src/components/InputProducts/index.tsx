
import { ButtonProduct, CategoryContainer, CategoryInput, ContainerInput, ContainerProducts, InputItems, InputQuantity, Select, TitleInput, dropdown } from "./styles";
import RNPickerSelect from "react-native-picker-select";
import SelectDropdown from "react-native-select-dropdown";
import { Image } from "react-native";

import more from '../../assets/more.png'
import { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContext";

export function InputProducts (){
    const categoryTypes = ['Padaria', 'Legume', 'Carne', 'Fruta', 'Bebida']
    const quantityTypes = ['Unidade', 'Kg', 'L', ]


    const [quantity, setQuantity] = useState<string>('Unidade')
    const [categoryProduct, setCategoryProduct] = useState<string>('')
    const [nameProduct, setNameProduct] = useState<string>('')
    const [numberProducts, setNumberProducts] = useState<number>(1)


    const { handleNewProducts } = useContext(ProductContext)





    function addNewProduct(){
        handleNewProducts({name: nameProduct, quantity: quantity, category: categoryProduct, numberProducts: numberProducts, buyProduct: false})
        setNameProduct('')
        setCategoryProduct('')
        setQuantity('')
        setNumberProducts(1)

    }


    return (
        <ContainerProducts>
           
                <TitleInput>
                    Item
                </TitleInput>
                <InputItems 
                    onChangeText={setNameProduct}
                    value={nameProduct}/>
                <TitleInput>Quantidade</TitleInput>
            <ContainerInput>
               
                <InputQuantity
                    keyboardType="numeric"
                    onChangeText={setNumberProducts}
                    value={numberProducts}
                    ></InputQuantity>
                <Select >
                    <SelectDropdown
                            data={quantityTypes}
                            defaultValue={quantity}
                            onSelect={(item: string) => {
                                setQuantity(item)

                            }}
                            buttonTextStyle={dropdown.container}
                            buttonStyle={dropdown.drop}
                            dropdownStyle={dropdown.items}
                            rowTextStyle={dropdown.text}
                            rowStyle={dropdown.search}
                            searchInputStyle={dropdown.search}
                            defaultButtonText="UN."
                        />
                </Select>
                <CategoryContainer>
                    <TitleInput>Categoria</TitleInput>
                    <CategoryInput>
                        <SelectDropdown
                            data={categoryTypes}
                            
                            onSelect={(item: string) => {
                                setCategoryProduct(item)
                            }}
                            buttonTextStyle={dropdown.container}
                            buttonStyle={dropdown.drop}
                            dropdownStyle={dropdown.items}
                            rowTextStyle={dropdown.text}
                            rowStyle={dropdown.search}
                            searchInputStyle={dropdown.search}
                            defaultButtonText="Selecione"
                        />
                    </CategoryInput>
                  
                </CategoryContainer>

                <ButtonProduct onPress={addNewProduct}>
                    <Image source={more}></Image>
                    </ButtonProduct>
            </ContainerInput>
        </ContainerProducts>
    )
}