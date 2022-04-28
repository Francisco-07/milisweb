import IndexLayout from "../components/layout/index.layout";
import { Fade } from "react-awesome-reveal";
import Head from 'next/head'

export default function Home() {
  return (
    <div>
       <Head>
        <title>GILA</title>
        </Head>
      <Fade triggerOnce>
      <IndexLayout/>
      </Fade>
    </div>
  )
}

