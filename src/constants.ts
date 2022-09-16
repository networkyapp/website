import { ValueOf } from '@typeDefs/common';
import getConfig from 'next/config';
import { DefaultTheme } from 'styled-components';

interface Font {
  type: keyof DefaultTheme['fontFamily'];
  name: ValueOf<DefaultTheme['fontFamily']>;
  path: string;
  weight: number;
}

const { publicRuntimeConfig } = getConfig();
export const BASE_PATH =
  typeof window !== 'undefined'
    ? window.location.origin
    : publicRuntimeConfig.BASE_PATH || 'https://networky.pl';

export const fonts: Font[] = [
  {
    type: 'primary',
    name: 'Poppins',
    path: 'Poppins/Poppins-Regular.ttf',
    weight: 400,
  },
  {
    type: 'primary',
    name: 'Poppins',
    path: 'Poppins/Poppins-Medium.ttf',
    weight: 500,
  },
  {
    type: 'primary',
    name: 'Poppins',
    path: 'Poppins/Poppins-SemiBold.ttf',
    weight: 600,
  },
];

export const paths = {
  home: '/',
};

export const titleTemplate = '%s | Networky';

export const Cookies = {};
