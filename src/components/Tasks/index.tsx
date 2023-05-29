import { Container, Header, List } from './styled';
import Task from '../Task';
import Message from '../Message';
import { ITask } from '../../App';


interface Props {
    tasks: ITask[];
}


const Tasks = ({ tasks }: Props) => {
    //qauntidade de tarefas.
    const tasksQuantity = tasks.length;
    //quantidade de tarefas marcadas como concluídas.
    const completedTasks = tasks.filter((task) => task.isCompleted).length

    return (
        <Container>
            <Header>
                <div>
                    <p>Tarefas criadas</p>
                    <span>{tasksQuantity}</span>
                </div>
                <div>
                    <p className='textPurple'>Concluídas</p>
                    <span>{completedTasks} de {tasksQuantity}</span>
                </div>
            </Header>
            <List>
                {tasks.map((task) => (
                    <Task key={task.id} task={task}/>
                ))}
            </List>
            <Message />
        </Container>
    )
}


export default Tasks;