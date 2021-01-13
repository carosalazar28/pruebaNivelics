import { BadgeArticle } from './BadgeArticle';
import styled from 'styled-components';

const NameSection = styled.h4`
  font-size: 34px;
  text-align: center;
  margin: 0;
  padding: 15px;
`;

const Section = styled.section`
  padding: 0 30px;
`;

export function BadgeSectionArticles({articles}) {
  return (
    <>
      <NameSection>Artículos</NameSection>
      <hr/>
      <Section>
        {!!articles && articles.length > 0 && articles.map(({url_article, image, name, description}, index) => {
          return (
            <BadgeArticle
              key={index}
              image={image}
              description={description}
              url_article={url_article}
              name={name}
            />
          )})}
      </Section>
    </>
  )
}