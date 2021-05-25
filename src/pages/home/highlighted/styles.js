import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: 100%;
  min-height: 10vh;
  border: 1px dashed red;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  background: #ffffff;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const CardImage = styled.img`
  height: 100px;
  width: 100px;
`;

export const CardFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardTitle = styled.h1``;
export const CardPrice = styled.h3``;
export const CardDescription = styled.h4``;

export const NextArrow = styled.img``;
export const PrevArrow = styled.img``;
