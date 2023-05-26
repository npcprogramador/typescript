import { Container, ListIcon } from './styled';


const Message = () => {
    return(
        <Container>
            <ListIcon />

            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong><br/>
                Crie tarefas e organize seus itens a fazer
            </p>
        </Container>
    )
}


export default Message;