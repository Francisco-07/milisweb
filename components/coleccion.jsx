// librerias
import styled from 'styled-components';
// next
import Image from 'next/image';
// variables
import variables from './variables';
// markdown
import { attributes, react as ProductsList } from '../content/productsList.md';



function Coleccion({show}) {
    let { productos } = attributes;

    const filteredGorras = productos.filter(image =>
        image.tipo.toLowerCase().includes("gorra".toLowerCase())
      );

      const filteredRemeras = productos.filter(image =>
        image.tipo.toLowerCase().includes("remera".toLowerCase())
      );

      const filteredTazas = productos.filter(image =>
        image.tipo.toLowerCase().includes("taza".toLowerCase())
      );

      const filteredVarios = productos.filter(image =>
        image.tipo.toLowerCase().includes("varios".toLowerCase())
      );
 if(show === 1) {
    return (
        <>
        <ProductsList />
            <ItemGrid>
                {productos.map((image) => (
                    <div key={image.id}>
                        <Image loading="eager" priority="true" width='500' height="500" className={image.tipo} src={image.image} alt={image.title} />
                    </div>
                ))}
            </ItemGrid>
        </>
    )
}
if(show === 2) {
    return (
        <>
        <ProductsList />
        <ItemGrid>
        {filteredRemeras.map((image) => (
            <div key={image.id}>
                <Image tipo={image.type} width='500' height="500" src={image.image} alt={image.alt} />
            </div>
        ))}
    </ItemGrid>
    </>
    )
}
if(show === 3) {
    return (
        <>
        <ProductsList />
        <ItemGrid>
        {filteredGorras.map((image) => (
            <div key={image.id}>
                <Image tipo={image.type} width='500' height="500" src={image.image} alt={image.alt} />
            </div>
        ))}
    </ItemGrid>
    </>
    )
}
if(show === 4) {
    return (
        <>
        <ProductsList />
        <ItemGrid>
        {filteredTazas.map((image) => (
            <div key={image.id}>
                <Image width='500' height="500" src={image.image} alt={image.alt} />
            </div>
        ))}
    </ItemGrid>
    </>
    )
}
}


export default Coleccion;




const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 15px;
    padding: 10px;
    gap: 10px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);      
        padding: 10px;
    }

    & img {
        object-fit: cover;
        transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        & :hover {
            transform: scale(1.1);
            transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
            border-radius: ${variables.borderRadius.radius};
        }
        }
`
