import AboutInfo from "../about-info";
import { Fade } from "react-awesome-reveal";
import Contacto from "../contacto";
import Head from 'next/head'
import Navbar from "../navbar";

function AboutLayout() {
    return (
      <>
          <Navbar/>
          <AboutInfo/>
        <Contacto/>
      </>
    )
  }
  
  export default AboutLayout;