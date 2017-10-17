import { palette, IColorPalette } from 'react-sps/color';

export interface ITheme {
  name: string;
  color: IColorPalette;
}

export const theme: ITheme = {
  name: 'standard',
  color: palette,
};
