import { Fade } from "react-awesome-reveal";
import Head from 'next/head'
import AboutLayout from "../components/layout/about.layout";

export default function About() {
    return (
      <div>
      <Head>
        <title>SOBRE NOSOTROS</title>
      </Head>
      <Fade triggerOnce>
        <AboutLayout/>
      </Fade>
      </div>
    )
  }
  