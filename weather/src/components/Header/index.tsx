import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
                °F<button type="button"></button>°C
            </Content>
        </Container>
    );
}