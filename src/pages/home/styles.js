import styled from "styled-components/macro";
import bg from "images/banner-mobile.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

/**
 * Menu
 */
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: 500px) {
    height: 840px;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  padding-bottom: 160px;
`;

export const MenuItemContainer = styled.div`
  display: flex;
  width: 90%;
  margin-top: 40px;
  & > div:nth-child(1) > img {
    width: 30px;
    height: 20px;
  }
  @media (min-width: 100px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MenuItemIcon = styled.img`
  color: white;
  height: 25px;
`;

export const MenuItemText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  color: #ffffff;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const MenuItemBagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  height: 25px;
  width: 25px;
  background-color: #3ec6e0;
  border-radius: 50%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuItemBag = styled.span`
  font-style: normal;
  font-weight: 900;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const Logo = styled.img`
  height: 25px;
`;

/**
 * GameText Container
 */

export const GameContentContainer = styled.div`
  display: flex;
  margin-top: 138px;
  @media (max-width: 600px) {
    display: none;
  }
  & > div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  & > div > h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 46px;
    color: #ffffff;
    padding-right: 30px;
    width: 100%;
    text-align: right;
  }
  & > div > div > h2 {
    font-style: normal;
    font-weight: 900;
    font-size: 70px;
    color: #3ec6e0;
  }
  & > div:nth-child(1) > div {
    display: flex;
    padding-right: 20px;
    align-items: center;

    height: 100px;
  }
  & > div > div > h3 {
    font-style: normal;
    font-weight: 900;
    font-size: 28px;
    color: #3ec6e0;
  }
  & > div > p {
    font-style: normal;
    font-weight: normal;
    margin-right: 20px;
    text-align: right;
    width: 60%;
    font-size: 16px;
    line-height: 155%;
    color: #ffffff;
  }
`;

/**
 * Menu Footer
 */

export const MenuFooterContainer = styled.div`
  display: flex;
  @media (min-width: 500px) {
    display: none;
  }
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
 * Overlay
 */

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.65);
  min-height: 214px;
  @media (min-width: 500px) {
    border: 2px dashed red;
    display: none;
  }
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
 * Content
 */

export const ContentContainer = styled.div`
  display: flex;
  margin: 25px 0 25px 0;
  justify-content: center;
  margin-top: -10%;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 90%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  min-height: 30px;
  background-color: #3ec6e0;
  border-left: 5px solid #084154;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const CardFooterText = styled.h1`
  width: 244.11px;
  height: 10px;
  left: 37.51px;
  top: 710px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #084154;
`;

export const CardFooterLine = styled.hr`
  border: 1px solid #084154;
  width: 50%;
  max-width: 50%;
  margin-right: 10px;
`;

/**
 * Home Footer
 */

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 130px;
`;

export const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 68px;
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #084154;
`;

export const FooterLogo = styled.img``;

export const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 3;
  background: #3ec6e0;
`;

export const FooterText = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
`;

/**
 * Desktop Slider Menu
 */

export const DesktopSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const DesktopSliderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 4;
  width: 63px;
  writing-mode: vertical-rl;
  background-color: #3ec6e0;
`;

export const DesktopSliderTitle = styled.h1`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const DesktopSliderNavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  border-radius: 0 0 0 10px;
  background: #084154;
  & > div {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  & > div > div:nth-child(1) {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    letter-spacing: 1;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
  & > div > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    gap: 10px;
    width: 63px;
  }
`;

export const DesktopSliderNavigationIconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const DesktopSliderNavigationPrevIcon = styled.img`
  width: 10px;
  height: 18px;
`;

export const DesktopSliderNavigationNextIcon = styled.img`
  width: 10px;
  height: 18px;
`;

export const DesktopSliderNavigationPagesContainer = styled.div`
  display: flex;
`;

export const DesktopSliderNavigationPages = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Separator = styled.div`
  width: 1px;
  height: 80%;
  border-left: 2px solid #ffffff;
`;
