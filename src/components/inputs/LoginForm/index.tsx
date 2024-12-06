import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import LoadingButton from "@mui/lab/LoadingButton";
import useToken from "../../../common/hooks/useToken";
import PasswordInput from "../PasswordInput";
import CommonInput from "../CommonInput";
import { ContainerClicks } from "../../../common/styles/StyleInitPages";
import { Link, Typography } from "@mui/material";
import api from "../../../common/services";
import toast from "react-hot-toast";
import validateLogin from "../../../validations/validateLogin";

interface Values {
    password: string;
    email: string;
    showPassword: boolean;
}

export default function LoginForm() {
    const { setAndPersistToken } = useToken();
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState<Values>({
        password: "",
        email: "",
        showPassword: false,
    });

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

        const isValid = await validateLogin(values);

        if (!isValid) {
            setLoading(false);
            return;
        }

        try {
            const response = await api.authLogin(values);
            const token = response.data.token;

            setAndPersistToken(token);
            toast.success("Login realizado com sucesso!");
            navigate("/");
        } catch (error: any) {
            console.error("Error during login:", error);

            const errorMessage =
                error.response?.data?.message || "Erro ao fazer login. Verifique suas credenciais.";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form onSubmit={login}>
                <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
                <CommonInput
                    setValues={(field, value) => handleSetValues({ [field]: value })}
                    values={values}
                    inputLabel="Email"
                    inputState="email"
                />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1, margin: "8px 0" }} variant="outlined">
                <PasswordInput
                    setValues={(field, value) => handleSetValues({ [field]: value })}
                    values={values}
                    inputLabel="Senha"
                    inputState="password"
                />
                </FormControl>
                <ContainerClicks>
                <LoadingButton
                    fullWidth={true}
                    loading={loading}
                    type="submit"
                    variant="contained"
                >
                    Entrar
                </LoadingButton>
                </ContainerClicks>
            </form>
            <Typography
                variant="body2"
                color="textSecondary"
                sx={{ marginTop: "8px", textAlign: "center" }}
            >
                Primeira Reserva? <Link href="/cadastro">Entre em contato</Link>
            </Typography>
        </>
    );
}
