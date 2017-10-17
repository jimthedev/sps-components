// themed-components.ts
import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ITheme } from './theme/standard'; // custom theme

type StyledFunction<T> = styledComponents.ThemedStyledFunction<T, ITheme>;

function withProps<T, U extends HTMLElement = HTMLElement>(
  styledFunction: StyledFunction<React.HTMLProps<U>>
): StyledFunction<T & React.HTMLProps<U>> {
  return styledFunction;
}

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withTheme,
} = styledComponents as ThemedStyledComponentsModule<ITheme>;

export {
  css,
  injectGlobal,
  keyframes,
  ThemeProvider,
  withProps,
  ITheme,
  withTheme,
};
export default styled;
