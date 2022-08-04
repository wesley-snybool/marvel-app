import type { GetStaticProps, NextPage } from 'next';
import { useEffect, useState } from 'react';
import * as Styled from '../../src/App.styles';
import api from '../api/config';

type HeroProps = {
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

type ResultsProps = {
  results: HeroProps[];
};

const Home: NextPage<ResultsProps> = ({ results }) => {
  // eslint-disable-next-line no-unused-vars
  const [characterData, setCharacterData] = useState<HeroProps[]>([]);

  useEffect(() => {
    setCharacterData(results);
  }, [results]);
  return (
    <div>
      <Styled.Main>
        <h1>Welcome to Marvel API</h1>
        <Styled.ContainerCardHero>
          {results?.map((item) => (
            <Styled.CardHero key={`${item.name}-${'bsdas'}`}>
              <span>{item?.name}</span>
              <img
                src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                alt="Imagem herói marvel"
              />
            </Styled.CardHero>
          ))}
        </Styled.ContainerCardHero>
      </Styled.Main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchData = await api.get('characters', {
    params: { limit: 100, offset: 70 },
  });

  const { results } = fetchData.data.data;

  return {
    props: {
      results,
    },
  };
};

export default Home;
