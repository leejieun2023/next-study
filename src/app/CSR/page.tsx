"use client"

import { CatFactType } from "@/types";
import { useEffect, useState } from "react";

const CSRpage = () => {
    const [catFact, setCatFact] = useState<CatFactType | null>(null);
    const fetchdata = async () => {
        const response = await fetch('https://catfact.ninja/fact');
        const result: CatFactType = await response.json();
        setCatFact(result);
    };

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            {catFact?.fact}
        </div>
    );
};

export default CSRpage;