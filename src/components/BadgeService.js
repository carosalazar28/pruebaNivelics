export function BadgeService({ image, description, url_article, name }) {
  return (
    <article>
      <img
        src={image}
        alt="Imagen del articulo"
      />
      <DescriptionArticle>{description}</DescriptionArticle>
      <NameArticle href={url_article}>{name}</NameArticle> 
    </article>
  )
};