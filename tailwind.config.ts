import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
      colors: {
        main: {
          0: '#333333',
          1: '#7C7C7C',
          2: '#CBCACA',
          3: '#CFCFCF',
          4: '#EDEDED',
        },
      },
    },
  },
  plugins: [],
};
export default config;
