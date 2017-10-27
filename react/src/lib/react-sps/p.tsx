import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';

interface IProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  p: withProps<IProps>()(themed.p),
};

// These styles will remain local
export const P = withFonts({ sourceSansPro })(styled.p`
  box-sizing: border-box;
  color: ${({theme}) => theme.color.gray600};
  display: block;
  font-family: ${({sourceSansPro}) => sourceSansPro.styles.fontFamily};
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: left;
  text-size-adjust: 100%;
`);
