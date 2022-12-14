import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useHistory } from "react-router-dom";
import { FlexComponent, FlexForm, Line } from "./styles";
import Button from "../Button";
import Input from "../Input";
import ApiFake from "../../Service/api_fake";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginArea = () => {
  const formSchema = yup.object().shape({
    email: yup.string().required("Digite seu email!").email("Email inválido"),

    password: yup.string().required("Digite sua senha!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    const resolve = new Promise((resolve, reject) => {
      ApiFake.post("/login", data)
        .then((res) => {
          const { accessToken, user } = res.data;
          localStorage.setItem("@YOURMONEY-TOKEN", accessToken);
          localStorage.setItem("@YOURMONEY-ID", JSON.stringify(user.id));
          setTimeout(resolve)
          setTimeout(() => {
              return history.push("/dashboard");
          }, 2000);
        })
        .catch((err) => {
          setTimeout(reject)
        });
    });

    toast.promise(resolve, {
      pending: "Aguarde",
      success: "Sucesso ao acessar sua conta",
      error: "Email ou senha inválidos",
    });
  };

  return (
    <section>
      <FlexForm onSubmit={handleSubmit(onSubmitFunction)}>
        <FlexComponent direction="column" gap="10px" className="data-content">
          <Input
            label="Email:"
            placeholder="Digite seu email"
            name="email"
            error={errors.email}
            register={register}
          />

          <Input
            label="Senha:"
            placeholder="Digite sua senha"
            type="password"
            name="password"
            error={errors.password}
            register={register}
          />

          <FlexComponent justify="center" align="flex-end">
            <Button background="var(--blue-button)" width="60%">
              Entrar
            </Button>
          </FlexComponent>
          <FlexComponent wrap="nowrap" gap="10px" align="center">
            <Line></Line>
            <p>ou</p>
            <Line></Line>
          </FlexComponent>
          <Link to="/registro">
            <FlexComponent justify="center">
              <Button background="var(--green-button)" width="60%">
                Cadastre-se
              </Button>
            </FlexComponent>
          </Link>
        </FlexComponent>
      </FlexForm>
    </section>
  );
};

export default LoginArea;
