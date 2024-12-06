import toast from "react-hot-toast";

interface LoginValues {
  email: string;
  password: string;
}

export default async function validateLogin(
  values: LoginValues
): Promise<boolean> {
  if (!values.email || !values.password) {
    toast.error("Preencha todos os campos!");
    return false;
  }

  if (!values.email.includes("@")) {
    toast.error("Formato inválido de e-mail!");
    return false;
  }

  return true;
}
