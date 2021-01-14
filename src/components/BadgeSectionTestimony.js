import { BadgeTestimony } from './BadgeTestimony';

export function BadgeSectionTestimony({title, testimonies}) {
  return (
    <>
      <h4>Testimonios</h4>
      <section>
        <h5>{title}</h5>
        {!!testimonies && testimonies.length > 0 && testimonies.map(({name, title, text, image, service_image}, index) => {
        return (
        <BadgeTestimony
          key={index}
          name={name}
          title={title}
          text={text}
          image={image}
          service_image={service_image}
        />
        )})}
      </section>
    </>
  )
}