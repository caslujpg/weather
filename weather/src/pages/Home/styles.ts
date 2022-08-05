import styled from 'styled-components';

export const Container = styled.div`
    background: red;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 24px;

    .inputSearch {
        width: 100%;
        max-width: 710px;
        height: 50px;
        background: rgba(255, 255, 255, 0.77);
        border-radius: 10px;
        outline: none;
        border: none;
        padding-left: 15px;
        color: #6AA2D1;
        font-size: 20px;

        ::placeholder {
            color: #6AA2D1;
        }
    }
`;