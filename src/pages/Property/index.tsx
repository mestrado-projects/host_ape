import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, List, ListItem, ListItemText, styled } from "@mui/material";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import api from "../../common/services";
import Banner from "../../components/Banner";
import Image from "../Home/assets/banner.jpg"

interface Property {
    id: number;
    name: string;
    simpleLocation: string;
    about: string;
    beds: number;
    kitchen: boolean;
    bathroom: number;
    details: Array<{ id: number; name: string; value: string }>;
    commodities: Array<{ id: number; name: string; has: boolean }>;
    images: Array<{ id: number; image_name: string; url: string, image_type: string }>;
    rules: { check_in: string; check_out: string; guests_quantity: number };
    propertySecurity: Array<{ id: number; name: string; value: string }>;
    contacts: Array<{ id: number; contact_name: string; phone: string }>;
}

const Container = styled(Box)({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "400px",
});

const ResponsiveLayout = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    width: "100%",
    "@media (min-width: 1024px)": {
        flexDirection: "row",
        alignItems: "flex-start",
    },
});

const DetailsColumn = styled(Box)({
    flex: 2,
    display: "flex",
    flexDirection: "column",
    gap: "32px",
});

const CommodityContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "has"
    })<{ has: boolean }>(({ has }) => ({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    opacity: has ? 1 : 0.8,
    filter: has ? "none" : "grayscale(100%)",
    transition: "all 0.3s ease",
}));

const Column = styled(Box)({
    flex: 2,
    display: "flex",
    justifyContent: "space-between",
    gap: "32px",
    flexWrap: "wrap",

    "@media (min-width: 1024px)": {
        display: "block",
    },
});

const ImageColumn = styled(Box)({
    flex: 1,
    "@media (min-width: 1024px)": {
        marginLeft: "16px",
    },
    "& .image-gallery-content": {
        width: "100%",
    },
});

export default function Property() {
    const { id } = useParams<{ id: string }>();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProperty() {
        try {
            const response = await api.getApartmentById(id!);
            setProperty(response.data);
        } catch (error) {
            console.error("Error fetching property:", error);
        } finally {
            setLoading(false);
        }
    }

    fetchProperty();
    }, [id]);

    const renderImages = () => {
        if (!property?.images) return [];
        return property.images
            .filter((image) => image.image_type !== "Thumb")
            .map((image) => ({
                original: image.url,
                thumbnail: image.url,
            }));
    };

    if (loading) {
        return (
        <Container>
            <CircularProgress color="primary" />
        </Container>
        );
    }

    if (!property) {
        return (
        <Container>
            <Typography variant="h6" color="error">
            Não foi possível carregar os detalhes da propriedade.
            </Typography>
        </Container>
        );
    }

    return (
        <>
            <Banner
                title="Já se hospedou conosco? Aproveite ofertas especiais."
                subtitle="Clientes que já se hospedaram ganham descontos especiais e vantagens únicas na próxima reserva."
                backgroundImage={Image}
            />
            <Container>
                <Typography variant="h4" gutterBottom>
                    {property.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                    {property.simpleLocation}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                    {property.about}
                </Typography>

                <ResponsiveLayout>
                    <DetailsColumn>
                        <Box>
                            <Typography variant="h6" gutterBottom>
                            Detalhes
                            </Typography>
                            <Box display="flex" flexWrap="wrap" gap="16px">
                            {property.details.map((detail) => (
                                <Typography key={detail.id} variant="body2">
                                <strong>{detail.name}:</strong> {detail.value}
                                </Typography>
                            ))}
                            </Box>
                        </Box>

                        <Box>
                            <Typography variant="h6" gutterBottom>
                            Comodidades
                            </Typography>
                            <Box display="flex" flexWrap="wrap" gap="16px">
                                {property.commodities.map((commodity) => (
                                <CommodityContainer key={commodity.name} has={commodity.has}>
                                    <Typography
                                        variant="body2"
                                        color={commodity.has ? "primary" : "textSecondary"}
                                        sx={{
                                            fontWeight: commodity.has ? "bold" : "normal", // Bold text for available items
                                        }}
                                    >
                                        ✅ {commodity.name}
                                    </Typography>
                                </CommodityContainer>
                                ))}
                            </Box>
                        </Box>

                        <Column>
                            <Box>
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
                            </Box>

                            <Box>
                                <Typography variant="h6" gutterBottom>
                                Contatos
                                </Typography>
                                <List dense>
                                {property.contacts.map((contact) => (
                                    <ListItem key={contact.id}>
                                    <ListItemText primary={`${contact.contact_name}: ${contact.phone}`} />
                                    </ListItem>
                                ))}
                                </List>
                            </Box>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                Segurança
                                </Typography>
                                <List dense>
                                {property.propertySecurity.map((security) => (
                                    <ListItem key={security.id}>
                                    <ListItemText primary={`${security.name}: ${security.value}`} />
                                    </ListItem>
                                ))}
                                </List>
                            </Box>
                        </Column>

                    </DetailsColumn>

                    <ImageColumn>
                        <ImageGallery
                            items={renderImages()}
                            showThumbnails={true}
                            showNav={true}
                            showPlayButton={false}
                            showFullscreenButton={true}
                            thumbnailPosition="bottom"
                        />
                    </ImageColumn>
                </ResponsiveLayout>
            </Container>
        </>
    );
}
