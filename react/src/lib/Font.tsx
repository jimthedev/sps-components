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
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
    success: {
      fontFamily: '"Source Sans Pro", sans-serif',
    },
    fallback: {
      // `initial` will be used instead if not set
      fontFamily: 'Arial, Helvetica, sans-serif',
    },
  },
};

// import * as FontFaceObserver from 'fontfaceobserver';

// // TODO: Replace with https://github.com/sergeybekrin/react-with-async-fonts ?
// export const defaultFonts = ['Source Code Pro', 'Source Sans Pro'];

// export const FontLoader = async (fonts: Array<string>) => {
//     try {
//         // Turn the fonts into promises
//         const fontPromises = fonts.map(font => {
//             const loader = new FontFaceObserver(font);
//             return loader.load();
//         });
//         // Return the promises
//         const result = await Promise.all(fontPromises);
//         // Set a
//         document.documentElement.className += ' spsui-fonts-loaded';
//         return result;
//     } catch (e) {
//         console.error('SPS Fonts not loaded');
//         throw e;
//     }
// }
