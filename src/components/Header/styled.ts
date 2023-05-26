import styled from "styled-components";
import { AddCircleOutline } from "@styled-icons/material/AddCircleOutline";

// yarn config set network-timeout 600000 -g
export const Container = styled.div`
    background-color: var(--gray-700);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12.5rem;
    position: relative;

    form {
        position: absolute;
        height: 3.375rem;
        bottom: calc(-3.375rem / 2);
        width: 100%;
        max-width: 46rem;
        display: flex;
        gap: 0.5rem;
        padding: 0 1rem;

        input {
            height: 100%;
            flex: 1;
            color: var(--gray-100);
            background-color: var(--gray-500);
            border: 1px solid var(--gray-700);
            border-radius: 0.5rem;
            padding: 0 1rem;
            font-size: 1rem;

            &::placeholder {
                color: var(--gray-300);
            }
        }

        button {
            height: 100%;
            padding: 0 1rem;
            background-color: var(--blue-dark);
            color: var(--gray-100);
            border: none;
            border-radius: 0.5rem;
            display: flex;
            align-items: center;

            gap: 0.375rem;
            font-weight: 700;
            font-size: 0.875rem;
        }
    }
`;

export const IconAdd = styled(AddCircleOutline)`
    width:  1.375rem;
    height:  1.375rem;
`;