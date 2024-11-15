import React, { useState, useRef } from "react";
import { Box, Typography, styled } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocalGuideCard from "./LocalGuideCard";
import CategoryFilter from "./CategoryFilter";

interface LocalGuideItem {
    id: number;
    title: string;
    description: string;
    time: string;
    maps: string; // Maps URL should be a complete URL
    categories: string[];
}

const mockLocalGuideData: LocalGuideItem[] = [
    { id: 1, title: "Praia Ponta Negra", description: "Beautiful beach with clear water", time: "15 min", maps: "https://www.google.com/maps", categories: ["Praia", "Paisagens"] },
    { id: 2, title: "Shopping Center", description: "Great shopping and dining options", time: "10 min", maps: "https://www.google.com/maps", categories: ["Restaurante"] },
    { id: 3, title: "Museu de Arte", description: "Explore local art and history", time: "20 min", maps: "https://www.google.com/maps", categories: ["Pontos Turisticos"] },
    { id: 4, title: "Parque Ambiental", description: "Relax in a natural park", time: "25 min", maps: "https://www.google.com/maps", categories: ["Paisagens", "Camping"] },
    { id: 5, title: "Restaurante Local", description: "Enjoy the local cuisine", time: "5 min", maps: "https://www.google.com/maps", categories: ["Restaurante"] },
    { id: 6, title: "Centro Histórico", description: "Historical landmarks and sites", time: "30 min", maps: "https://www.google.com/maps", categories: ["Pontos Turisticos"] },
];

const categories = ["Todos", "Praia", "Camping", "Restaurante", "Pontos Turisticos", "Paisagens"];

const CarouselContainer = styled("div")({
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "32px 16px",
    overflow: "hidden",
    minHeight: "300px",
});

export default function LocalGuideSlider() {
    const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
    const [filteredData, setFilteredData] = useState<LocalGuideItem[]>(mockLocalGuideData);
    const sliderRef = useRef<Slider>(null);

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        const updatedData = category === "Todos"
            ? mockLocalGuideData
            : mockLocalGuideData.filter((item) => item.categories.includes(category));
        setFilteredData(updatedData);
    };

    const settings = {
        dots: true,
        speed: 500,
        infinite: false, 
        slidesToShow: 5,
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
        <Box>
            <Box textAlign="center" padding="24px 16px">
                <Typography variant="h5" component="h2" gutterBottom>
                    Guia Local
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Rua Exemplo, nº 20 - Cabedelo, Paraíba, Brasil
                </Typography>
            </Box>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
            />

            <CarouselContainer>
                <Slider ref={sliderRef} {...settings} key={filteredData.length}>
                    {filteredData.map((place) => (
                        <LocalGuideCard
                            key={place.id}
                            title={place.title}
                            description={place.description}
                            time={place.time}
                            maps={place.maps}
                        />
                    ))}
                </Slider>
            </CarouselContainer>
        </Box>
    );
}
