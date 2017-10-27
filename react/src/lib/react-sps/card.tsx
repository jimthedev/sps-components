import themed, { withProps } from "./themed-components";
import { withFonts, sourceSansPro } from "react-sps/font";

interface ICardProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  card: withProps<ICardProps>()(themed.div)
};

export const Card = withFonts({ sourceSansPro })(styled.card`
  background-clip: border-box;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom-color: ${({ theme }) => theme.color.gray200};
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: ${({ theme }) => theme.color.gray200};
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: ${({ theme }) => theme.color.gray200};
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: ${({ theme }) => theme.color.gray200};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.gray600};
  display: flex;
  flex-direction: column;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  min-width: 0px;
  position: relative;
  text-align: left;
  text-size-adjust: 100%;
  word-wrap: break-word;
`);
