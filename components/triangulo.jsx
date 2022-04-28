// librerias
import styled from 'styled-components';
// variables
import variables from './variables';

function Triangulo() {
    return (
        <Flex>
            <TrianguloBorder/>
        </Flex>
    )
}

export default Triangulo;

const Flex = styled.div`
    display:flex;
    justify-content: center;
    background-color: ${variables.colors.primary};
    
`

const TrianguloBorder = styled.div`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 106px 100px 0 100px;
    border-color: #111111 transparent transparent transparent;
    @media (max-width: 788px) {
        margin-top: -15px;
      }
`