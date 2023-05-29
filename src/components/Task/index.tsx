import { Container, Delete, Check, NotCheck } from './styled';
import { ITask } from '../../App';


interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
}

const Task = ({task, onDelete}: Props) => {
    return (
        <Container>
                {
                    task.isCompleted ? 
                        <Check onClick={() => alert('false')}/>
                        :
                        <NotCheck onClick={() => alert('true')}/>
                }

            <p>{task.subject}</p>

            <Delete onClick={() => onDelete(task.id)}/>
        </Container>
    )
}


export default Task;