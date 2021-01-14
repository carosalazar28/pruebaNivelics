export function BadgeService({name, summary, description, image, icon, price}) {
  return (
    <article>
      <h6>{name}</h6>
      <p>{summary}</p>
      <p>{description}</p>
      <img
        src={image}
        alt="Imagen del servicio"
      />
      <img
        src={icon}
        alt="Icono del servicio"
      />
      <p>{price}</p>
    </article>
  )
};