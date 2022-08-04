import brazilImg from '../../assets/brazil.svg'
import usaImg from '../../assets/usa.svg'
import spainImg from '../../assets/spain.svg'

import { Container } from './styles'
import { useState } from 'react'
import { useLenguage } from '../../context/lenguageContext'

export function Footer() {

    const {setLenguage, lenguage} = useLenguage();

    return(
        <Container>
            <section className="lenguageImg">
                    <img 
                        className="hover"
                        onClick={()=>setLenguage("Portugês")} 
                        src={brazilImg} alt="brazil"
                    />
                    <img 
                        className="hover"
                        onClick={()=>setLenguage("English")} 
                        src={usaImg} alt="usa"/>
                    <img 
                        className="hover"
                        onClick={()=>setLenguage("Spain")} 
                        src={spainImg} alt="spain"
                    />  
            </section>

            <section className="lenguageText">
                   <p>Idioma selecionado: {lenguage}</p>
            </section>            
        </Container>
    );
}