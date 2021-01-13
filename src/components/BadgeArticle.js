export function BadgeArticle({ image, description, url_article, name }) {
  return (
    <article>
      <img
        src={image}
        alt="Imagen del articulo"
      />
      <p>{description}</p>
      <a href={url_article}>{name}</a> 
    </article>
  )
};