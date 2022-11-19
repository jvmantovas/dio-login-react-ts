import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import { IHeader } from "./types";

import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
} from "./styles";

const Header = ({ autenticado }: IHeader) => {
  const navigate = useNavigate();
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo" onClick={handleClickHome} />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/109223861?s=400&u=3088b20fb80b329793d1d906c40de38d62f13e25&v=4" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
