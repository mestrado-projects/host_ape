import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { Property } from "../../../pages/Home";

interface PropertyDetailsProps {
    property: Property;
}

const TextColumn = styled(Box)({
    flex: 1,
    paddingRight: "24px",
});

const IconInfo = styled(Typography)({
    display: "inline-block",
    marginRight: "16px",
    fontSize: "0.875rem",
    color: "#555",
});

export default function InfoColumn({ property }: PropertyDetailsProps) {
    return (
        <TextColumn>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Subtitle, explicando que é sobre o apartamento selecionado
            </Typography>
            <Typography variant="h4" gutterBottom>
                {property.name}
            </Typography>
            
            <Box mb={2}>
                <IconInfo>📍 Location + Info</IconInfo>
                <IconInfo>🛏️ Beds + Info</IconInfo>
                <IconInfo>🍽️ Kitchen + Info</IconInfo>
                <IconInfo>🛁 Bath + Info</IconInfo>
            </Box>

            <Typography variant="h6" gutterBottom>
                Sobre
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
                {property.description}
            </Typography>

            <Button variant="text" color="primary">
                Ver mais
            </Button>
        </TextColumn>
    );
}
