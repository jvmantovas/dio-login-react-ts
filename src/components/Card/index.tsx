import React from "react";

import { FiThumbsUp } from "react-icons/fi";

import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from "./styles";

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://guiadeti.com.br/wp-content/uploads/2022/01/site-dion.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4" />
          <div>
            <h4>João Mantovaneli</h4>
            <p>Há 6 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de React</h4>
          <p>
            Projeto feito no curso de React no bootcamp da dio Orange Tech+...
            <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JavaScript #React</h4>
          <p>
            <FiThumbsUp />
            10
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
