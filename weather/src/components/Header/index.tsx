import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                <input id="switch-shadow" className="switch switch--shadow" type="checkbox" />
                °F<label htmlFor="switch-shadow"></label>°C
            </Content>
        </Container>
    );
}