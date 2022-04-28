// components
import Coleccion from './coleccion';
// librerias
import { FaTshirt } from 'react-icons/fa';
import { GiBilledCap } from 'react-icons/gi';
import { ImMug } from 'react-icons/im';
import { AiOutlineAppstore } from 'react-icons/ai';
import { VscSymbolMisc } from 'react-icons/vsc';
import { IconContext } from "react-icons";
import styled from 'styled-components';
// hooks
import React, { useState } from "react";


function Filter() {
    const [show, setShow] = useState(1);

    return (
        <>
            <Icons >
            <IconContext.Provider value={{  size: 30}} >
                <AiOutlineAppstore onClick={() =>setShow(1)} 
                    style={{ opacity: show != 1 ? 0.5 : 1 }}/>
                <FaTshirt onClick={() =>setShow(2)} 
                    style={{ opacity: show != 2 ? 0.5 : 1 }}/>
                <GiBilledCap onClick={() =>setShow(3)} 
                    style={{ opacity: show != 3 ? 0.5 : 1 }}/>
                <ImMug onClick={() =>setShow(4)} 
                    style={{ opacity: show != 4 ? 0.5 : 1 }}/>
            </IconContext.Provider>
            </Icons>
            <Coleccion show={show}/>
        </>
    )
}

export default Filter;

const Icons = styled.div`
    display: flex;
    justify-content: start;
    gap: 20px;
    margin-top: 20px;
    margin-left: 15px;
    & svg {
        cursor: pointer;
    }
    & svg:hover {
        opacity: 1!important;
    }
    @media (max-width: 900px) {
        margin-top: 110px;
        }
`
