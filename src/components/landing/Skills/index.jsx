import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Vakas and I’m a Full Stack engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More About Me</h1>
          <p>
          I graduated in May with a Bachelors degree in Economics from Fordham University and recently completed a coding bootcamp at the Flatiron School. My passion for behavioral economics inspired me to learn how to develop tools that individuals can use to one day empower themselves and improve their quality of life. I'm looking forward to learning new technologies and driving innovation with my future teams!
          </p>
          <Button as={AnchorLink} href="#contact">
            Contact me
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
