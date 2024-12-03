import React from "react";
import PropertiesCard from "./PropertiesCard";
import { Box, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Property } from "../../pages/Home";

interface PropertiesCardsProps {
    properties: Property[];
    activeProperty: Property;
    setActiveProperty: (property: Property) => void;
}

const CarouselContainer = styled("div")({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 16px",
    overflow: "hidden",
    ".slick-list": {
        overflow: "hidden",
    },
    ".slick-track": {
        display: "flex",
    },
});

export default function PropertiesCards({
    properties,
    activeProperty,
    setActiveProperty,
}: PropertiesCardsProps) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 5 } },
            { breakpoint: 900, settings: { slidesToShow: 4 } },
            { breakpoint: 700, settings: { slidesToShow: 3 } },
            { breakpoint: 500, settings: { slidesToShow: 2 } },
            { breakpoint: 350, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <>
            <Box textAlign="center" padding="24px 16px">
                <Typography variant="h4" component="h1" gutterBottom>
                    Apartamentos
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                Escolha entre nossas opções exclusivas e aproveite o conforto, a localização ideal e os benefícios pensados para você.
                </Typography>
            </Box>

            <CarouselContainer>
                <Slider {...settings}>
                    {properties.map((property) => (
                        <PropertiesCard
                            key={property.id}
                            title={property.name}
                            description={property.location}
                            active={property.id === activeProperty.id}
                            onClick={() => setActiveProperty(property)}
                        />
                    ))}
                </Slider>
            </CarouselContainer>
        </>
    );
}
