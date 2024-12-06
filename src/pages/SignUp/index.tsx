import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import api from "../../common/services";
import { ContainerCenterPage, InitContent, ContainerClicks } from "../../common/styles/StyleInitPages";
import Footer from "../../components/Footer";
import toast from "react-hot-toast";
import validateRegistration from "../../validations/validateRegistration";
import MainImage from "../../components/MainImage";

interface Values {
  name: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
}

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [values, setValues] = useState<Values>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  });

  const handleSetValues = (update: Partial<Values>) => {
    setValues((prevValues) => ({ ...prevValues, ...update }));
  };

  async function signUp(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    const isValid = await validateRegistration(values, navigate);

    if (!isValid) {
      setLoading(false);
      return;
    }
    
    try {
      await api.authSignUp({
        name: values.name,
        phone: values.phone,
        email: values.email,
        password: values.password,
      });
      toast.success("Cadastro realizado com sucesso! Faça login.");
      navigate("/login");
    } catch (error: any) {
      console.error("Erro ao cadastrar:", error);
      const errorMessage =
      error.response?.data?.message || "Erro ao cadastrar. Verifique os dados e tente novamente.";
  
      toast.error(errorMessage);    
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <InitContent>
        <MainImage />
        <ContainerCenterPage>
          <h2>Cadastro</h2>
          <form onSubmit={signUp}>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <CommonInput
                setValues={(field, value) => handleSetValues({ [field]: value })}
                values={values}
                inputLabel="Nome"
                inputState="name"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <CommonInput
                setValues={(field, value) => handleSetValues({ [field]: value })}
                values={values}
                inputLabel="Telefone"
                inputState="phone"
              />
            </FormControl>
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
              <CommonInput
                setValues={(field, value) => handleSetValues({ [field]: value })}
                values={values}
                inputLabel="Email"
                inputState="email"
              />
            </FormControl>
            {["Senha", "Confirme sua senha"].map((label, index) => (
              <FormControl fullWidth sx={{ m: 1 }} variant="outlined" key={index}>
                <PasswordInput
                  setValues={(field, value) => handleSetValues({ [field]: value })}
                  values={values}
                  inputLabel={label}
                  inputState={index === 0 ? "password" : "confirmPassword"}
                />
              </FormControl>
            ))}
            <ContainerClicks>
              <Link to="/login">
                <p>Já possuo cadastro</p>
              </Link>
              <LoadingButton loading={loading} variant="contained" type="submit">
                Cadastrar
              </LoadingButton>
            </ContainerClicks>
          </form>
        </ContainerCenterPage>
      </InitContent>
      <Footer />
    </>
  );
}
