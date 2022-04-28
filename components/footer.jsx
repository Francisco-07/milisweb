// librerias
import styled from 'styled-components';
import { FaInstagramSquare } from 'react-icons/fa';
import { Fade, Slide } from "react-awesome-reveal"
import { MdKeyboardArrowRight } from 'react-icons/md';
// variables
import variables from "./variables"



function Footer() {
    return (
        <>
        <Fade triggerOnce>
            <Container>
                <FooterWrapper>
                    <FooterInfo>
                        <Slide delay={500} triggerOnce>
                        <FooterBrand>GILA</FooterBrand>
                        </Slide>
                    </FooterInfo>
                    <FooterInfo>
                        <FooterTitles>QUE HACEMOS?</FooterTitles>
                        <P>Sublimados y estampados, diseños personalizados en artículos de alta calidad.</P>
                    </FooterInfo>
                    <FooterInfo>
                        <FooterTitles>CONTACTO</FooterTitles>
                        <Redes>Envianos tus consultas al MD<a target="_blank" rel="noreferrer" href="https://www.instagram.com/gilanotok/"><FaInstagramSquare /></a></Redes>                   
                    </FooterInfo>
                </FooterWrapper>
            </Container>
            <Author id="Contacto">Desarrollo<a target="_blank" rel="noreferrer" href="https://github.com/Francisco-07"> <MdKeyboardArrowRight/> Francisco Garciarena</a></Author>
            </Fade>
        </>
    )
};


export default Footer;


const Container = styled.div`
    background: ${variables.colors.primary};
    @media (max-width: 788px) {
        border-radius: 0;
      }
`
const FooterWrapper = styled.div`
    display:flex;
    @media (max-width: 918px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
`

const P = styled.p`
    text-align: center;
`


const FooterInfo = styled.div`
    padding: 15px;
    width: 33%;
    text-align: center;
    @media (max-width: 918px) {
        width: 100%;
    }
`
const FooterBrand = styled.h1`
    padding: 25px;
    border-left: 3px solid ${variables.colors.tertiary};
    border-bottom: 3px solid ${variables.colors.tertiary};
    display: inline-block;
`
const FooterTitles = styled.h2`
padding-bottom: 20px;
border-bottom: 2px solid ${variables.colors.tertiary};
text-align: center;
`

const Author = styled.p`
    padding:20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${variables.colors.primary};
    margin-top: 0px;
    border-top: 2px solid ${variables.colors.tertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    & a {
        display: flex;
        align-items: center;
        &:hover {
            color: white;
    }
    & svg {
        cursor: pointer;
        margin-left: 2px;
        margin-right: 2px;
        font-size: 25px;
      }
    }
    @media (max-width: 918px) {
        text-align: center;
    }
    @media (max-width: 788px) {
        border-radius: 0;
      }
`

const Redes = styled.p`
font-size: 20px;
color: ${variables.colors.tertiary};
display: flex;
justify-content: center;
align-items: center;
& a {
    display: flex;
    align-items: center;
}

& svg {
    cursor: pointer;
    opacity: 0.80;
    margin-left: 15px;
    font-size: 35px;
  }
  & svg:hover {
    opacity: 1;
}
@media (max-width: 918px) {
    justify-content: center;
    flex-direction: column;
    & svg {
        cursor: pointer;
        opacity: 0.80;
        margin-left: 0;
        margin-top: 15px;
        font-size: 45px;
      }
}
`