import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      primary: '#8C50B9',
      primary_dark: '#5B3478',
      primary_light: '#AF85CE',
      primary_lighter: '#EEE5F5',
      primary_lightest: '#F9F6FC',
      secondary: '#CB9569',
      secondary_dark: '#A27754',
      secondary_light: '#DBB596',
      secondary_lighter: '#F7EFE9',
      dark: '#46285D',
      light: '#EAE9EB',
      grey: '#9C9090',
      grey_darker: '#6D5F64',
      grey_dark: '#8A7D7F',
      grey_light: '#C8C0BD',
      grey_lighter: '#DFDAD7',
      grey_lightest: '#E7E2E0',
      white_ter: '#EFEBE9',
      white_bis: '#FAF7F5',
      white: '#FFFFFF',
      black: '#130A1A',
      black_bis: '#241B27',
      black_ter: '#2D232E',
      success: '#50B957',
      success_dark: '#46A34D',
      success_light: '#F0F9F1',
      info: '#2973CC',
      info_dark: '#2362AD',
      info_light: '#EEF4FC',
      warning: '#F2BB50',
      warning_dark: '#CE9F44',
      warning_light: '#FEF8EC'
    }
  },
  plugins: []
};
export default config;
