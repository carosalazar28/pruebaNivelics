import { BadgeArticle } from './BadgeArticle';

export function BadgeSectionArticles({articles}) {
  return (
    <>
      <h4>Artículos</h4>
      <section>
        {!!articles && articles.length > 0 && articles.map(({url_article, image, name, description}) => {
          return (
            <BadgeArticle
              key={name}
              image={image}
              description={description}
              url_article={url_article}
              name={name}
            />
          )})}
      </section>
    </>
  )
}