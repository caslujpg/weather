import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
`;

export const InputSuggestContainer = styled.div`
    width: 100%;
    max-width: 710px;

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
        margin: 26px auto 0;

        ::placeholder {
            color: #6AA2D1;
        }
    }
`;