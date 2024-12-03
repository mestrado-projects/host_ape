import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import valideRegistration from "../../validations/valideRegistration";
import logo from "../../common/assets/logo.png";
import { ContainerCenterPage, InitContent, ContainerClicks } from "../../common/styles/StyleInitPages";

interface Values {
  password: string;
  confirmPassword: string;
  email: string;
  showPassword: boolean;
}

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const inputsConfident = [
    { name: "Senha", nameState: "password" },
    { name: "Confirme sua senha", nameState: "confirmPassword" },
  ];

  const [values, setValues] = useState<Values>({
    password: "",
    confirmPassword: "",
    email: "",
    showPassword: false,
  });

  const handleSetValues = (update: Partial<Values>) => {
    setValues((prevValues) => ({ ...prevValues, ...update }));
  };

  async function signUp(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    await valideRegistration(values, navigate);
    setLoading(false);
  }

  return (
    <InitContent>
      <img src={logo} alt="logo" />
      <ContainerCenterPage>
        <h2>Cadastro</h2>
        <form onSubmit={signUp}>
          <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
            <CommonInput
              setValues={(field, value) => handleSetValues({ [field]: value })}
              values={values}
              inputLabel="Email"
              inputState="email"
            />
          </FormControl>
          {inputsConfident.map((input) => (
            <FormControl fullWidth sx={{ m: 1 }} variant="outlined" key={input.nameState}>
              <PasswordInput
                setValues={(field, value) => handleSetValues({ [field]: value })}
                values={values}
                inputLabel={input.name}
                inputState={input.nameState}
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
  );
}
