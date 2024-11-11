import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
`;

const Section = styled.section`
    width: 80%;
    margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 20px;
    color: #333;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

const Card = styled.div`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: calc(33.33% - 20px);
    background-color: #f9f9f9;
`;

const PropertyTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
`;

const PropertyInfo = styled.p`
    font-size: 0.9rem;
    color: #555;
`;

interface Property {
    id: number;
    name: string;
    location: string;
    price: string;
}

interface Reservation {
    id: number;
    property: string;
    checkIn: string;
    checkOut: string;
}

interface Accommodation {
    id: number;
    address: string;
    wifiPassword: string;
    doorCode: string;
}

const properties: Property[] = [
    { id: 1, name: 'Luxury Apartment', location: 'Downtown', price: '$120/night' },
    { id: 2, name: 'Beachside Condo', location: 'Seaside', price: '$150/night' },
    { id: 3, name: 'Cozy Cabin', location: 'Mountain', price: '$90/night' },
];

const reservations: Reservation[] = [
    { id: 1, property: 'Luxury Apartment', checkIn: '2024-11-15', checkOut: '2024-11-18' },
    { id: 2, property: 'Beachside Condo', checkIn: '2024-12-01', checkOut: '2024-12-05' },
];

const accommodations: Accommodation[] = [
    { id: 1, address: '123 Ocean Drive, Seaside', wifiPassword: 'ocean123', doorCode: '4567' },
    { id: 2, address: '789 Mountain Rd, Peakview', wifiPassword: 'cabin567', doorCode: '8910' },
];

export default function Home() {
    return (
        <HomeContainer>
            <Section>
                <SectionTitle>Available Properties</SectionTitle>
                <CardContainer>
                    {properties.map((property) => (
                        <Card key={property.id}>
                            <PropertyTitle>{property.name}</PropertyTitle>
                            <PropertyInfo>Location: {property.location}</PropertyInfo>
                            <PropertyInfo>Price: {property.price}</PropertyInfo>
                        </Card>
                    ))}
                </CardContainer>
            </Section>

            <Section>
                <SectionTitle>Your Reservations</SectionTitle>
                <CardContainer>
                    {reservations.map((reservation) => (
                        <Card key={reservation.id}>
                            <PropertyTitle>Property: {reservation.property}</PropertyTitle>
                            <PropertyInfo>Check-In: {reservation.checkIn}</PropertyInfo>
                            <PropertyInfo>Check-Out: {reservation.checkOut}</PropertyInfo>
                        </Card>
                    ))}
                </CardContainer>
            </Section>

            <Section>
                <SectionTitle>Accommodation Details</SectionTitle>
                <CardContainer>
                    {accommodations.map((accommodation) => (
                        <Card key={accommodation.id}>
                            <PropertyTitle>Address: {accommodation.address}</PropertyTitle>
                            <PropertyInfo>WiFi Password: {accommodation.wifiPassword}</PropertyInfo>
                            <PropertyInfo>Door Code: {accommodation.doorCode}</PropertyInfo>
                        </Card>
                    ))}
                </CardContainer>
            </Section>
        </HomeContainer>
    );
}
