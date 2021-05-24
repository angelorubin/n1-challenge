import * as S from "./styles";
import angleLeft from "images/icons/angle-left-solid.png";
import angleRight from "images/icons/angle-right-solid.png";

const SliderControl = () => {
  return (
    <S.Container>
      <S.PageNumber>1</S.PageNumber>
      <S.Separator>/</S.Separator>
      <S.PageNumber>2</S.PageNumber>
      <S.Arrow src={angleLeft} alt="angle-left" />
      <S.Arrow src={angleRight} alt="angle-right" />
    </S.Container>
  );
};

export default SliderControl;
