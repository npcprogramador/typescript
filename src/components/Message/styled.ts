import styled from "styled-components";
import { ContentPaste } from '@styled-icons/material/ContentPaste';


export const Container = styled.div`
    color: var(--gray-300);
    width: 100%;
    border-top: 1px solid var(--gray-300);
    margin-top: 1.875rem;
    margin-bottom: 1.875rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        font-size: 0.875rem;
        line-height: 1.18rem;
    }
`;


export const ListIcon = styled(ContentPaste)`
    width: 3.5rem;
    margin:1.875rem;
`;