import { HeaderContainer, Title } from './styles'
import bg from '../../assets/bg.png'


export function Header (){
    return (
        <HeaderContainer source={bg}>
            <Title>
                Lista de Compras 
            </Title>

        </HeaderContainer>
    )
}