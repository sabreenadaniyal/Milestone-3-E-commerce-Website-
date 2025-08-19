// /** @type {import('postcss-load-config').Config} */
// const config = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//    },
// };

// export default config;


// postcss.config.mjs
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwind,
    autoprefixer,
  },
};

export default config;
