import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details, Item } from './styles';
import social from './social.json';
import GatsbyIcon from './gatsby.svg'
import VercelIcon from './vercel.svg'



export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Vakas Akhtar</h2>
        <span>
          © Vakas Akhtar | {new Date().getFullYear()} | Built with{' '}
          <a href="https://www.gatsbyjs.com/" rel="noopener noreferrer" target="_blank">
            <Item width="24" src={GatsbyIcon} img alt="Gatsby" />
          </a>{' '}
          hosted on{' '}
          <a href="https://vercel.com/" rel="noopener noreferrer" target="_blank">
            <Item width='24' src={VercelIcon} img alt='vercel'/>
          </a>
        </span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a key={id} href={link} target="_blank" rel="noopener noreferrer" aria-label={`follow me on ${name}`}>
            <img width="24" src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
