import { useState } from 'react';
import { Container, Delete, Check, NotCheck } from './styled';


const Task = () => {
    const [isCheck, setIsCheck] =  useState(false)


    return (
        <Container>
                {
                    isCheck ? 
                        <Check onClick={() => setIsCheck(false)}/>
                        :
                        <NotCheck onClick={() => setIsCheck(true)}/>
                }

            <p>Integrando sistema de notas na nossa parte superior de coluna</p>

            <Delete />
        </Container>
    )
}


export default Task;