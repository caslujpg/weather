import { Container } from './styles'

export function Dashboard() {
    return (
        <Container>
    
            <div>
                <span>Como está o tempo hoje?</span>
            </div>
            <div>
            <input type="text" placeholder="Digite o nome da cidade"></input>
            </div>

        </Container>
    );
}