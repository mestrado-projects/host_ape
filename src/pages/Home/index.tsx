import React, { useState, useEffect } from "react";
import PropertiesCards from "../../components/PropertiesCards";
import PropertyDetails from "../../components/PropertyDetails";
import Banner from "../../components/Banner";
import LocalGuideSlider from "../../components/LocalGuideSlider";
import ScheduleGuide from "../../components/ScheduleGuide";
import FAQs from "../../components/Faq";
import Footer from "../../components/Footer";
import api from "../../common/services";
import Image from "./assets/banner.jpg";

export interface Property {
    id: string;
    name: string;
    simpleLocation: string;
    basicPrice: number;
    type: string;
    imageThumbUrl: string;
}

export default function Home() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [activeProperty, setActiveProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const response = await api.getApartments();
                setProperties(response.data);
                setActiveProperty(response.data[0]);
                setLoading(false);
            } catch (err: any) {
                console.error("Error fetching properties:", err);
                setError("Could not fetch properties. Please try again later.");
                setLoading(false);
            }
        };
        fetchProperties();
    }, []);

    const handleSetActiveProperty = (property: Property) => {
        setActiveProperty(property);
    };

    return (
        <div>
            <Banner
                title="Já se hospedou conosco? Aproveite ofertas especiais."
                subtitle="Clientes que já se hospedaram ganham descontos especiais e vantagens únicas na próxima reserva."
                backgroundImage={Image}
            />
            <ScheduleGuide />
            <PropertiesCards
                properties={properties}
                activeProperty={activeProperty}
                loading={loading}
                setActiveProperty={handleSetActiveProperty}
            />
            {activeProperty && <PropertyDetails propertyInfo={activeProperty} />}
            <LocalGuideSlider />
            <FAQs preview={true} />
            <Footer />
        </div>
    );
}
