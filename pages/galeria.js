import GaleriaLayout from "../components/layout/galeria.layout";
import { Fade } from "react-awesome-reveal";
import Head from 'next/head'

export default function Galeria() {
    return (
      <div>
         <Head>
        <title>GALERIA</title>
        </Head>
        <Fade cascade triggerOnce>
          <GaleriaLayout/>
        </Fade>  
      </div>
    )
  }