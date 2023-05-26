import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    max-width: 46rem;
    margin: 0 auto;
    margin-top: 5.625rem;
    padding: 0 1rem;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        p {
            color: var(--blue);
            font-size: 0%.875rem;
            font-weight: 700;
        }
        .textPurple {
            color: var(--purple);
        }
        span {
            background-color: var(--gray-400);
            color: var(--gray-200);
            padding: 3px 9px;
            border-radius: 999px;
            font-size: 0.75rem;
            font-weight: 700;
        }
    }
`

export const List = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 0.75rem;
    margin-top: 1.875rem;
`