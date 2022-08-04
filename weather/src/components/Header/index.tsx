import { useState } from 'react';
import { Container, Content } from './styles'

const thermalScaleStoragedKey = "weather:thermalScale";

type HeaderProps = {
    onChangeUnit?(): void;
};

export function Header({onChangeUnit}: HeaderProps) {
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
        <Container>
            <Content>
                <input checked={isChecked} onChange={handleChange} id="switch-shadow" className="switch switch--shadow" type="checkbox" />
                °F<label htmlFor="switch-shadow"></label>°C
            </Content>
        </Container>
    );
}