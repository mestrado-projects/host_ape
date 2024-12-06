import React from "react";
import Banner from "../../components/Banner";
import Image from '../Home/assets/banner.jpg'
import FAQs from "../../components/Faq";
import Footer from "../../components/Footer";

export default function FaqPage() {

    return (
        <div>
            <Banner
                title="Já se hospedou conosco? Aproveite ofertas especiais."
                subtitle="Clientes que já se hospedaram ganham descontos especiais e vantagens únicas na próxima reserva."
                backgroundImage={Image}
            />
            <FAQs preview={false} />
            <Footer />
        </div>
    );
}