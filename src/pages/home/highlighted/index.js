import React, { useState, useEffect } from "react";
import * as S from "./styles";
/**
 * react-responsive-carousel
 */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/**
 * Images and Icons
 */
import product from "images/product-outriders.png";
import highlightedIcon from "images/icons/highlighted-icon.png";
import nextArrow from "images/icons/angle-right-solid.png";
import prevArrow from "images/icons/angle-left-solid.png";

const Highlighted = () => {
  const prod = [
    {
      id: 1,
      title: "Outriders",
      price: 200,
      thumbnail: "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
    },
    {
      id: 2,
      title: "Others",
      price: 100,
      thumbnail:
        "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
  ];

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(prod);
  }, []);

  const Next = (props) => {
    const { style, className, onClick } = props;
    return (
      <S.NextArrow
        className={className}
        style={{ ...style }}
        src={nextArrow}
        onClick={onClick}
      />
    );
  };

  const Prev = (props) => {
    const { style, className, onClick } = props;
    return (
      <S.PrevArrow
        className={className}
        style={{ ...style }}
        src={prevArrow}
        onClick={onClick}
      />
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Next />,
    prevArrow: <Prev />,
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
              <S.CardHeader>
                <img src={product} alt="" />
              </S.CardHeader>
              <S.CardFooter>
                <S.CardTitle>Title</S.CardTitle>
                <S.CardPrice>R$ 200,00</S.CardPrice>
                <S.CardButton>Comprar</S.CardButton>
              </S.CardFooter>
            </S.Card>
          </S.CardContainer>

          <S.Card>
            <S.CardHeader>
              <h3>Image 02</h3>
            </S.CardHeader>
            <S.CardFooter>Footer</S.CardFooter>
          </S.Card>
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
