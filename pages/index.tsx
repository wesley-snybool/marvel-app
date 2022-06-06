import { css, globalCss } from "@stitches/react";
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import * as Styled from "./App.styles";
import { api } from "./api/config";

type HeroProps = {
  name: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

const Global = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
});

const Home: NextPage = ({
  results,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [characterData, setCharacterData] = useState<HeroProps[]>([]);

  const data: HeroProps[] = results;

  useEffect(() => {
    setCharacterData(data);
    /*     try {
      api
        .get("characters", { params: { imit: 20, offset: 20 } })
        .then((response) => {
          setCharacterData(response.data.data.results);
        });
    } catch (error) {} */
    /*     api
      .get("characters", { params: { limit: 100, offset: 20 } })
      .then((response) => {
        setCharacterData(response.data.data.results);
      }); */
  }, []);
  return (
    <div className={Styled.GlobalRemoveCss()}>
      <Styled.Main>
        <h1>Welcome to Marvel API</h1>
        <Styled.ContainerCardHero>
          {characterData.map((item: HeroProps, index: number) => {
            return (
              <Styled.CardHero key={`${item.name}-${index}`}>
                <span>{item?.name}</span>
                <img
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt="Imagem herói marvel"
                />
              </Styled.CardHero>
            );
          })}
        </Styled.ContainerCardHero>
      </Styled.Main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const fetchData = await api.get("characters", {
    params: { limit: 100, offset: 20 },
  });

  const results: HeroProps[] = fetchData.data.data.results;

  /*   api
    .get("characters", { params: { limit: 100, offset: 20 } })
    .then((response) => {
      console.log(response);
    });
  console.log(dados); */

  return {
    props: {
      results: results,
    },
  };
};

export default Home;
