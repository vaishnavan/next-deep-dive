/* eslint-disable react/prop-types */
import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}
