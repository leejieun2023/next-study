import { CatFactType } from "@/types";

const ISRpage = async () => {
    const response = await fetch('https://catfact.ninja/fact', {
        next: {
            revalidate: 5,
        },
    });
    const result: CatFactType = await response.json();

    return (
        <div>
            {result.fact}
        </div>
    );
};

export default ISRpage;