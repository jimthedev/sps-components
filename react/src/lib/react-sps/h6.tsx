import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';

interface IProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  h6: withProps<IProps>()(themed.h6),
};

// These styles will remain local
export const H6 = withFonts({ sourceSansPro })(styled.h6`
  box-sizing: border-box;
  color: ${({ theme }) => theme.color.gray600};
  display: block;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  font-size: 16px;
  font-weight: 500;
  line-height: 17.6px;
  margin-top: 0px;
  text-align: left;
  text-size-adjust: 100%;
`);
