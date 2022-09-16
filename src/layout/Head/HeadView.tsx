import NextHead from 'next/head';
import * as React from 'react';
import HeadFonts from './HeadFonts';
import HeadManifest from './HeadManifest';
import HeadSEO from './HeadSEO';

const Head: React.FC = () => (
  <>
    <HeadFonts />
    <NextHead>
      <HeadManifest />
    </NextHead>
    <HeadSEO />
  </>
);

export default Head;
