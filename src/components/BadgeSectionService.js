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
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 500px));
  justify-content: center;
`;

const Image = styled.img`
  width: 80px;
  border-radius: 50%;
  height: 80px;
  object-fit: cover;
`;

const ContainerCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 17px;
  background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6));
  color: white;
`;

export function BadgeSectionService({name, icon, services}) {
console.log(services)
  return (
    <>
      <NameSection>Servicios</NameSection>
      <hr/>
        <ContainerCategory>
          <Image
            src={icon}
            alt="Icono logo de la categoria"
            />
          <h5>{name}</h5>
        </ContainerCategory>
        <Section>
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