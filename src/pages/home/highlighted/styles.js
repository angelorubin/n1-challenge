import styled from "styled-components";
import Slider from "react-slick";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 90%;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #084154;
`;

/**
 * Slider
 */

export const SliderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  & > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  border: 2px dashed red;
`;

export const Card = styled.div`
  padding: 10px;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const CardImage = styled.img``;

export const CardFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #084154;
`;
export const CardPrice = styled.h3``;
export const CardDescription = styled.h4``;

export const NextArrow = styled.img``;
export const PrevArrow = styled.img``;
