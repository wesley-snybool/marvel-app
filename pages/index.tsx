import { css, globalCss } from '@stitches/react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useEffect, useState } from 'react';
import * as Styled from './App.styles';
import { api } from './api/config';

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

const Global = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },
});

const Home: NextPage<ResultsProps> = ({ results }) => {
  const [characterData, setCharacterData] = useState<HeroProps[]>([]);

  useEffect(() => {
    setCharacterData(results);
  }, []);
  return (
    <div>
      <Styled.Main>
        <h1>Welcome to Marvel API</h1>
        <Styled.ContainerCardHero>
          {results.map((item, index: number) => {
            return (
              <Styled.CardHero key={`${item.name}-${index}`}>
                <span>{item?.name}</span>
                <img
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt="Imagem herói marvel coco"
                />
              </Styled.CardHero>
            );
          })}
        </Styled.ContainerCardHero>
      </Styled.Main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fetchData = await api.get('characters', {
    params: { limit: 100, offset: 20 },
  });

  const results: HeroProps[] = fetchData.data.data.results;

  return {
    props: {
      results: results,
    },
  };
};

export default Home;
