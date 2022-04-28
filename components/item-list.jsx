// librerias
import styled from 'styled-components';
// markdown
import { attributes, react as ProductsList } from '../content/products-list.md';


function ItemList() {
    let { images, title } = attributes;
    return (
        <>
        <ProductTitle>{title}</ProductTitle>
            <ProductsList />
            <ItemGrid>
                {images.map((image) => (
                    <div key={image.id}>
                        <ImgSize src={image.image} alt={image.alt} />
                        <ImgTitle>{image.title}</ImgTitle>
                    </div>
                ))}
            </ItemGrid>
        </>
    )
}


export default ItemList;


const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    justify-items: center;
`
const ImgSize = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.59);
`
const ImgTitle = styled.h4`
    text-align: center;
`
const ProductTitle = styled.h1`
    text-align: center;
`