import styled from 'styled-components';

const ContainerArticle = styled.article`
  display: grid;
  grid-template-areas: 
    "image name"
    "image description";
  grid-column-gap: 10px;
  margin-bottom: 17px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding-right: 30px;
`;

const Image = styled.img`
  grid-area: image;
  width: 80%;
  object-fit: fill;
`;

const NameArticle = styled.a`
  grid-area: name;
  margin: auto;
  font-size: 25px;
`;

const DescriptionArticle = styled.p`
  grid-area: description;
  margin: auto 15px;
  font-size: 20px;
`;

export function BadgeArticle({ image, description, url_article, name }) {
  return (
    <ContainerArticle>
      <Image
        src={image}
        alt="Imagen del articulo"
      />
      <DescriptionArticle>{description}</DescriptionArticle>
      <NameArticle href={url_article}>{name}</NameArticle> 
    </ContainerArticle>
  )
};