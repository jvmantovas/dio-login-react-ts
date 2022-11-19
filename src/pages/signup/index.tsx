import { MdEmail, MdLock, MdOutlinePerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";

import {
  Column,
  Container,
  LoginText,
  Row,
  SubtitleLogin,
  TermsLogin,
  Title,
  TitleLogin,
  Wrapper,
} from "./styles";
import { IFormData } from "./types";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Este e-mail não é válido.")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(3, "No mínimo 3 caracteres.")
      .required("Campo obrigatório"),
  })
  .required();

const Signup = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  console.log(isValid, errors);

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data } = await api.get(
        `users?email${formData.email}&senha=${formData.password}`
      );
      if (data.length === 1) {
        navigate("/login");
      } else {
        alert("E-mail ou senha inválido");
      }
    } catch {
      alert("Houve um erro, tente novamente");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name="name"
                control={control}
                placeholder="Nome"
                type="name"
                leftIcon={<MdOutlinePerson />}
              />
              <Input
                name="email"
                errorMessage={errors?.email?.message}
                control={control}
                placeholder="E-mail"
                type="email"
                leftIcon={<MdEmail />}
              />
              <Input
                name="password"
                errorMessage={errors?.password?.message}
                control={control}
                placeholder="Senha"
                type="password"
                leftIcon={<MdLock />}
              />
              <Button
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <TermsLogin>
              Ao clicar em "criar minha conta grátis", declaro que aceito as
              Políticas de Privacidade e os Termos de uso da DIO.
            </TermsLogin>
            <Row>
              <LoginText>
                Já tenho conta. <span>Fazer login</span>
              </LoginText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Signup };
