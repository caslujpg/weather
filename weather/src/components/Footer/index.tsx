import brazilImg from '../../assets/brazil.svg'
import usaImg from '../../assets/usa.svg'
import spainImg from '../../assets/spain.svg'

import { Container } from './styles'
import { useLanguage } from '../../context/languageContext'

export function Footer() {

    const {setLanguage, language} = useLanguage();

    return(
        <Container>
            <section className="languageImg">
                    <img 
                        className="hover"
                        onClick={()=>setLanguage("pt_br")} 
                        src={brazilImg} alt="brazil"
                    />
                    <img 
                        className="hover"
                        onClick={()=>setLanguage("en")} 
                        src={usaImg} alt="usa"/>
                    <img 
                        className="hover"
                        onClick={()=>setLanguage("sp")} 
                        src={spainImg} alt="spain"
                    />  
            </section>

            <section className="languageText">
                   <p>Idioma selecionado: {language}</p>
            </section>            
        </Container>
    );
}