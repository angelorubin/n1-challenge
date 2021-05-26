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
  width: 70%;
  padding: 10px;
`;

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  flex: 2;
`;
export const CardFooter = styled.div`
  flex: 1;
  background: #f5f5f5;
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
export const CardButton = styled.button``;

export const NextArrow = styled.img`
  height: 20px;
  width: 20px;
`;
export const PrevArrow = styled.img``;
