import { BadgeService } from './BadgeService';
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

export function BadgeSectionService({name, icon, services}) {
console.log(services)
  return (
    <>
      <NameSection>Servicios</NameSection>
      <hr/>
      <Section>
        <div>
          <h5>{name}</h5>
          <img
            src={icon}
            alt="Icono logo de la categoria"
          />
        </div>
        {!!services && services.length > 0 && services.map(({id, name, summary, short_description, image, icon, price}) => {
          return(
            <BadgeService
              key={id}
              name={name}
              summary={summary}
              description={short_description}
              image={image}
              icon={icon}
              price={price}
            />
        )})}
      </Section>
    </>
  )
}