import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    TextField,
    CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import useToken from "../../common/hooks/useToken";
import api from "../../common/services";
import toast from "react-hot-toast";
import RemoveAccount from "./RemoveAccount";
import { InitContent } from "../../common/styles/StyleInitPages";
import Footer from "../../components/Footer";
import MainImage from "../../components/MainImage";

interface CustomerData {
    id: string;
    name: string;
    phone: string;
    email: string;
}

export default function AccountPage() {
    const { token, decodedToken, logout } = useToken();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState<CustomerData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [editing, setEditing] = useState(false);
    const [formValues, setFormValues] = useState<CustomerData | null>(null);

    useEffect(() => {
        if (!token || !decodedToken) {
            navigate("/login");
            return;
        }

        async function fetchCustomer() {
            try {
                const response = await api.getCustomer(decodedToken ? decodedToken.id : '', token ? token : '');
                setCustomer(response.data);
                setFormValues(response.data);
            } catch (error) {
                console.error("Error fetching customer data:", error);
                toast.error("Erro ao carregar dados do cliente.");
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchCustomer();
    }, []);

    const handleEdit = () => {
        setEditing(true);
    };

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const handleCancelEdit = () => {
        setEditing(false);
        if (customer) {
            setFormValues({ ...customer });
        }
    };

    const handleSave = async () => {
        if (!formValues) return;

        try {
            setLoading(true);

            setCustomer({ ...formValues });

            await api.updateCustomer(formValues, token || "");

            toast.success("Informações atualizadas com sucesso!");
            setEditing(false);
        } catch (error) {
            console.error("Error updating customer data:", error);
            toast.error("Erro ao atualizar informações.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box maxWidth="600px" margin="0 auto" padding="32px">
                <Typography variant="h4" gutterBottom>
                    Minha Conta
                </Typography>
                <Typography color="error" variant="subtitle1">
                    Não foi possível carregar os dados. Por favor, tente novamente mais tarde.
                </Typography>
            </Box>
        );
    }

    return (
        <>
            <InitContent>
                <MainImage />
                <Box maxWidth="600px" margin="0 auto" padding="32px">

                    <Typography variant="h4" gutterBottom>
                        Minha Conta
                    </Typography>

                    {!editing ? (
                        <>
                            <Typography variant="subtitle1" gutterBottom>
                                Nome: {customer?.name}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Telefone: {customer?.phone}
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                Email: {customer?.email}
                            </Typography>
                            <Box display="flex" gap="16px" marginTop="16px">
                                <Button variant="contained" color="primary" onClick={handleEdit}>
                                    Editar Informações
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Nome"
                                value={formValues?.name || ""}
                                onChange={(e) =>
                                    setFormValues((prevValues) => ({ ...prevValues!, name: e.target.value }))
                                }
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Telefone"
                                value={formValues?.phone || ""}
                                onChange={(e) =>
                                    setFormValues((prevValues) => ({ ...prevValues!, phone: e.target.value }))
                                }
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Email"
                                value={formValues?.email || ""}
                                onChange={(e) =>
                                    setFormValues((prevValues) => ({ ...prevValues!, email: e.target.value }))
                                }
                            />
                            <Box display="flex" gap="16px" marginTop="16px">
                                <Button variant="contained" color="primary" onClick={handleSave}>
                                    Salvar
                                </Button>
                                <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
                                    Cancelar
                                </Button>
                            </Box>
                        </>
                    )}

                    <RemoveAccount setLoading={setLoading} />
                </Box>
            </InitContent>
            <Footer/>
        </>
    );
}
