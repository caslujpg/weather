import styled from "styled-components";

export const Title = styled.h1`
    font-weight: 700;
    font-size: 43px;
    color: #fff;
    @media(max-width: 560px){
        font-size: 29px;
    }
`;

export const SubTitle = styled.span`
    font-size: 20px;
    margin-bottom: 90px;
    color: #fff;
    @media(max-width: 560px){
        font-size: 14px;
    }
`;

export const ForecastCard = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 15px;
`;

export const ForecastDate = styled.span`
    margin-right: 33px;
    font-weight: 700;
    font-size: 20px;
    color: #fff;
    @media(max-width: 768px){
        font-size: 12px;
        margin-right: 10px;
    }
`;

export const ForecastIcon = styled.img`
    margin-right: 45px;
    width: 40px;
    height: 40px;
    @media(max-width: 768px){
        margin-right: 10px;
    }
`;

export const ForecastMin = styled.span`
    margin-right: 20px;
    font-size: 16px;
    color: #fff;
    @media(max-width: 768px){
        font-size: 12px;
        margin-right: 10px;
    }
`;

export const ForecastGradient = styled.span`
    width: 176px;
    height: 4px;
    margin-right: 20px;
    background: linear-gradient(90deg, rgba(181,198,155,1) 53%, rgba(224,151,42,1) 100%);

    @media(max-width: 768px){
        margin-right: 10px;
    } 

    @media(max-width: 560px){
        margin-right: 10px;
        width: 96px;
    }
`;

export const ForecastMax = styled.span`
    margin-right: 40px;
    font-size: 16px;
    color: #fff;
    @media(max-width: 768px){
        font-size: 12px;
        margin-right: 0;
    }
`;

export const ForecastDescription = styled.span`
    font-size: 16px;
    color: #fff;
    display: unset;
    @media(max-width: 768px){
        display: none;
    }
`;
