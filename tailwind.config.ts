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
      warning_light: '#FEF8EC',
      cyan: '#01bfea',
      cyan_dark: '#018fb0',
      cyan_light: '#4dd2f0',
      cyan_lighter: '#ccf2fb',
      blue: '#087fd2',
      blue_dark: '#065f9e',
      blue_light: '#52a5e0',
      blue_lighter: '#cee5f6',
      purple: '#aa50b5',
      purple_dark: '#803c88',
      purple_light: '#c485cb',
      purple_lighter: '#eedcf0',
      red: '#f45564',
      red_dark: '#c34450',
      red_light: '#f78893',
      red_lighter: '#fddde0',
      pink: '#e26ea5',
      pink_dark: '#aa537c',
      pink_light: '#eb9ac0',
      pink_lighter: '#f9e2ed',
      orange: '#ff8f41',
      orange_dark: '#d97a37',
      orange_light: '#ffb17a',
      orange_lighter: ' #ffe9d9',
      green: '#7db058',
      green_dark: '#5e8442',
      green_light: '#a4c88a',
      green_lighter: '#e5efde',
      yellow: '#ffc748',
      yellow_dark: '#d9a93d',
      yellow_light: '#ffd87f',
      yellow_lighter: '#ffeec8',
      turquoise: '#00c8b5',
      turquoise_dark: '#009688',
      turquoise_light: '#4dd9cb',
      turquoise_lighter: '#ccf4f0'
    },
    extend: {
      boxShadow: {
        '3xl': `
        inset 0 0 0 1px rgba(19,10,26,.09),
        0 0 5px 0 rgba(19,10,26,.04), 0 4px 6px -8px rgba(19,10,26,.12),
        0 6px 30px -8px rgba(19,10,26,.2)
        `
      }
    }
  },
  plugins: []
};
export default config;
