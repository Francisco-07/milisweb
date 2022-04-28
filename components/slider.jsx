// librerias
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/autoplay'
// next
import Image from 'next/image'
// variables
import variables from "./variables"
// component
import Button from './button';
// markdown
import { attributes, react as SliderData } from '../content/slider.md';



function Slider() {
    let { sliderdata } = attributes;
    SwiperCore.use([Autoplay])
    return (
      <>
      <SliderData />
      <Container>
      <SliderCenter>
      <SliderContainer>
        <Title>MAS VENDIDOS</Title>
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {sliderdata.map((image) => (
                      <SwiperSlide key={image.id}><Size><ImageFill priority="true" layout="fill" src={image.image} loading="eager" alt={image.title} /></Size></SwiperSlide>
                ))}
        </Swiper>
        <BtnFlex >
            <Button></Button>
            </BtnFlex>
        </SliderContainer>
        </SliderCenter>
        </Container>
        
        </>
      );
    
}

export default Slider;


const SliderContainer = styled.div`
    width: 500px;
    height: 100%;
    @media (max-width: 788px) {
      width: 100vw;
    }
`

const SliderCenter = styled.div`
    width: 100vw;
    display: flex;
    padding: 80px;
    justify-content: center;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    background: ${variables.colors.tertiary};
    margin-top: 50px;
`

const Size = styled.div`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    border-radius: ${variables.borderRadius.radius};
    & img {
    object-fit: cover;
    border-radius: ${variables.borderRadius.radius};
    }
    @media (max-width: 788px) {
      width: 100vw;
      height: 75vh;
    }
`

const Title = styled.h2`
    text-align: center;
    font-family: 'Tourney';
    color: #FFF;
    font-size: 35px;
    margin-top: -45px;
`
const BtnFlex = styled.div `
    display: flex;
    justify-content: center;
    margin-top: 85px;
`

const ImageFill = styled(Image)`
width: 100%;
height: 100%;
position: relative !important;
object-fit: cover;
`