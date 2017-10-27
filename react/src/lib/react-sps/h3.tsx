import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';

interface IProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  h3: withProps<IProps>()(themed.h3),
};

// These styles will remain local
export const H3 = withFonts({ sourceSansPro })(styled.h3`
  box-sizing: border-box;
  color: ${({theme}) => theme.color.gray600};
  display: block;
  font-family: ${({sourceSansPro}) => sourceSansPro.styles.fontFamily};
  font-size: 28px;
  font-weight: 500;
  line-height: 30.8px;
  margin-top: 0px;
  text-align: left;
  text-size-adjust: 100%;
`);
