import { useEffect, useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import useToken from "../../common/hooks/useToken";
import PasswordInput from "../../components/inputs/PasswordInput";
import CommonInput from "../../components/inputs/CommonInput";
import valideLogin from "../../validations/validateLogin";
import logo from "../../common/assets/logo.png";
import { ContainerCenterPage, InitContent, ContainerClicks } from "../../common/styles/StyleInitPages";

interface Values {
  password: string;
  email: string;
  showPassword: boolean;
}

export default function SignIn() {
  const { setAndPersistToken } = useToken();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState<Values>({
    password: "",
    email: "",
    showPassword: false,
  });

  const inputsConfident = [{ name: "Senha", nameState: "password" }];
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const handleSetValues = (update: Partial<Values>) => {
    setValues((prevValues) => ({ ...prevValues, ...update }));
  };

  async function login(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    await valideLogin(setAndPersistToken, navigate, values);
    setLoading(false);
  }

  return (
    <InitContent>
      <img src={logo} alt="logo" />
      <ContainerCenterPage>
        <h2>Login</h2>

        <form onSubmit={login}>
          <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
            <CommonInput
              setValues={(field, value) => handleSetValues({ [field]: value })}
              values={values}
              inputLabel="Email"
              inputState="email"
            />
          </FormControl>
          {inputsConfident.map((input) => (
            <FormControl fullWidth key={input.name} sx={{ m: 1, margin: "8px 0" }} variant="outlined">
              <PasswordInput
                setValues={(field, value) => handleSetValues({ [field]: value })}
                values={values}
                inputLabel={input.name}
                inputState={input.nameState}
              />
            </FormControl>
          ))}
          <ContainerClicks>
            <Link to="/cadastro">
              <p>Não possuo cadastro</p>
            </Link>
            <LoadingButton loading={loading} type="submit" variant="contained">
              Entrar
            </LoadingButton>
          </ContainerClicks>
        </form>
      </ContainerCenterPage>
    </InitContent>
  );
}
