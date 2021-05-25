import { useState, useEffect } from "react";
import * as S from "./styles";
/**
 * react-responsive-carousel
 */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

/**
 * Images and Icons
 */
import product from "images/product-outriders.png";
import highlightedIcon from "images/icons/highlighted-icon.png";
import nextArrow from "images/icons/angle-right-solid.png";
import prevArrow from "images/icons/angle-left-solid.png";

const Highlighted = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    return setImages([
      "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
      "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    ]);
  }, []);

  const settings = {
    nextArrow: <S.NextArrow src={nextArrow} />,
    prevArrow: <S.PrevArrow src={prevArrow} />,
    responsive: [],
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Icon src={highlightedIcon} alt="highlighted-icon" />
        <S.Title>Produtos em destaque</S.Title>
      </S.TitleContainer>
      <S.SliderContainer>
        <Slider {...settings}>
          <div>
            <img src={product} />
          </div>
          <div>
            <img src={product} />
          </div>
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
