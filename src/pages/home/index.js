/**
 * Components
 */
import * as S from "./styles";
import SliderControl from "pages/home/slider-control";
import Highlighted from "pages/home/highlighted";

/**
 * Icons
 */
import hamburguer from "images/icons/hamburguer.png";
import plane from "images/icons/paper-plane.png";
import search from "images/icons/search-solid.png";
import bag from "images/icons/shopping-bag-solid.png";
import nextIcon from "images/icons/angle-left-solid.png";
import prevIcon from "images/icons/angle-right-solid.png";

/**
 * Images
 */
import logo from "images/logo.png";
import footerLogo from "images/footer-logo.png";
import line from "images/line.png";
import sekiro from "images/sekiro-banner.png";
import zelda from "images/zelda-banner.png";

function Home() {
  return (
    <S.HomeContainer>
      <S.MenuContainer>
        <S.DesktopMenuContainer>
          <S.DesktopMenuTitleContainer>
            <S.DesktopMenuTitle>MORTAL KOMBAT</S.DesktopMenuTitle>
            <S.SeparatorContainer>
              <S.Separator />
            </S.SeparatorContainer>
          </S.DesktopMenuTitleContainer>
          <S.DesktopMenuNavigationContainer>
            <S.DesktopMenuNavigationPages>1/2</S.DesktopMenuNavigationPages>
            <S.DesktopMenuNavigationIconContainer>
              <S.DesktopMenuNavigationNextIcon src={nextIcon} />
              <S.DesktopMenuNavigationPrevIcon src={prevIcon} />
            </S.DesktopMenuNavigationIconContainer>
          </S.DesktopMenuNavigationContainer>
        </S.DesktopMenuContainer>
        <S.Menu>
          <S.MenuItemContainer>
            <S.MenuItem>
              <S.MenuItemIcon src={hamburguer} alt="icon-hamburguer" />
            </S.MenuItem>
            <S.MenuItem>
              <S.Logo src={logo} alt="logo" />
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemIcon src={plane} alt="paper-plane" />
              <S.MenuItemText>contanto</S.MenuItemText>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemIcon src={search} alt="search" />
              <S.MenuItemText>buscar</S.MenuItemText>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuItemIcon src={bag} alt="shopping-bag" />
              <S.MenuItemBagContainer>
                <S.MenuItemBag>2</S.MenuItemBag>
              </S.MenuItemBagContainer>
            </S.MenuItem>
          </S.MenuItemContainer>
        </S.Menu>
        <S.Overlay>
          <S.OverlayContainer>
            <S.OverlayTitle>MORTAL KOMBAT</S.OverlayTitle>
            <S.OverlayPriceContainer>
              <S.OverlayPrice>R$ 299</S.OverlayPrice>
              <S.OverlayCents>,99</S.OverlayCents>
            </S.OverlayPriceContainer>
            <S.OverlayDescription>
              Mortal Kombat X combina uma apresentação cinemática única com uma
              jogabilidade totalmente nova. Os jogadores podem escolher pela
              primeira vez diversas variantes de cada personagem, afetando tanto
              a estratégia como o estilo de luta.
            </S.OverlayDescription>
          </S.OverlayContainer>
        </S.Overlay>
      </S.MenuContainer>
      <S.MenuFooterContainer>
        <S.FooterTitleContainer>
          <S.FooterTitle>MORTAL KOMBAT</S.FooterTitle>
        </S.FooterTitleContainer>
        <SliderControl />
      </S.MenuFooterContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Card>
            <img src={sekiro} alt="sekiro-image" />
            <S.CardFooter>
              <S.CardFooterText>
                The Legend of Zelda - Breath of the wild
              </S.CardFooterText>
              <S.CardFooterLine src={line} alt="line" />
            </S.CardFooter>
          </S.Card>
          <S.Card>
            <img src={zelda} alt="zelda-image" />
            <S.CardFooter>
              <S.CardFooterText>SEKIRO - Shadows die twice</S.CardFooterText>
              <S.CardFooterLine src={line} alt="line" />
            </S.CardFooter>
          </S.Card>
        </S.Content>
      </S.ContentContainer>
      <Highlighted />
      <S.Footer>
        <S.FooterContainer>
          <S.FooterLogoContainer>
            <S.FooterLogo src={footerLogo} alt="logo" />
          </S.FooterLogoContainer>
          <S.FooterTextContainer>
            <S.FooterText>
              Agência N1 - Todos os direitos reservados
            </S.FooterText>
          </S.FooterTextContainer>
        </S.FooterContainer>
      </S.Footer>
    </S.HomeContainer>
  );
}
export default Home;
