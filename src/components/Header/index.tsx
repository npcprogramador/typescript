import { Container, IconAdd } from './styled';
import Logo from '../../assets/logo.svg';
import { FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void
}

const Header = ({ onAddTask }: Props) => {

    const [subject, setSubject] = useState("")

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if(subject !== '') {
            onAddTask(subject);
        } return;
        setSubject("")
    }

    return(
        <Container>
            <img src={Logo} alt="Logo" />

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={subject}
                    onChange={(value) => setSubject(value.target.value)}
                />
                <button type='submit'>
                    Criar <IconAdd />
                </button>
            </form>
        </Container>
    )
}

export default Header;