// TODO: in TypeScript 2.6 use a mapped type to iterate

// When adding a new color, make sure you add it to all
// locations in this file

// We actually give you some alternative means to refer
// to the colors including the name, the

// Blue
export const blue100 = '#D9F0FA';
//export const zD9F0FA = 'blue100';

export const blue200 = '#00AAE5';
//export const z00AAE5 = 'blue200';

export const blue300 = '#0097CC';
//export const z0097CC = 'blue300';

export const blue400 = '#0077AA';
//export const z0077AA = 'blue400';

// White, Gray, Black
export const white = '#FFFFFF';
//export const zFFFFFF = 'White';

export const gray100 = '#F6F6F6';
//export const zF6F6F6 = 'gray100';

export const gray200 = '#E8E9E9';
//export const zE8E9E9 = 'gray200';

export const gray300 = '#D2D4D5';
//export const zD2D4D5 = 'gray300';

export const gray400 = '#A5A9AB';
//export const zA5A9AB = 'gray400';

export const gray500 = '#62686B';
//export const z62686B = 'gray500';

export const gray600 = '#1F282C';
//export const z1F282C = 'gray600';

export const black = '#000000';
//export const z000000 = 'black';

// Oranges
export const orange100 = '#FFF4EA';
//export const zFFF4EA = 'orange100';

export const orange200 = '#FF9632';
//export const zFF9632 = 'orange200';

export const orange300 = '#BF7025';
//export const zBF7025 = 'orange300';

// Yellow
export const yellow100 = '#FFF8E0';
//export const zFFF8E0 = 'yellow100';

export const yellow200 = '#FFF0B3';
//export const zFFF0B3 = 'yellow200';

export const yellow300 = '#FFCC00';
//export const zFFCC00 = 'yellow300';

// Purple
export const purple100 = '#F1E8EF';
//export const zF1E8EF = 'purple100';

export const purple200 = '#883673';
//export const z883673 = 'purple200';

export const purple300 = '#743865';
//export const z743865 = 'purple300';

// Green
export const green100 = '#EAF8F0';
//export const zEAF8F0 = 'green100';

export const green200 = '#32BE6F';
//export const z32BE6F = 'green200';

export const green300 = '#258F53';
//export const z258F53 = 'green300';

// Red
export const red100 = '#FFEAEC';
//export const zFFEAEC = 'red100';

export const red200 = '#FF1F2A';
//export const zFF1F2A = 'red200';

export const red300 = '#C02534';
//export const zC02534 = 'red300';

// Color pallette
export interface IColorPalette {
  blue100: string;
  blue200: string;
  blue300: string;
  blue400: string;

  white: string;
  gray100: string;
  gray200: string;
  gray300: string;
  gray400: string;
  gray500: string;
  gray600: string;
  black: string;

  orange100: string;
  orange200: string;
  orange300: string;

  yellow100: string;
  yellow200: string;
  yellow300: string;

  purple100: string;
  purple200: string;
  purple300: string;

  green100: string;
  green200: string;
  green300: string;

  red100: string;
  red200: string;
  red300: string;
}

export const palette: IColorPalette = {
  blue100,
  blue200,
  blue300,
  blue400,
  white,
  gray100,
  gray200,
  gray300,
  gray400,
  gray500,
  gray600,
  black,
  orange100,
  orange200,
  orange300,
  yellow100,
  yellow200,
  yellow300,
  purple100,
  purple200,
  purple300,
  green100,
  green200,
  green300,
  red100,
  red200,
  red300,
};
