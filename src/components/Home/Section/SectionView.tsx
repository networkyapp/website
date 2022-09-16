import * as React from 'react';
import {
  BigTitle,
  Container,
  Description,
  IconWrapper,
  Image,
  Inner,
  Title,
  Wrapper,
} from './SectionStyle';

interface Props {
  bigTitle?: string;
  variant: 'light' | 'dark';
  title: string;
  imageSrc: string;
  description: React.ReactNode;
  iconSrc: string;
  showBigTitleUnderline?: boolean;
}

const Section: React.FC<Props> = ({
  bigTitle,
  variant,
  title,
  imageSrc,
  description,
  iconSrc,
  showBigTitleUnderline,
}) => {
  return (
    <Wrapper variant={variant}>
      {bigTitle && (
        <BigTitle showBigTitleUnderline={showBigTitleUnderline}>
          {bigTitle}
        </BigTitle>
      )}
      <Container variant={variant}>
        <Inner variant={variant}>
          {iconSrc && (
            <IconWrapper>
              <img src={iconSrc} />
            </IconWrapper>
          )}
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Inner>
        <Image src={imageSrc} />
      </Container>
    </Wrapper>
  );
};

export default Section;
