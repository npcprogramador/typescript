import { Container, IconAdd } from './styled';
import Logo from '../../assets/logo.svg';

const Header = () => {
    return(
        <Container>
            <img src={Logo} alt="Logo" />

            <form>
                <input type="text" placeholder="Adicione uma nova tarefa"/>
                <button type='submit'>
                    Criar <IconAdd />
                </button>
            </form>
        </Container>
    )
}

export default Header;