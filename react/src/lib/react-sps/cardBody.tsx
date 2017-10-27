import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';

interface ICardBodyProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  cardBody: withProps<ICardBodyProps>()(themed.div),
};

export const CardBody = withFonts({ sourceSansPro })(styled.cardBody`
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.gray600};
  display: block;
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
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
