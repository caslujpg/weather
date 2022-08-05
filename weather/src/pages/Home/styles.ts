import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    
`

export const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 24px;

    > h1 {
        text-align:center
    }
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
`