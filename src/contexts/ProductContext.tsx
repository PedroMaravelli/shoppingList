import { ReactNode, createContext, useState } from "react";

interface ProductContextProps{
    products: Products[]
    handleNewProducts: (product: Products) => void
    handleBuyProduct: (select: boolean) => void

}
export const ProductContext = createContext({} as ProductContextProps)

interface ProviderProps {
    children: ReactNode
}
interface Products {
    name: string
    category: string
    quantity: string
    numberProducts: number
    buyProduct: boolean
}

export function ProductContextProvider({children}: ProviderProps){
    const [products, setProducts] = useState<Products[]>([])
    const [buyProduct, setBuyProduct] = useState<boolean>(false)


    function handleNewProducts(product: Products){
        setProducts(props => [...props , {
            name: product.name, 
            category: product.category, 
            quantity: product.quantity, 
            numberProducts: product.numberProducts, 
            buyProduct
        }])
    }

    function handleBuyProduct(select: boolean){
        setBuyProduct(select)

    }

    

    return(
        <ProductContext.Provider value={{
            products,
            handleBuyProduct,
            handleNewProducts,
            
        }}>
            {children}
        </ProductContext.Provider>

    )
}