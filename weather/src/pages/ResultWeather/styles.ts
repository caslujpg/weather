import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;

    > h2 {
        font-size: 43px;
        font-weight: 700;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    .description {
        font-size: 20px;
        margin-bottom: 5px;
        color: #fff;
    }

    .currentTemp {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        color: #fff;

        .currentTempValue {
            font-size: 64px;
            color: #fff;
        }
    }

    .minMax {
        font-size: 20px;
        margin-bottom: 20px;
        color: #fff;
    }

    .nextWeather {
        color: #fff;
    }
`;