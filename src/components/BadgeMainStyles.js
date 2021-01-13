import styled from 'styled-components';

export const NameCompany = styled.h2`
  text-align: center;
  font-size: 48px;
  color: #00b6d7;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6));
`;

export const MainContent = styled.main`
  display: grid;
  grid-template-areas:
    "image image"
    "contentTitle contentDescription";
  color: white;
  text-align: center;
`;

export const ContentTitle = styled.div`
  grid-area: contentTitle;
  background-color: #00b6d7;
`;

export const ContentDescription = styled.div`
  grid-area: contentDescription;
  background-color: #363636;
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const ImagePrincipal = styled.div`
  grid-area: image;
  height: 530px;
`;

export const Image = styled.img`
  width: -webkit-fill-available;
  object-fit: cover;
`;