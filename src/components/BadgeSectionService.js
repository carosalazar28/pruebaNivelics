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

export function BadgeSectionService({categories}) {
  return (
    <>
      <NameSection>Artículos</NameSection>
      <hr/>
      <Section>
        
      </Section>
    </>
  )
}