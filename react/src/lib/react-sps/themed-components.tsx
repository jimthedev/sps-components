import * as styledComponents from 'styled-components';

import { ThemedStyledComponentsModule } from 'styled-components';
import { ThemedStyledFunction } from 'styled-components';

import { ITheme } from './theme/standard';

function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> => fn;
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
