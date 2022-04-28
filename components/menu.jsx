// libraries
import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi'; 
import { ImCross } from 'react-icons/im'; 
import { IconContext } from "react-icons";
// next 
import Link from 'next/link'
// components
import Hero from "./hero";
// markdown
import { attributes, react as Bg} from '../content/background.md';


const Navbar3 = () => {
  let { backgroundImage } = attributes;
  const [isOpen, setIsOpen] = useState(false);
  
  return (
      <div>
    <div>
    <Bg/>
    <Nav>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? (
          <IconContext.Provider value={{  size: '25px' }}>
        <ImCross/>
        </IconContext.Provider>
        ) :
        (
          <IconContext.Provider value={{  size: '35px' }}>
          <GiHamburgerMenu/>
          </IconContext.Provider>
          ) }
      </Hamburger>
      
    </Nav>
    </div>
    <div>
    <Menu isOpen={isOpen}>
    <Link href="/galeria" activeClassName="active" activeStyle={{fontWeight: "bold"}}>GALERIA</Link>
    <Link href="#Contacto">CONTACTO</Link>
    <Link href="/about">SOBRE NOSOTROS</Link>
  </Menu>
  </div>
  </div>
  );
};


export default Navbar3;


const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  left: 0;
  right: 0;
  @media (max-width: 788px) {
    border-radius: 0;
  }
`;


const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  
  & a {
    margin-right: 35px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    border-right: 2px solid transparent;
    padding-right: 20px;;
    opacity: 0.8;
  
    &:hover {
      color: white;
      border-right: 2px solid white;
      opacity: 1;
    }
  }

  @media (max-width: 808px) {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 999;
    overflow: visible;
    background: ${({ isOpen }) => (isOpen ? "red" : "#111111")};
    left: ${({ isOpen }) => (isOpen ? "50%" : "-100%")};
    transition:  1s ease-in-out;
    width: 100vw;
    height: 100vh;
    & a {
      margin-bottom: 25px;
      border-right: none;
      }
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  padding: 0 2rem;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  z-index: 1999;

  & svg {
    color: #fff;
  }
 
  @media (max-width: 808px) {
    display: flex;
  }
`;


