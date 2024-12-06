import toast from "react-hot-toast";
import { NavigateFunction } from "react-router-dom";

interface RegistrationData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phone: string;
}

export default async function validateRegistration(
  data: RegistrationData,
  navigate: NavigateFunction
): Promise<boolean> {
  const passwordRegex = /[a-zA-Z0-9$*&@#]{8,}/;
  const phoneRegex = /^[0-9]{9,15}$/;

  if (!data.name || !data.phone || !data.email || !data.password || !data.confirmPassword) {
    toast.error("Preencha todos os campos!");
    return false;
  }

  if (data.name.length < 3) {
    toast.error("O nome deve ter pelo menos 3 caracteres!");
    return false;
  }

  if (!phoneRegex.test(data.phone)) {
    toast.error("O telefone deve conter entre 9 e 15 dígitos numéricos!");
    return false;
  }

  if (!data.email.includes("@")) {
    toast.error("Formato inválido de e-mail!");
    return false;
  }

  if (data.password !== data.confirmPassword) {
    toast.error("As senhas precisam ser iguais!");
    return false;
  }

  if (!passwordRegex.test(data.password)) {
    toast.error("Senha com ao menos 8 caracteres!");
    return false;
  }

  return true;
}
