import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";

const Container = styled(Box)({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 16px",
});

const InfoSectionContainer = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    marginTop: "16px",
});

const Column = styled(Box)({
    flex: "1",
    padding: "0 16px",
    "&:not(:last-child)": {
        borderRight: "1px solid #ddd",
    },
});

export default function InfoSection() {
    return (
        <Container>
            <Typography variant="h5" component="h2" gutterBottom>
                O que você precisa saber
            </Typography>
            <InfoSectionContainer>
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
                    <Link href="#" underline="hover">
                        Mostrar mais
                    </Link>
                </Column>

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
                    <Link href="#" underline="hover">
                        Mostrar mais
                    </Link>
                </Column>

                <Column>
                    <Typography variant="h6" gutterBottom>
                        Contatos
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemText primary="Telefone Proprietário: (00) 91234-5678" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Telefone Portaria: 123" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Telefone Polícia Militar: 190" />
                        </ListItem>
                    </List>
                    <Link href="#" underline="hover">
                        Mostrar mais
                    </Link>
                </Column>
            </InfoSectionContainer>
        </Container>
    );
}
