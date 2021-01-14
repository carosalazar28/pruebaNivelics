import styled from 'styled-components';
import { BadgeTestimony } from './BadgeTestimony';
import { BadgeNewTestimony } from './BadgeNewTestimony';
import { ContainerFooter } from './ContainerFooter';

const NameSection = styled.h4`
  font-size: 34px;
  text-align: center;
  margin: 0;
  padding: 15px;
`;

const ContainerTestimony = styled.section`
  background: #1f2126;
  color: white;
  margin: 10px auto;
  position: relative;
  padding: 17px;
`;

const BodyLeft = styled.div`
  grid-area: bodyLeft;
`;

const TitleTestimony = styled.h5`
  font-size: 20px;
`;

export function BadgeSectionTestimony({title, testimonies}) {
  return (
    <>
    <ContainerFooter>
      <BodyLeft>
        <NameSection>Testimonios</NameSection>
          <hr/>
        <ContainerTestimony>
          <TitleTestimony>{title}</TitleTestimony>
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
        </ContainerTestimony>
      </BodyLeft>
      <BadgeNewTestimony/>
    </ContainerFooter>
    </>
  )
};