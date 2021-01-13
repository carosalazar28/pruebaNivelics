import { useEffect, useState, } from 'react';
import { BadgeMain } from '../components/BadgeMain';
import { BadgeSectionArticles } from '../components/BadgeSectionArticles';

function Home() {

  const[response, setResponse] = useState({})

  async function getData() {
    const response = await fetch('https://d2rpzhocglww2h.cloudfront.net/test/test.json')
    const json = await response.json()
    setResponse(json)
  }

  const { result } = response

  useEffect(() => {
    getData()
  }, []);

  console.log(result)
  console.log(response)
  return(
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
    </>
  );
}

export default Home