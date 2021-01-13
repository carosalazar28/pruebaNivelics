import {
  NameCompany,
  MainContent,
  ContentTitle,
  ContentDescription,
  ImagePrincipal,
} from './BadgeMainStyles';

export function BadgeMain({ titlePrincipal, testTitle, testDescription, image }) { 
  return (
    <>
      <MainContent>
        <ContentTitle>
          <h1>{titlePrincipal}</h1>
          <h3>{testTitle}</h3>
        </ContentTitle>
        <ContentDescription>
          <p>{testDescription}</p>
        </ContentDescription>
        <ImagePrincipal>
          <NameCompany>Nivelics</NameCompany>
          <img 
            src={image[0].path_file}
            alt="Imagen principal de prueba"
          />
        </ImagePrincipal>
      </MainContent>
    </>
  )
}