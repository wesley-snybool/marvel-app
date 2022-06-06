import { css, globalCss } from "@stitches/react";
import type { NextPage } from "next";
import { styled } from "../global.styles";

const Global = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
});

const Home: NextPage = () => {
  return <div className={Global()}>Hello World</div>;
};

export default Home;
