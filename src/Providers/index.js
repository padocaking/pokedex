import App from "../App";
import PokedexProvider from "./PokedexProvider";
import SearchProvider from "./SearchProvider";

const Providers = () => {
    return (
        <SearchProvider>
            <PokedexProvider>
                    <App />
            </PokedexProvider>
        </SearchProvider>
    );
};

export default Providers;
