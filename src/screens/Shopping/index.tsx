import { CardProducts } from '../../components/CardProducts'
import { Header } from '../../components/Header'
import { InputProducts } from '../../components/InputProducts'
import { Container} from './styles'
export function Shopping (){
    return (
        <Container>
            <Header/>
            <InputProducts/>
            <CardProducts/>

        </Container>
    )
}