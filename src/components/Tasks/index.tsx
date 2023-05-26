import { Container, Header, List } from './styled';
import Task from '../Task';
import Message from '../Message';


const Tasks = () => {
    return (
        <Container>
            <Header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>10</span>
                </div>
                <div>
                    <p className='textPurple'>Concluídas</p>
                    <span>2 de 10</span>
                </div>
            </Header>
            <List>
                <Task />
                <Task />
            </List>
            <Message />
        </Container>
    )
}


export default Tasks;