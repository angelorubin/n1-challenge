import styled from "styled-components";
import bg from "images/banner-mobile.png";

/**
 * MENU
 */
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const Menu = styled.div`
  display: flex;
  padding-top: 10px;
  align-items: flex-start;
  width: 90%;
  min-height: 222px;
  margin-top: 20px;
  @media (min-width: 100px) {
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 400px) {
  }
`;

export const Logo = styled.img`
  height: 20px;
`;

export const MenuItem = styled.div``;

export const Icon = styled.img`
  color: white;
`;

/**
 * OVERLAY
 */

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.65);
  min-height: 214px;
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 90%;
`;

export const OverlayTitle = styled.h1`
  font-weight: 900;
  font-size: 26px;
  color: #ffffff;
`;

export const OverlayPriceContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
`;

export const OverlayPrice = styled.h1`
  flex: 1;
  font-weight: 900;
  font-size: 48px;
  color: #3ec6e0;
`;

export const OverlayCents = styled.h1`
  font-weight: 900;
  font-size: 28px;
  color: #3ec6e0;
  margin: 0 0 10px 5px;
`;

export const OverlayDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 155%;
  color: #ffffff;
  text-align: end;
`;

/**
 * FOOTER
 */

export const FooterContainer = styled.div`
  display: flex;
`;

export const FooterTitleContainer = styled.div`
  display: flex;
  flex: 1 100px;
  justify-content: flex-start;
  align-items: center;
  background: #3ec6e0;
  height: 52px;
  border-radius: 0px 0px 0px 10px;
`;

export const FooterTitle = styled.h1`
  margin-left: 22px;
  font-weight: normal;
  font-size: 14px;
  color: #ffffff;
`;

/**
 * CONTENT
 */

export const ContentContainer = styled.div`
  display: flex;
  margin: 25px 0 25px 0;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardFooter = styled.div`
  display: flex;
  height: 50px;
  background-color: #3ec6e0;
  border-left: 5px solid #084154;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

/**
 * Featured Products
 */

export const FeaturedProductsContainer = styled.div``;
export const FeaturedIcon = styled.img``;
export const FeaturedTitle = styled.h1``;
export const FeaturedProducts = styled.div``;
