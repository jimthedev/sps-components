import * as React from 'react';
import themed, { withProps } from './themed-components';
import { withFonts, sourceSansPro } from 'react-sps/font';
import Aux from 'react-aux';

interface ITextareaProps {
  sourceSansPro: any;
  error?: boolean;
  required?: boolean;
  disabled?: boolean;
  renderInstructions?: Function;
}

interface IInstructionsProps {
  sourceSansPro: any;
}

// Any html elements types you want to style
// should be listed here:
// Req'd due to: https://github.com/Microsoft/typescript-styled-plugin/issues/21
const styled = {
  instructions: withProps<IInstructionsProps>()(themed.div),
  textarea: withProps<ITextareaProps>()(themed.textarea),
};

// These styles will remain local
const ThemedTextarea = withFonts({
  sourceSansPro,
})(styled.textarea`
  ::placeholder {
    color: ${({disabled, theme}) =>
      disabled ? theme.color.gray200 : theme.color.gray400};
  }
  :focus {
    outline: none;
    border: 1px solid ${({theme}) => theme.color.blue200};
  }
  border: 1px solid
    ${({disabled, error, theme}) =>
      disabled
        ? theme.color.gray200
        : error ? theme.color.red200 : theme.color.gray400};
  border-radius: 3px;
  box-shadow: inset 0 ${({ disabled }) => (disabled ? 0 : '4px')} 0px 0px
    ${({theme}) => theme.color.gray200};
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.gray200 : theme.color.gray600};
  font-family: ${({sourceSansPro}) => sourceSansPro.styles.fontFamily};
  padding-top: 12px; /* 8px padding + 4px box shadow  */
  padding-right: 9px;
  padding-bottom: 10px;
  padding-left: 9px;
  margin-top: 5px;
  min-height: 40px;
  margin-bottom: 20px;
  width: 100%;
  resize: vertical;
`);

export const TextareaInstructions = withFonts({
  sourceSansPro,
})(styled.instructions`
  color: ${({theme}) => theme.color.gray500 };
  font-family: ${({sourceSansPro}) => sourceSansPro.styles.fontFamily};
  margin-top: 10px; /* assumes label has no margin */
  margin-bottom: 3px; /* assumes textarea has top margin */
  font-weight: 200;
  font-size: 12px;
  font-style: italic;
`);

export const Textarea = (props: any) => {
  const { renderInstructions , ...rest} = props;
  return (
    <Aux>
      {renderInstructions ? renderInstructions(props) : null}
      <ThemedTextarea {...rest} key="textarea" />
    </Aux>
  )
}