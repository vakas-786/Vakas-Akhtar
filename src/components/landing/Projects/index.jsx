import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import Star from 'components/common/Icons/Star';
import Fork from 'components/common/Icons/Fork';
import { Wrapper, Grid, Item, Content, Stats, Language, LanguageWrap } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const {
    github: {
      viewer: {
        pinnedItems: { edges },
      },
    },
  } = useStaticQuery(
    graphql`
    {
      github {
        viewer {
          pinnedItems(first: 5) {
            edges {
              node {
                ... on GitHub_Repository {
                  id
                  name
                  url
                  description
                  stargazers {
                    totalCount
                  }
                  forkCount
                  languages(first: 2, orderBy: {field: SIZE, direction: DESC} ){
                    nodes{
                      id
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `
  );
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {edges.map(({ node }) => (
          <Item key={node.id} as="a" href={node.url} target="_blank" rel="noopener noreferrer" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <LanguageWrap>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.stargazers.totalCount}</span>
                </div>
                <div>
                  <Fork color={theme === 'light' ? '#000' : '#fff'} />
                  <span>{node.forkCount}</span>
                </div>
              </Stats>
              <Stats theme={theme}>
                <Language>
                  {node.languages.nodes.map(({ id, name }) => (
                    <span key={id}>{name}</span>
                  ))}
                </Language>
              </Stats>
              </LanguageWrap>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
