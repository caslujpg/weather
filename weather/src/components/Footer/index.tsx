import brazilImg from '../../assets/brazil.svg'
import usaImg from '../../assets/usa.svg'
import spainImg from '../../assets/spain.svg'

import { Container } from './styles'
import { useLanguage } from '../../context/languageContext'

const selectedLanguage = {
    "pt_br": "Idioma selecionado",
    "en": "Selected language",
    "sp": "Idioma seleccionado"
  }

export function Footer() {

    const {handleChangeLanguage, longLanguage, language} = useLanguage();

    return(
        <Container>
            <section className="languageImg">
                    <img 
                        className="hover"
                        onClick={()=>handleChangeLanguage("pt_br")} 
                        src={brazilImg} alt="brazil"
                    />
                    <img 
                        className="hover"
                        onClick={()=>handleChangeLanguage("en")} 
                        src={usaImg} alt="usa"/>
                    <img 
                        className="hover"
                        onClick={()=>handleChangeLanguage("sp")} 
                        src={spainImg} alt="spain"
                    />  
            </section>

            <section className="languageText">
                   <p>{selectedLanguage[language]}: {longLanguage}</p>
            </section>            
        </Container>
    );
}