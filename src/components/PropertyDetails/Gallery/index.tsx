import React from "react";
import { Box, styled } from "@mui/material";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface GalleryProps {
    images: Array<{ id: number; image_name: string; url: string; image_type: string }>;
}

const ImageColumn = styled(Box)({
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});

export default function Gallery({ images }: GalleryProps) {
    const filteredImages = images.filter((image) => image.image_type !== "Thumb");

    const galleryItems = filteredImages.map((image) => ({
        original: image.url,
        thumbnail: image.url,
    }));

    return (
        <ImageColumn>
            <ImageGallery
                items={galleryItems}
                showThumbnails
                showNav={false}
                showPlayButton={false}
                thumbnailPosition="right"
                slideOnThumbnailOver
            />
        </ImageColumn>
    );
}
