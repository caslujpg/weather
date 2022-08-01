import styled from 'styled-components';

export const Container = styled.header`
`;

export const Content = styled.div`
    position: absolute;
    width: 95px;
    height: 30px;
    right: 50px;
    top: 50px;
    color: #d9d9d9;

    button {

        transition: filter 0.2s;

        &:hover {
            filter: brightness (0.9);
        }
    }
`;