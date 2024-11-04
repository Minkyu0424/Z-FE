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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        colors: {
          main: {
            0: '#333333',
            1: '#7C7C7C',
            2: '#CFCFCF',
            3: '#EDEDED',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
