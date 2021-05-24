import { HomeContainer } from "../../app.styles";
import * as S from "./styles";
import hamburguer from "images/icons/hamburguer.png";
import logo from "images/logo.png";
import plane from "images/icons/paper-plane.png";
import search from "images/icons/search-solid.png";
import bag from "images/icons/shopping-bag-solid.png";
import SliderControl from "pages/home/slider-control";

import sekiro from "images/sekiro-banner.png";
import zelda from "images/zelda-banner.png";

function Home() {
  return (
    <HomeContainer>
      <S.MenuContainer>
        <S.Menu>
          <S.MenuItem>
            <S.Icon img src={hamburguer} alt="icon-hamburguer" />
          </S.MenuItem>
          <S.MenuItem>
            <S.Logo src={logo} alt="logo" />
          </S.MenuItem>
          <S.MenuItem>
            <S.Icon img src={plane} alt="paper-plane" />
          </S.MenuItem>
          <S.MenuItem>
            <S.Icon img src={search} alt="search" />
          </S.MenuItem>
          <S.MenuItem>
            <S.Icon img src={bag} alt="shopping-bag" />
          </S.MenuItem>
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
      <S.FooterContainer>
        <S.FooterTitleContainer>
          <S.FooterTitle>MORTAL KOMBAT</S.FooterTitle>
        </S.FooterTitleContainer>
        <SliderControl />
      </S.FooterContainer>
      <S.ContentContainer>
        <S.Content>
          <S.Card>
            <img src={sekiro} alt="sekiro-image" />
            <S.CardFooter>
              The Legend of Zelda - Breath of th wild <hr />
            </S.CardFooter>
          </S.Card>
          <S.Card>
            <img src={zelda} alt="zelda-image" />
          </S.Card>
        </S.Content>
      </S.ContentContainer>
      <S.FeaturedProducts>
        <S.FeaturedIcon />
        <S.FeaturedTitle>title</S.FeaturedTitle>
      </S.FeaturedProducts>
    </HomeContainer>
  );
}
export default Home;
