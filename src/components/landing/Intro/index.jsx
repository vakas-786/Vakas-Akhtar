import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Vakas and I’m a Full Stack Developer!</h4>
          <Button as={AnchorLink} href="https://docs.google.com/document/d/1eKIJ5QTHlcFvCKLc4t1vQ_dz_SqQIc5QFExF-TwYz38/edit?usp=sharing">
            View Resume
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Vakas and I’m a Full Stack Developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
