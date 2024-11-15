import React, { useState } from "react";
import PropertiesCards from "../../components/PropertiesCards";
import PropertyDetails from "../../components/PropertyDetails";
import InfoSection from "../../components/InfoSection";
import Banner from "../../components/Banner";
import LocalGuideSlider from "../../components/LocalGuideSlider";
import ScheduleGuide from "../../components/ScheduleGuide";

export interface Property {
    id: number;
    name: string;
    location: string;
    description: string;
    checkIn: string;
    checkOut: string;
    active?: boolean;
}

const propertiesData: Property[] = [
    {
        id: 1,
        name: "Luxury Apartment",
        location: "Downtown",
        description: "Aproveite tudo o que o litoral norte paraibano oferece! A 200 metros da praia...",
        checkIn: "2024-11-17",
        checkOut: "2024-11-22",
    },
    {
        id: 2,
        name: "Beachside Condo",
        location: "Seaside",
        description: "Desfrute de uma vista espetacular do oceano em nosso condomínio à beira-mar...",
        checkIn: "2024-12-01",
        checkOut: "2024-12-05",
    },
    {
        id: 3,
        name: "Cozy Cabin",
        location: "Mountain",
        description: "Relaxe em uma cabana aconchegante nas montanhas com fácil acesso a trilhas...",
        checkIn: "2024-12-10",
        checkOut: "2024-12-15",
    },
];

export default function Home() {
    const [activeProperty, setActiveProperty] = useState<Property>(propertiesData[0]);

    const handleSetActiveProperty = (property: Property) => {
        setActiveProperty(property);
    };

    return (
        <div>
            <Banner
                title="Welcome to Our Properties"
                subtitle="Find your perfect stay with us"
                backgroundImage="https://via.placeholder.com/1920x400"
                buttonText="Explore Now"
                onButtonClick={() => console.log("Explore Now clicked")}
            />
            <ScheduleGuide />
            <PropertiesCards
                properties={propertiesData}
                activeProperty={activeProperty}
                setActiveProperty={handleSetActiveProperty}
            />
            <PropertyDetails property={activeProperty} />
            <InfoSection />
            <LocalGuideSlider />
        </div>
    );
}