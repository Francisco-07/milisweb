// librerias
import { MdKeyboardArrowRight } from 'react-icons/md';
import styled from 'styled-components';
// next
import Link from 'next/link'
// variables
import variables from "./variables"


function Button() {
    return (
        <Link href="/galeria"> 
        <a>
            <Btn >Visita nuestra galeria<MdKeyboardArrowRight size={30}/>
            </Btn>
        </a>
        </Link>
    )
}

export default Button;


const Btn = styled.button`
    background: #e6e8e6;
    border-radius: ${variables.borderRadius.radius};
    font-size: 20px;
    color: ${variables.colors.tertiary};
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    border: 2px solid transparent;
    cursor: pointer;
    & :hover {
        background-color: ${variables.colors.tertiary};
        color: ${variables.colors.secondary};
        transition: all 0.5s;
        border: 2px solid white;
    }
`