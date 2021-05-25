import { useState } from "react";
import * as S from "./styles";
/**
 * Slick
 */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/**
 * Images and Icons
 */
import product from "images/product-outriders.png";
import highlightedIcon from "images/icons/highlighted-icon.png";

const Highlighted = () => {
  const [images, setImages] = useState([product]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Icon src={highlightedIcon} alt="highlighted-icon" />
        <S.Title>Produtos em destaque</S.Title>
      </S.TitleContainer>
      <S.SliderContainer>
        <Slider {...settings}>
          <S.CardContainer>
            <S.Card>
              <S.CardImage src={images} alt="image" />
              <S.CardFooter>Footer</S.CardFooter>
            </S.Card>
          </S.CardContainer>
        </Slider>
      </S.SliderContainer>
    </S.Container>
  );
};

/**
 *  {images.map((image) => {
      return <S.CardImage src={image} alt="image" />;
    })}
 */

export default Highlighted;
