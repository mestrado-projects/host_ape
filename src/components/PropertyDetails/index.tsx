import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import { Property } from "../../pages/Home";
import InfoColumn from "./InfoColumn";
import Gallery from "./Gallery";

interface PropertyDetailsProps {
    property: Property;
}

const Container = styled(Box)({
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 16px",
});

export default function PropertyDetails({ property }: PropertyDetailsProps) {
    return (
        <Container>
            <InfoColumn property={property}/>
            <Gallery property={property}/>
        </Container>
    );
}
