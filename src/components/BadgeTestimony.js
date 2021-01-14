export function BadgeTestimony({name, title, text, image, service_image}) {
  return (
    <>
    
        <article>
          <p>{name}</p>
          <h6>{title}</h6>
          <p>{text}</p>
          <img
            src={image}
            alt="Imagen del servicio"
          />
          <img
            src={service_image}
            alt="Icono del servicio"
          />
        </article>

    </>
  )
};