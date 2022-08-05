import { useState } from 'react';
import * as Styled from './styles'

import rightArrowImg from '../../assets/rightArrow.svg';
import { Switch } from '../Switch';

const thermalScaleStoragedKey = "weather:thermalScale";

type HeaderProps = {
    onChangeUnit?(): void;
    onBack?(): void;
};

export function Header({onChangeUnit, onBack}: HeaderProps) {
    const [isChecked, setIsChecked] = useState<boolean>(() => {
        const storaged = localStorage.getItem(thermalScaleStoragedKey);
        return storaged ? JSON.parse(storaged) : false;
    })

    const handleChange = () => {
        setIsChecked((prevIsChecked) => {
            localStorage.setItem(thermalScaleStoragedKey, JSON.stringify(!prevIsChecked));
            return !prevIsChecked
        });
        onChangeUnit?.();
    }

    return (
        <Styled.Container>
            <Styled.BackButton onClick={onBack}>
                <img
                    src={rightArrowImg}
                    alt="rightArrow"
                />
            </Styled.BackButton>

            <Switch 
                onChange={handleChange}
                isChecked={isChecked}
                labelLeft="°F"
                labelRight="°C"
            />
        </Styled.Container>
    );
}