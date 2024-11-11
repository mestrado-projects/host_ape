import toast from "react-hot-toast";
import api from "../common/services/index";
import { NavigateFunction } from "react-router-dom";

interface RegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
}

export default async function valideRegistration(
  data: RegistrationData,
  navigate: NavigateFunction
): Promise<void> {
  const regex = /[a-zA-Z0-9$*&@#]{8,}/;

  if (!data.email || !data.password || !data.confirmPassword) {
    toast.error("Preencha todos os campos!");
    return;
  }
  if (!data.email.includes("@")) {
    toast.error("Formato inválido de e-mail!");
    return;
  }
  if (data.password !== data.confirmPassword) {
    toast.error("As senhas precisam ser iguais!");
    return;
  }
  if (!regex.test(data.password)) {
    toast.error("Senha com ao menos 8 caracteres!");
    return;
  }

  try {
    await api.authSignUp(data);
    navigate("/login");
  } catch (err: any) {
    if (err.message.includes("409")) {
      toast.error("E-mail já cadastrado!");
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
