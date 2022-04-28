// librerias
import styled from 'styled-components';
import { Zoom } from "react-awesome-reveal";
// variables
import variables from "./variables"


function Hero() {
    return (
        <>
        <HeroContainer>
            <Zoom cascade triggerOnce>
                <HeroTitle>GILA</HeroTitle>
                <HeroSub>ARTICULOS CUSTOM</HeroSub>
            </Zoom>
        </HeroContainer> 
        </>
        )
}


export default Hero;


const HeroContainer = styled.div`
    height: 60vh;
    display: flex;
    background: #111111;
    position: relative;
    overflow: hidden;
    align-items:center;
    justify-content: start;
    flex-direction: column;
    @media (max-width: 788px) {
        border-radius: 0;
        gap: 22px;
        margin-top: 96px;
      }
`

const HeroTitle = styled.h1`
    text-align:center;
    color: #fff;
    font-size: 140px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-family: "built titling";
    src: url("/fonts/built-titling/built-titling-sb-it.ttf");
    font-style: italic;
    font-weight: 600;
    @media (max-width: 788px) {
        font-size: 100px;
      }
`
const HeroSub = styled.h2`
    text-align:center;
    color: #fff;
    font-size: 70;
    margin-bottom: 0px;
    margin-top: 0px;
    font-family: "built titling";
    src: url("/fonts/built-titling/built-titling-sb-it.ttf");
    font-style: italic;
    font-weight: 300;
`
