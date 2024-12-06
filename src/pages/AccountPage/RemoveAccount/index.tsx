import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useToken from "../../../common/hooks/useToken";
import api from "../../../common/services";

interface RemoveAccountProps {
    setLoading: (value: boolean) => void;
}

export default function RemoveAccount({ setLoading }: RemoveAccountProps) {
    const { token, logout, decodedToken } = useToken();
    const navigate = useNavigate();

    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false); // State to toggle visibility

    const handleDeleteAccount = async () => {
        try {
            setLoading(true);
            await api.deleteCustomer(decodedToken ? decodedToken.id : "", token ? token : "");
            toast.success("Conta excluída com sucesso.");
            logout();
            navigate("/login");
        } catch (error) {
            console.error("Error deleting account:", error);
            toast.error("Erro ao excluir conta.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box>
            <Box display="flex" alignItems="center" gap="8px" sx={{ mt: 4 }}>
                <Typography variant="body2" color="textSecondary">
                    Pensando na nova LGPD você pode solicitar a exclusão dos seus dados. Essa ação é
                    definitiva e não poderá ser desfeita.
                </Typography>
                <IconButton onClick={() => setIsVisible(!isVisible)} size="small">
                    {isVisible ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </IconButton>
            </Box>

            {isVisible && (
                <>
                    <Button
                        variant="text"
                        color="error"
                        onClick={() => setDeleteModalOpen(true)}
                        sx={{ mt: 1 }}
                    >
                        Excluir Conta
                    </Button>

                    <Dialog open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)}>
                        <DialogTitle>Confirmar Exclusão</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Tem certeza de que deseja excluir sua conta? Essa ação é definitiva e não poderá
                                ser desfeita.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => setDeleteModalOpen(false)} color="primary">
                                Cancelar
                            </Button>
                            <Button onClick={handleDeleteAccount} color="error">
                                Excluir
                            </Button>
                        </DialogActions>
                    </Dialog>
                </>
            )}
        </Box>
    );
}
