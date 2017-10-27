import themed, { withProps } from "./themed-components";
import { withFonts, sourceSansPro } from "react-sps/font";

interface ICardFooterProps {
  sourceSansPro: any;
}

const styled = {
  cardFooter: withProps<ICardFooterProps>()(themed.div)
};

export const CardFooter = withFonts({ sourceSansPro })(styled.cardFooter`
  background-color: ${({ theme }) => theme.color.white};
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-color: ${({ theme }) => theme.color.gray200};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.gray600};
  display: block;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  text-align: left;
  text-size-adjust: 100%;
  word-wrap: break-word;
`);
