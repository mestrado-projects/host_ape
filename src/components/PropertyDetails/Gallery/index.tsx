import React from "react";
import { Box, Typography } from "@mui/material";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Property } from "../../../pages/Home";

interface PropertyDetailsProps {
    property: Property;
}

const ImageColumn = styled(Box)({
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export default function Gallery({ property }: PropertyDetailsProps) {
    const images = [
        {
            original: "https://via.placeholder.com/400x300",
            thumbnail: "https://via.placeholder.com/400x300",
        },
        {
            original: "https://via.placeholder.com/400x300",
            thumbnail: "https://via.placeholder.com/400x300",
        },
        {
            original: "https://via.placeholder.com/400x300",
            thumbnail: "https://via.placeholder.com/400x300",
        },
        {
            original: "https://via.placeholder.com/400x300",
            thumbnail: "https://via.placeholder.com/400x300",
        },
    ];

    return (
        <ImageColumn>
            {/* <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Reserva: {property.checkIn} - {property.checkOut}
            </Typography> */}

            <ImageGallery
                items={images}
                showThumbnails={true}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={true}
                thumbnailPosition="right"
                slideOnThumbnailOver={true}
            />
        </ImageColumn>
    );
}
