"use client";
import { Layout } from "@/components";
/* eslint-disable react/prop-types */
import React from "react";
// import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
