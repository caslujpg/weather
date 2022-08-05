import styled from 'styled-components';
import { Switch } from '../Switch';

export const Container = styled.header`
    width: 100%;
    padding: 50px 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const BackButton = styled.button`
    border: none;
    background: transparent;
    margin-left: 20px;
    margin-top: 20px;
    
`;

export const SwitchContainer = styled(Switch)`
    margin-left: auto;
`;