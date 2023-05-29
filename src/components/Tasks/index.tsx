import { Container, Header, List } from './styled';
import Task from '../Task';
import Message from '../Message';
import { ITask } from '../../App';


interface Props {
    tasks: ITask[];
    // defide o valor de taskId como string, ao mesmo tempo que indica que nada vai retornar por enquanto, assim como um const vazia para receber valor depois.
    onDelete: (taskId: string) => void;
    onComplete: (taskId: string) => void;
}


const Tasks = ({ tasks, onDelete, onComplete }: Props) => {
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
                    <Task
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onComplete={onComplete}
                    />
                ))}
            </List>
            {tasks.length <= 0 && (
                <Message />
            )}
        </Container>
    )
}


export default Tasks;