"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Home() {
    const [username] = useState("vaishnavan");
    const ref = useRef(null);
    // console.log(document.getElementById("__NEXT"));
    useEffect(() => {
        ref.current.style.color = "red";
    }, []);

    // if (typeof window === "undefined") {
    //     //client side code
    // }

    return <h1 ref={ref}>{username}</h1>;
}
