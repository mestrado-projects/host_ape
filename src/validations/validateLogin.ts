import toast from "react-hot-toast";
import api from "../common/services/index";
import { NavigateFunction } from "react-router-dom";

interface LoginValues {
  email: string;
  password: string;
}

export default async function valideLogin(
  setAndPersistToken: (token: string) => void,
  navigate: NavigateFunction,
  values: LoginValues
): Promise<void> {
  if (!values.email || !values.password) {
    toast.error("Preencha todos os campos!");
    return;
  }
  if (!values.email.includes("@")) {
    toast.error("Formato inválido de e-mail!");
    return;
  }

  try {
    const result = await api.authLogin(values);

    setAndPersistToken(result.data.token);
    navigate("/");
  } catch (err: any) {
    if (err.message.includes("404")) {
      toast.error("E-mail não encontrado!");
      return;
    }
    if (err.message.includes("401")) {
      toast.error("Senha incorreta!");
      return;
    }
    if (err.message.includes("422")) {
      toast.error("Dados no formato incorreto!");
      return;
    }
    if (err.message.includes("500")) {
      toast.error("Erro na comunicação com o servidor");
      return;
    }
    console.log(err);
    toast.error("Erro desconhecido! Atualize a página");
    return;
  }
}
