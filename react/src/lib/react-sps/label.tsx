import * as React from 'react';
import themed, { withProps } from './themed-components';
import { sourceSansPro, withFonts } from 'react-sps/font';

interface IProps {
  active?: boolean;
  sourceSansPro: any;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  label: withProps<IProps>()(themed.label),
};

// These styles will remain local
export const StyledLabel = withFonts({
  sourceSansPro,
})(styled.label`
  color: ${({ disabled, error, theme }) =>
    error && !disabled ? theme.color.red200 : theme.color.gray500};
  font-size: 12px;
  font-weight: 600;
  font-family: ${({ sourceSansPro }) => sourceSansPro.styles.fontFamily};

  ${({ disabled, required, sourceSansPro, theme }) =>
    required && !disabled
      ? `
    ::before {
      color: ${theme.color.red200};
      content: "*";
      margin-left: -13px;
      text-align: right;
      width: 10px;
      height: 10px;
      position: relative;
      display:inline-block;
      font-family: ${sourceSansPro.styles.fontFamily};
      font-weight: 200;
      font-size: 22px;
      padding-right: 3px;
      top: 8px;
    }
  `
      : ``};
`);

export const Label = (props: any) => (
  <StyledLabel {...props}>
    {props.error && !props.disabled ? (
      <span>
        <i className="fa fa-exclamation-triangle" aria-hidden="true" />{' '}
      </span>
    ) : null}
    {props.children}
  </StyledLabel>
);
