import React, { useState, useEffect } from "react";
import * as S from "./styles";
/**
 * React Slick
 */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

/**
 * Images and Icons
 */
import prod01 from "images/product-outriders.png";
import prod02 from "images/product-cyberpunk2077.png";
import prod03 from "images/product-donkey-kong-country-tropical-freeze.png";
import highlightedIcon from "images/icons/highlighted-icon.png";
import nextArrow from "images/icons/angle-right-solid.png";
import prevArrow from "images/icons/angle-left-solid.png";
import closeIcon from "images/icons/close-icon.png";
import mario from "images/mario.png";

const Highlighted = () => {
  const [orderDisplay, setOrderDisplay] = useState("none");
  const [products, setProducts] = useState([]);

  const prod = [
    {
      id: "&$6564RffRF&",
      title: "Outriders",
      price: 200,
      thumbnail: prod01,
    },
    {
      id: "%$55rrTFf$3",
      title: "Cyberpunk 2077",
      price: 250,
      thumbnail: prod02,
    },
    {
      id: "(*97Yu7¨%$#",
      title: "Donkey-Kong Country Tropical Freeze",
      price: 150,
      thumbnail: prod03,
    },
  ];

  useEffect(() => {
    setProducts(prod);
  }, []);

  const NextIcon = (props) => {
    const { style, className, onClick } = props;
    return (
      <S.NextArrow
        className={className}
        style={{ ...style, height: "30px" }}
        src={nextArrow}
        onClick={onClick}
      />
    );
  };

  const PrevIcon = (props) => {
    const { style, className, onClick } = props;
    return (
      <S.PrevArrow
        className={className}
        style={{ ...style, height: "30px" }}
        src={prevArrow}
        onClick={onClick}
      />
    );
  };

  /**
   * Slider Settings
   */

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    adaptiveHeight: true,
    nextArrow: <NextIcon />,
    prevArrow: <PrevIcon />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
    ],
  };

  const handleOrderClick = () => {
    setOrderDisplay(!orderDisplay);
  };

  const handleClickCardButton = (e) => {
    setOrderDisplay(!orderDisplay);
    console.log({ id: e.currentTarget.id });
  };

  return (
    <S.Container>
      <S.OrderSuccessfullyPlacedContainer
        onClick={handleOrderClick}
        orderDisplay={orderDisplay}
      >
        <S.OrderSuccessfullyPlaced>
          <S.OrderIcon src={closeIcon} />
          <S.OrderText>Pedido realizado com sucesso!</S.OrderText>
          <S.OrderImage src={mario} />
        </S.OrderSuccessfullyPlaced>
      </S.OrderSuccessfullyPlacedContainer>
      <S.TitleContainer>
        <S.Icon src={highlightedIcon} alt="highlighted-icon" />
        <S.Title>Produtos em destaque</S.Title>
      </S.TitleContainer>
      <S.SliderContainer>
        <Slider {...settings}>
          {products.map((product) => (
            <div>
              <S.CardContainer key={product.id}>
                <S.Card>
                  <S.CardHeader>
                    <S.CardImage src={product.thumbnail} alt="" />
                  </S.CardHeader>
                  <S.CardFooter>
                    <div>
                      <S.CardTitle>{product.title}</S.CardTitle>
                      <S.CardPrice>R$ {product.price}</S.CardPrice>
                    </div>
                    <S.CardButton
                      id={product.id}
                      onClick={handleClickCardButton}
                    >
                      COMPRAR
                    </S.CardButton>
                  </S.CardFooter>
                </S.Card>
              </S.CardContainer>
            </div>
          ))}
        </Slider>
      </S.SliderContainer>
    </S.Container>
  );
};

export default Highlighted;
