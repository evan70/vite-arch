import { babel } from '@rollup/plugin-babel'

// DYNAMIC IMPORT BROKEN NOW https://github.com/vitejs/vite/issues/14102

export default {
  root: './src',
  build: {
    outDir: '../public', // this line place index.html in the public folder
    assetsDir: './assets', // this line place your assets in the public/dist folder
    //commonjsOptions: { transformMixedEsModules: true }, // Change
  },
  plugins: [
    babel({
      exclude: /node_modules/,
      //include: [/node_modules\/xtendui/],
      include: [/node_modules\/wow.js/],
    }),
  ],
}
