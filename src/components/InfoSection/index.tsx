import React from "react";
import { Box, Typography, Link, List, ListItem, ListItemText } from "@mui/material";
import styled from "styled-components";
import LoginForm from "../inputs/LoginForm";

interface Property {
    rules: {
        check_in: string;
        check_out: string;
        guests_quantity: number;
    };
    propertySecurity: Array<{ id: number; name: string; value: string }>;
    contacts: Array<{ id: number; contact_name: string; phone: string }>;
}

interface InfoSectionProps {
    property: Property;
    isLoggedIn: boolean;
}

const Container = styled(Box)({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 16px",
});

const InfoSectionContainer = styled(Box)<{ $isLoggedIn: boolean }>(({ $isLoggedIn }) => ({
    display: "grid",
    gridTemplateColumns: $isLoggedIn ? "1fr 1fr 1fr" : "1fr 2fr",
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

export default function InfoSection({ property, isLoggedIn }: InfoSectionProps) {
    return (
        <Container>
            <Typography variant="h5" component="h2" gutterBottom>
                O que você precisa saber
            </Typography>

            <InfoSectionContainer $isLoggedIn={isLoggedIn}>
                {/* Rules Section */}
                <Column>
                    <Typography variant="h6" gutterBottom>
                        Regras da Casa
                    </Typography>
                    <List dense>
                        <ListItem>
                            <ListItemText primary={`Check-in após ${property.rules.check_in}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Checkout antes das ${property.rules.check_out}`} />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary={`Máximo de ${property.rules.guests_quantity} hóspedes`} />
                        </ListItem>
                    </List>
                </Column>

                {/* Security Section */}
                {isLoggedIn ? (
                    <>
                        <Column>
                            <Typography variant="h6" gutterBottom>
                                Segurança e Propriedade
                            </Typography>
                            <List dense>
                                {property.propertySecurity.map((security) => (
                                    <ListItem key={security.id}>
                                        <ListItemText primary={`${security.name}: ${security.value}`} />
                                    </ListItem>
                                ))}
                            </List>
                        </Column>

                        {/* Contacts Section */}
                        <Column>
                            <Typography variant="h6" gutterBottom>
                                Contatos
                            </Typography>
                            <List dense>
                                {property.contacts.map((contact) => (
                                    <ListItem key={contact.id}>
                                        <ListItemText
                                            primary={`${contact.contact_name}: ${contact.phone}`}
                                        />
                                    </ListItem>
                                ))}
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
