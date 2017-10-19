import withAsyncFonts from 'react-with-async-fonts';

export const withFonts = withAsyncFonts;

export const sourceSansPro = {
  family: 'Source Sans Pro',
  class: {
    initial: 'system-font',
    success: 'opensourcepro-font',
    failback: 'system-font',
  },
  styles: {
    initial: {
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
    success: {
      fontFamily: '"Source Sans Pro", Helvetica, Arial, sans-serif',
    },
    fallback: {
      // `initial` will be used instead if not set
      fontFamily: 'Helvetica, Arial, sans-serif',
    },
  },
};

// export enum fontWeight {
//   light = 300,
//   normal = 400,
//   semibold = 600,
//   bold = 700,
// }

// export enum fontStyle {
//   normal = 'normal',
//   italic = 'italic',
// }
