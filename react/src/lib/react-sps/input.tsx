import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';

interface IProps {
  sourceSansPro: any;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  input: withProps<IProps>()(themed.input),
};

// These styles will remain local
export const Input = withFonts({
  sourceSansPro,
})(styled.input`
  ::placeholder {
    color: ${({ disabled, theme }) =>
      disabled ? theme.color.gray200 : theme.color.gray400};
  }
  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.blue200};
  }
  border: 1px solid
    ${({ disabled, error, theme }) =>
      disabled
        ? theme.color.gray200
        : error ? theme.color.red200 : theme.color.gray400};
  border-radius: 3px;
  box-shadow: inset 0 ${({ disabled }) => (disabled ? 0 : '4px')} 0px 0px
    ${({ theme }) => theme.color.gray200};
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray200 : theme.color.gray600};
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};
  height: 30px;
  padding-top: 12px; /* 8px padding + 4px box shadow  */
  padding-right: 9px;
  padding-bottom: 10px;
  padding-left: 9px;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 100%;
`);
