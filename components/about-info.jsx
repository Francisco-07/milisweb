// librerias
import styled from "styled-components"
// variables
import variables from "./variables"
// markdown
import { attributes, react as About } from '../content/about.md';
import Navbar from "./navbar";

function AboutInfo() {
    let { titulo1, texto1, imagen1, titulo2, texto2, imagen2, titulo3, texto3, imagen3 } = attributes;
    return(
        <>
        <About/>
        <Container>
            <Flex>
            <div>
                <H2>{titulo1}</H2>
                <P>{texto1}</P>
            </div>
            <div>
                <Img src={imagen1} alt="asd" />
            </div>
            </Flex>
            <Flex>
            <SwapImg>
                <Img src={imagen2} alt="asd" />
            </SwapImg>
            <div>
                <H2>{titulo2}</H2>
                <P>{texto2}</P>
            </div>
            </Flex>
            
            <Flex>
            <div>
                <H2>{titulo3}</H2>
                <P>{texto3}</P>
            </div>
            <div>
                <Img src={imagen3} alt="asd" />
            </div>
            </Flex>
        </Container>
        </>
    )
}


export default AboutInfo;

const Flex = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
@media (max-width: 900px) {
    flex-direction:column;
    }
`

const Container = styled.div`
    margin-top: 25px;
    @media (max-width: 900px) {
        margin-top: 105px;
        }
`

const P = styled.p`
    text-align: center;
    width: 40vw;
    @media (max-width: 900px) {
        width: 90vw;
        }
`
const H2 = styled.h2`
    text-align: center;
`

const Img = styled.img`
    width: 40vw;
    height: 400px;
    object-fit: cover;
    box-shadow: ${variables.boxShadow.primary};
    border-radius: 3px;
    @media (max-width: 900px) {
        width: 90vw;
        }
`
const SwapImg = styled.div`
    @media (max-width: 900px) {
        order: 3;
     }
`