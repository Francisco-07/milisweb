// components
import Slider from "./slider";
// librerias
import styled from "styled-components"
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion"
// markdown
import { attributes, react as Featured } from '../content/featured.md';
// variables
import variables from "./variables"


function Cards() {
    let { featured } = attributes;
    return (
        <>
            <Featured />
            <Container>
            <Fade triggerOnce>
            <Title>DESTACADOS</Title>
            </Fade>
            <Fade delay={300} triggerOnce >
            <CardWrapper >
                {
                    featured.map((card) => (
                        <AnimatePresence key={card.id}>
                        <Card>
                            <ImgOverflow>
                            <ImgSize 
                            as={motion.img} 
                            initial={{ opacity: 0.75 }}
                            whileHover={{  opacity:1
                             }}
                            transition={{ duration: 0.2 }}
                            src={card.image}
                            alt={card.title}  />
                            </ImgOverflow>
                            <ImgTitle>{card.title}</ImgTitle>
                        </Card>
                        </AnimatePresence>
                    ))
                }
            </CardWrapper>
            </Fade>
            <Fade duration={1500} triggerOnce >
            <Slider/>
            </Fade>
            </Container>
        </>
    )
}

export default Cards;


const CardWrapper = styled.div`
    display:flex;
    justify-content: space-evenly;
    @media (max-width: 1068px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Card = styled.div`
    width: 28vw;
    object-fit:cover;
    margin-top: 25px;
    box-shadow: ${variables.boxShadow.primary};
    background: ${variables.colors.tertiary};
    border-radius: ${variables.borderRadius.radius};
    @media (max-width: 1068px) {
        width: 40vw;
    }
    @media (max-width: 788px) {
        width: 85vw;
    }
`
const ImgOverflow = styled.div`
    overflow: hidden;
    width: 28vw;    
    height: 70vh;
    @media (max-width: 1068px) {
        width: 40vw;
        height: 55vh;
    }
    @media (max-width: 788px) {
        width: 85vw;
    }
`

const ImgSize = styled.img`
    width: 28vw;    
    height: 70vh;
    cursor: pointer;
    border-top-left-radius: ${variables.borderRadius.radius};
    border-top-right-radius: ${variables.borderRadius.radius};
    object-fit: cover;
    @media (max-width: 1068px) {
        width: 40vw;
        height: 55vh;
    }
    @media (max-width: 788px) {
        width: 85vw;
    }
`
const Container = styled.div`
    background-color:${variables.colors.primary};
    padding-top: 2px;
    @media (max-width: 788px) {
        border-radius: 0;
      }
`


const ImgTitle = styled.p`
    text-align: center;
    color: ${variables.colors.secondary};
`
const Title = styled.h2`
    text-align: center;
    font-size: 40px;
    margin-top: 55px;
`

