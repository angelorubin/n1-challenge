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
  display: flex;
  width: 100%;
  justify-content: center;
  border: 1px solid black;
`;

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid red;
  margin-top: 30px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 20px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

export const CardFooter = styled.div`
  display: flex;
`;

export const CardImage = styled.img``;
