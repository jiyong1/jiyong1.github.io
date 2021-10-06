import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    size: {
      medium: string;
    };
  }
}

const theme: DefaultTheme = {
  size: {
    medium: '647px',
  },
};

export default theme;
