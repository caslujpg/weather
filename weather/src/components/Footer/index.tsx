import brazilImg from '../../assets/brazil.svg'
import usaImg from '../../assets/usa.svg'
import spainImg from '../../assets/spain.svg'

import { Container } from './styles'

export function Footer() {
    return(
        <Container>

            <section className="lenguageText">
                <div>
                   <p>Idioma selecionado:</p>
                </div>
                <div>
                    <p>Português</p>
                </div>
            </section>

            <section className="lenguageImg">
                <div>
                    <img src={brazilImg} alt="brazil"/>
                    <img src={usaImg} alt="usa"/>
                    <img src={spainImg} alt="spain"/>
                </div>
            </section>

        </Container>
    );
}