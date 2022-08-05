import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 43px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 5px;
`;

export const Description = styled.span`
    font-size: 20px;
    margin-bottom: 5px;
    color: #fff;
`;

export const CurrentTemp = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    color: #fff;

    .currentTempValue {
        font-size: 64px;
        color: #fff;
    }
`;  
    
export const MinMax = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    color: #fff;
`;

export const NextWeather = styled(Link)`
    color: #fff;
`; 