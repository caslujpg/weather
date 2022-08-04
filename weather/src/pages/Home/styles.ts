import styled from 'styled-components';

export const Container = styled.div`
    .divInputSearch{
        position: absolute;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .inputSearch{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 710px;
        height: 50px;
        background: rgba(255, 255, 255, 0.77);
        border-radius: 10px;
        border: 0;
        outline: none;
        padding-left: 10px;
        font-size: 20px;
    }

    .divReactGooglePlacesSuggest{
        width: 710px;
    }

    .inputSearch::placeholder{
        color: #6AA2D1;
    }
`;