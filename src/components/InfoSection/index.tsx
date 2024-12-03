import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";
import LoginForm from "../inputs/LoginForm";

const Container = styled(Box)({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 16px",
});

const InfoSectionContainer = styled(Box)<{ isLoggedIn: boolean }>(({ isLoggedIn }) => ({
    display: "grid",
    gridTemplateColumns: isLoggedIn ? "1fr 1fr 1fr" : "1fr 2fr",
    gap: "16px",
    marginTop: "16px",
    "@media (max-width: 749px)": {
        gridTemplateColumns: "1fr",
    },
}));

const Column = styled(Box)({
    padding: "0 16px",
    "&:not(:last-child)": {
        "@media (min-width: 750px)": {
            borderRight: "1px solid #ddd",
        },
    },
});

const isLoggedIn = true;

export default function InfoSection() {
    return (
        <Container>
        <Typography variant="h5" component="h2" gutterBottom>
            O que você precisa saber
        </Typography>
        <InfoSectionContainer isLoggedIn={isLoggedIn}>
            <Column>
            <Typography variant="h6" gutterBottom>
                Regras da Casa
            </Typography>
            <List dense>
                <ListItem>
                <ListItemText primary="Check-in após 14:00" />
                </ListItem>
                <ListItem>
                <ListItemText primary="Checkout antes das 12:00" />
                </ListItem>
                <ListItem>
                <ListItemText primary="Máximo de 4 hóspedes" />
                </ListItem>
            </List>
            {/* {isLoggedIn && (
                <Link href="#" underline="hover">
                    Mostrar mais
                </Link>
            )} */}
            </Column>

            {isLoggedIn ? (
            <>
                <Column>
                <Typography variant="h6" gutterBottom>
                    Segurança e Propriedade
                </Typography>
                <List dense>
                    <ListItem>
                    <ListItemText primary="Senha Portas: 1234" />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Senha WiFi: 123456" />
                    </ListItem>
                    <ListItem>
                    <ListItemText primary="Detector de fumaça não informado" />
                    </ListItem>
                </List>
                {/* <Link href="#" underline="hover">
                    Mostrar mais
                </Link> */}
                </Column>

                <Column>
                <Typography variant="h6" gutterBottom>
                    Contatos
                </Typography>
                <List dense>
                    <ListItem>
                        <ListItemText primary="Telefone Proprietário: (81) 98974-4485" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Telefone Adicional: (81) 99735-9190" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Telefone Polícia Militar: 190" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Telefone Bombeiros: 193" />
                    </ListItem>
                </List>
                </Column>
            </>
            ) : (
            <Column>
                <Typography variant="h6" gutterBottom>
                    Informações de contato e segurança serão exibidos apenas para hóspedes.
                </Typography>
                <LoginForm />
            </Column>
            )}
        </InfoSectionContainer>
        </Container>
    );
}
