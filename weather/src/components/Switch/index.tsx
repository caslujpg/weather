import { useEffect } from "react";
import { useState } from "react";
import * as Styled from "./styles";

type SwitchProps = {
    onChange(): void;
    isChecked?: boolean;
    labelLeft?: string;
    labelRight?: string;
}

export function Switch({ onChange, isChecked = false, labelRight, labelLeft }: SwitchProps) {
    const [checked, setChecked] = useState(isChecked);

    const handleChange = () => {
        setChecked(prevChecked => !prevChecked);
        onChange();
    }

    useEffect(() => {
        setChecked(isChecked);
    }, [isChecked])

    return (
        <Styled.Container onClick={handleChange}>
            <Styled.Label>{labelLeft}</Styled.Label>
            <Styled.Switch checked={checked}>
                <Styled.Indicator checked={checked} />
            </Styled.Switch>
            <Styled.Label>{labelRight}</Styled.Label>
        </Styled.Container>
    )
}