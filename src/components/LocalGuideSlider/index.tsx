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
    maps: string;
    image: string;
    categories: string[];
}

const mockLocalGuideData: LocalGuideItem[] = [
    { id: 1, title: "Praia de Areia Vermelha", description: "A ilha de areia vermelha é um banco de areia que surge no meio do mar durante a mare baixa", time: "3 min", maps: "https://maps.app.goo.gl/e1G1vKpwMDXtVgqKA", image: 'https://www.essemundoenosso.com.br/wp-content/uploads/2023/03/areia-vermelha-jjoao-pessoa-dest.jpg', categories: ["Praia", "Paisagens", "Pontos Turisticos"] },
    { id: 2, title: "Dique de Cabedelo", description: "Encontro do mar com o rio Paraiba", time: "12 min", maps: "https://maps.app.goo.gl/N2WRdEQZnxjQLNiq6", image: 'https://www.maisturismoecultura.com.br/wp-content/uploads/bfi_thumb/740b6d66-25fb-42e6-b586-5588dd78d5b6-e1655127466961-1zgxoiu3au36ozi3oyr5vq86ltptqf4d4xigydx9oudg.jpg', categories: ["Pontos Turisticos", "Paisagens"] },
    { id: 3, title: "Shopping Manaíra", description: "Décimo maior shopping do Brasil", time: "23 min", maps: "https://maps.app.goo.gl/gTHYKgDb7YHrLTp46", image: 'https://turismoemfoco.com.br/v1/wp-content/uploads/2022/01/Manaira-Shopping-1.jpg', categories: ["Restaurante"] },
    { id: 4, title: "Fascino Medieval", description: "Restaurante lúdico com cenários temáticos", time: "25 min", maps: "https://maps.app.goo.gl/TTEjdshGQwfN4e6o8", image: 'https://ovicio.com.br/wp-content/uploads/2023/01/20230119-fmdvsqpwibuywek.jpg', categories: ["Restaurante", "Pontos Turisticos"] },
    { id: 5, title: "Ilha Dourada", description: "Restaurante com atendimento na praia", time: "3 min", maps: "https://maps.app.goo.gl/gttgryQ3Xue1sQzu9", image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/fb/b5/c1/img-20200222-wa0017-largejpg.jpg', categories: ["Restaurante", "Praia"] },
    { id: 6, title: "Mangai", description: "Restaurante típico nordestino", time: "28 min", maps: "https://maps.app.goo.gl/iKmmHE17Q3jhYx1LA", image: 'https://clickpb-wordpress.s3.amazonaws.com/wp-content/uploads/2023/12/31130438/mangai2_jp_divulgacao.jpg', categories: ["Restaurante"] },
];

const categories = ["Todos", "Praia", "Restaurante", "Pontos Turisticos", "Paisagens"];

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
            { breakpoint: 1100, settings: { slidesToShow: 4 } },
            { breakpoint: 900, settings: { slidesToShow: 3 } },
            { breakpoint: 700, settings: { slidesToShow: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 1 } }
        ],
    };

    return (
        <Box>
            <Box textAlign="center" padding="24px 16px">
                <Typography variant="h5" component="h2" gutterBottom>
                    Guia Local
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                    Cabedelo, Paraíba, Brasil
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
                            image={place.image}
                        />
                    ))}
                </Slider>
            </CarouselContainer>
        </Box>
    );
}
