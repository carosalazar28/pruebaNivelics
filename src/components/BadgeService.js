import styled from 'styled-components';

const ContainerService = styled.article`
  position: relative;
  display: block;
`;

const IconService = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  object-fit: cover;
  position: relative;
  top: -15%;
  right: -9%;
`;

const ImageService = styled.img`
  width: 50%;
`;

const TitleService = styled.h6`
  font-size: 20px;
`;

const ContainerText = styled.div`
  position: relative;
`;

export function BadgeService({name, summary, description, image, icon, price}) {
  return (
    <ContainerService>
      <TitleService>{name}</TitleService>
      <ContainerText>
        <p>{summary}</p>
        <p>{description}</p>
      </ContainerText>
      <ImageService
        src={image}
        alt="Imagen del servicio"
      />
      <IconService
        src={icon}
        alt="Icono del servicio"
      />
      <p>{price}</p>
    </ContainerService>
  )
};