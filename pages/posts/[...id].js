import React from "react";
import { useRouter } from "next/router";

export default function PostDetail() {
    const router = useRouter();
    var queryValue = router.query.id;
    return (
        <>
            <h1>hello Detail {queryValue}</h1>
        </>
    );
}
