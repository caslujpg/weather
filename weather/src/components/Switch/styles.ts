import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    justify-self: baseline;
`
type SwitchProps = {
    checked: boolean;
}

export const Switch = styled.div<SwitchProps>`
    width: 50px;
    height: 30px;
    background: ${({checked}) => checked ? "#D2B3C1" : "rgba(28, 36, 40, 0.49)"};
    transition: background .4s;
    border-radius: 15px;
    padding: 5px;
`

type IndicatorProps = {
    checked: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
    width: 20px;
    height: 20px;
    background: #D9D9D9;
    border-radius: 50%;
    transition: transform .4s;
    transform: ${({checked}) => `translateX(${checked ? "100%" : 0})`};
`
export const Label = styled.span`
    color: #D9D9D9;
`