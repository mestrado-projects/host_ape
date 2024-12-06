import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PropertyDetailed } from "../index";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

interface PropertyDetailsProps {
    property: PropertyDetailed;
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
    const navigate = useNavigate();

    const handleViewMore = () => {
        navigate(`/propriedade/${property.id}`);
    };

    return (
        <TextColumn>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Informações sobre o apartamento selecionado
            </Typography>
            <Typography variant="h4" gutterBottom>
                {property.name}
            </Typography>

            <Box mb={2} gap={1} display={"flex"} flexWrap={"wrap"}>
                <IconInfo>📍 {property.simpleLocation}</IconInfo>
                <IconInfo>🛏️ {property.beds} camas</IconInfo>
                <IconInfo>🍽️ {property.kitchen ? "Cozinha disponível" : "Sem cozinha"}</IconInfo>
                <IconInfo>🛁 {property.bathroom} banheiros</IconInfo>
            </Box>

            <Typography variant="h6" gutterBottom>
                Sobre
            </Typography>
            <Typography variant="body1" color="textSecondary" gutterBottom>
                {property.about}
            </Typography>

            <Button
                variant="text"
                color="primary"
                onClick={handleViewMore}
                startIcon={<OpenInNewIcon />}
            >
                TUDO SOBRE A PROPRIEDADE
            </Button>
        </TextColumn>
    );
}
