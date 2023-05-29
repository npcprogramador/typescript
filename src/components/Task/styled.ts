import styled from "styled-components";
import {DeleteForever} from '@styled-icons/material/DeleteForever';


export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: var(--gray-500);
    border: 1px solid var(--gray-400);
    padding: 1rem;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;

    p {
        font-size: 0.875rem;
        line-height: 1.18rem;
        color: var(--gray-100);
        margin-right: auto;
    }

    p.textCompleted {
        color: var(--gray-300);
        text-decoration: line-through;
    }
`;

export const Delete = styled(DeleteForever)`
    width: 1.75rem;
    height: 1.75rem;
    cursor: pointer;
    transition: 0.2s color ease-in-out;
    &:hover {
        color: var(--danger);
    }
`;

export const Check = styled.button`
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: 2px solid var(--blue-dark);
    border-radius: 50%;
    position: relative;

    &::after {
        content: ' ';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--blue-dark);
        top: calc(50% - 5px);
        left: calc(50% - 5px);
    }
`;

export const NotCheck = styled.button`
    width: 18px;
    height: 18px;
    background-color: transparent;
    border: 2px solid var(--blue-dark);
    border-radius: 50%;
`;