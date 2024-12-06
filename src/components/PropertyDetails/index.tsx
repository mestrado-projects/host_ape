import React, { useEffect, useState } from "react";
import { Box, CircularProgress } from "@mui/material";
import styled from "styled-components";
import InfoColumn from "./InfoColumn";
import Gallery from "./Gallery";
import api from "../../common/services";
import { Property } from "../../pages/Home";
import InfoSection from "../InfoSection";
import useToken from "../../common/hooks/useToken";

export interface PropertyDetailed {
    id: string;
    name: string;
    simpleLocation: string;
    about: string;
    beds: number;
    kitchen: boolean;
    bathroom: number;
    details: Array<{ id: number; name: string; value: string }>;
    commodities: Array<{ id: number; name: string; has: boolean }>;
    images: Array<{ id: number; image_name: string; url: string; image_type: string }>;
    rules: { check_in: string; check_out: string; guests_quantity: number };
    propertySecurity: Array<{ id: number; name: string; value: string }>;
    contacts: Array<{ id: number; contact_name: string; phone: string }>;
}

interface PropertyDetailsProps {
    propertyInfo: Property;
}

const Container = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 16px",
});

const LoadingContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "100%",
});

export default function PropertyDetails({ propertyInfo }: PropertyDetailsProps) {
    const [property, setProperty] = useState<PropertyDetailed | null>(null);
    const [loading, setLoading] = useState(true);
    const { token } = useToken();

    useEffect(() => {
        async function fetchProperty() {
            try {
                const response = await api.getApartmentById(propertyInfo.id);
                setProperty(response.data);
            } catch (error) {
                console.error("Error fetching property:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchProperty();
    }, [propertyInfo.id]);

    if (loading) {
        return (
            <LoadingContainer>
                <CircularProgress />
            </LoadingContainer>
        );
    }

    if (!property) {
        return (
            <LoadingContainer>
                <Box>Unable to load property details.</Box>
            </LoadingContainer>
        );
    }

    return (
        <>
            <Container>
                <InfoColumn property={property} />
                <Gallery images={property.images} />
            </Container>
            <InfoSection property={property} isLoggedIn={!!token} />
        </>
    );
}
