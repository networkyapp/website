import { BASE_PATH } from '@constants';
import useCanonicalUrl from '@utils/hooks/useCanonicalUrl';
import { DefaultSeo } from 'next-seo';
import React from 'react';

const HeadSEO: React.FC = () => {
  const url = useCanonicalUrl();

  const { title, description, locale } = {
    title: 'Networky. Wystaczy zbliżyć',
    description: 'Wymień kontakty, buduj network, twórz relacje',
    locale: 'pl_PL',
  };

  return (
    <DefaultSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        site_name: title,
        description: description,
        locale: locale,
        images: [
          {
            url: `${BASE_PATH}/static/thumbnail.png`,
            width: 1200,
            height: 630,
            alt: `${title} thumbnail`,
          },
        ],
        url,
      }}
    />
  );
};

export default HeadSEO;
