import React from "react";
import { Header } from "../../components/Header";
import { UserInfo } from "../../components/UserInfo";
import { Card } from "../../components/Card";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>#RAKING TOP 5 DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={65}
            nome="João Mantovaneli"
            image="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4"
          />
          <UserInfo
            percentual={57}
            nome="João Mantovaneli"
            image="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4"
          />
          <UserInfo
            percentual={45}
            nome="João Mantovaneli"
            image="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4"
          />
          <UserInfo
            percentual={30}
            nome="João Mantovaneli"
            image="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4"
          />
          <UserInfo
            percentual={15}
            nome="João Mantovaneli"
            image="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
