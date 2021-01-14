import styled from 'styled-components';
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
`;

const BodyLeft = styled.div`
  grid-area: bodyRight;
`;

export function BadgeNewTestimony() {
  return (
    <>
      <BodyLeft>
        <NameSection>Nuevo Testimonio</NameSection>
          <hr/>
        <ContainerTestimony>
          <h6>Acá va el titulo</h6>
          <p>Acá va el parrafo</p>
          <p>Nombre de la persona</p>
        </ContainerTestimony>
        <button>Agregar un nuevo comentario</button>
      </BodyLeft>
    </>
  )
};