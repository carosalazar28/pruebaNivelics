import styled from 'styled-components';
import ModalFormTestimony from './ModalFormTestimony';
import { useContext } from 'react';
import { TestimonyContext } from '../store/TestimonyContext';

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
  padding: 15px;
`;

const BodyLeft = styled.div`
  grid-area: bodyRight;
`;

const TitleTestimony = styled.h5`
  margin: 15px auto;
`;

const Text = styled.p`
  margin: 15px auto;
`;

export function BadgeNewTestimony() {

  const modal = useContext(TestimonyContext);

  const { data } = modal
  return (
    <>
      <BodyLeft>
        <NameSection>Nuevo Testimonio</NameSection>
          <hr/>
        <ContainerTestimony>
          <TitleTestimony>{data ? data.title : "Titulo"}</TitleTestimony>
          <Text>{data ? data.parragraph : "Parrafo"}</Text>
          <Text>{data ? data.nameClient : "Nombre"}</Text>
        </ContainerTestimony>
        <button
          onClick={modal.onOpenModal}
        >Agregar un nuevo comentario</button>
        {modal.modalIsOpen && (
          <ModalFormTestimony/>
        )}
      </BodyLeft>
    </>
  )
};