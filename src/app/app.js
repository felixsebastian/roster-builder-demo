import React, { useState, useCallback } from "react";
import Page from "./page";
import CreateBulk from "./createBulk";
import styled from "styled-components";

const Kermit = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(https://media1.giphy.com/media/DYH297XiCS2Ck/giphy.gif);
  background-repeat: no-repeat;
  background-position: center;
`;

export default () => {
  const [published, setPublished] = useState(false);

  const publish = useCallback(() => {
    setPublished(true);
    window.setTimeout(() => window.location.reload(), 2000);
  }, []);

  return !published ? (
    <Page>
      <CreateBulk publish={publish} />
    </Page>
  ) : (
    <Kermit />
  );
};
