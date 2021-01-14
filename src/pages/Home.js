import { useEffect, useState, } from 'react';
import { BadgeMain } from '../components/BadgeMain';
import { BadgeSectionArticles } from '../components/BadgeSectionArticles';
import { BadgeSectionService } from '../components/BadgeSectionService';
import { BadgeSectionTestimony } from '../components/BadgeSectionTestimony';

function Home() {

  const[response, setResponse] = useState({})

  async function getData() {
    const response = await fetch('https://d2rpzhocglww2h.cloudfront.net/test/test.json')
    const json = await response.json()
    setResponse(json)
  }

  
  useEffect(() => {
    getData()
  }, []);
  
  const result = response ? response.result : null
  return(
    <>
    {result && (
      <>
        <BadgeMain
          titlePrincipal={result.title_ppal}
          testTitle={result.test_title}
          testDescription={result.test_description}
          image={result.what_images_test}
        />
        <BadgeSectionArticles
          articles={result.articles_pymes_test}
        />
        {!!result.categories && result.categories.length > 0 && result.categories.map(({name, icon, services}, index) => {
          return (
            <BadgeSectionService
              key={index}
              name={name}
              icon={icon}
              services={services}
            />
          )})}
        <BadgeSectionTestimony
          title={result.title_testimony}
          testimonies={result.testimony}
        />
      </>
    )}
    </>
  );
}

export default Home