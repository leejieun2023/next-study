import { CatFactType } from "@/types";

const SSRpage = async () => {
    const response = await fetch('https://catfact.ninja/fact', {
        cache: "no-cache",
    });
    const result: CatFactType = await response.json();

    return (
        <div>
            {result.fact}
        </div>
    );
};

export default SSRpage;