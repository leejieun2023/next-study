import { CatFactType } from "@/types";

const SSGpage = async () => {
    const response = await fetch('https://catfact.ninja/fact');
    const result: CatFactType = await response.json();

    return (
        <div>
            {result.fact}
        </div>
    );
};

export default SSGpage;