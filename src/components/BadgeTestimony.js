import styled from 'styled-components';

const ContainerArticle = styled.article`
  display: flex;
  flex-direction: column;
`;

const ContainerImages = styled.div`  
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

export function BadgeTestimony({name, title, text, image, service_image}) {
  return (
    <>
      <ContainerArticle>
        <p>{name}</p>
        <h6>{title}</h6>
        <p>{text}</p>
        <ContainerImages>
          <img
            src={image}
            alt="Imagen del servicio"
          />
          <img
            src={service_image}
            alt="Icono del servicio"
          />
        </ContainerImages>
      </ContainerArticle>
    </>
  )
};