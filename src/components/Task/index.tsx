import { Container, Delete, Check, NotCheck } from './styled';
import { ITask } from '../../App';


interface Props {
    task: ITask;
    onDelete: (taskId: string) => void;
    onComplete:  (taskId: string) => void;
}

const Task = ({task, onDelete, onComplete}: Props) => {
    return (
        <Container>
                {
                    task.isCompleted ? 
                        <Check onClick={() => onComplete(task.id)}/>
                        :
                        <NotCheck onClick={() => onComplete(task.id)}/>
                }

            <p className={task.isCompleted ? "textCompleted" : ""}>{task.subject}</p>

            <Delete onClick={() => onDelete(task.id)}/>
        </Container>
    )
}


export default Task;