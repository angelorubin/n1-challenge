import styled from "styled-components";

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

export const SliderContainer = styled.div`
  width: 80%;
`;

export const CardContainer = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 15px 7px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  margin: 1rem;
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const CardHeader = styled.div`
  flex: 2;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f5f5f5;
  width: 100%;
  height: 140px;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

export const CardImage = styled.img`
  height: 244px;
  width: 236px;
`;

export const CardTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #084154;
`;
export const CardPrice = styled.h3``;

export const CardButton = styled.button`
  width: 162.17px;
  height: 35.14px;
  background: #3ec6e0;
  border-radius: 5px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 1px;
  color: #ffffff;
`;

export const NextArrow = styled.img``;
export const PrevArrow = styled.img``;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  background-color: black;
  position: absolute;
  z-index: 10;
  top: 0;
  display: ${({ overlayDisplay }) =>
    overlayDisplay ? overlayDisplay : "none"};
`;

export const OrderSuccessfullyPlacedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  z-index: 11;
  top: 0;
  background: rgba(8, 65, 84, 0.62);
  display: ${({ orderDisplay }) => (orderDisplay ? orderDisplay : "none")};
`;

export const OrderSuccessfullyPlaced = styled.div`
  background: #ffffff;
  border-radius: 5px;
  margin: 15px;
  width: 344;
  height: 500;
`;

export const OrderIcon = styled.img`
  height: 20px;
`;

export const OrderText = styled.h1`
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  color: #084154;
`;

export const OrderImage = styled.img``;
