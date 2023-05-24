import { Container } from './styled';
import Logo from '../../assets/logo.svg';

const Header = () => {
    return(
        <Container>
            <img src={Logo} alt="Logo" />
        </Container>
    )
}

export default Header;