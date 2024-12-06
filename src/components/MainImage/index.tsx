import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../common/assets/home.svg";

export default function MainImage() {
    return (
        <Link to="/" style={{ display: "inline-block" }}>
            <img
                height={300}
                width={300}
                src={Logo}
                alt="Logo"
                style={{ display: "block", margin: "0 auto" }}
            />
        </Link>
    );
}
