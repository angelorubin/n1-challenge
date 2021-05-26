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
    const { onClick } = props;
    return <S.NextArrow src={nextArrow} onClick={onClick} />;
  };

  const Prev = (props) => {
    const { onClick } = props;
    return <S.PrevArrow src={prevArrow} onClick={onClick} />;
  };

  const settings = {
    nextArrow: <Next />,
    prevArrow: <Prev />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Icon src={highlightedIcon} alt="highlighted-icon" />
        <S.Title>Produtos em destaque</S.Title>
      </S.TitleContainer>
      <S.SliderContainer>
        <div>
          <S.Card>
            <Slider
              style={{
                display: "flex",
                "align-items": "center",
                width: "80vw",
                gap: "10px",
              }}
              {...settings}
            >
              {products &&
                products.map((data) => {
                  return <S.CardImage src={data.thumbnail} alt="image" />;
                })}
            </Slider>
          </S.Card>
        </div>
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
