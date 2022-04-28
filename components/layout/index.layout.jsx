// components
import Hero from "../hero";
import Cards from "../card";
import Triangulo from "../triangulo";
import Footer from "../footer";
import Navbar from "../navbar";

function IndexLayout() {
    return (
        <>
    <Navbar/>
    <Hero />
    <Triangulo/>
    <Cards/>
    <Footer/>
        </>
    )
}

export default IndexLayout;