import { Container, Delete, Check, NotCheck } from './styled';
import { ITask } from '../../App';


interface Props {
    task: ITask;
}

const Task = ({task}: Props) => {
    return (
        <Container>
                {
                    task.isCompleted ? 
                        <Check onClick={() => alert('false')}/>
                        :
                        <NotCheck onClick={() => alert('true')}/>
                }

            <p>{task.subject}</p>

            <Delete onClick={() => alert('Deletado')}/>
        </Container>
    )
}


export default Task;