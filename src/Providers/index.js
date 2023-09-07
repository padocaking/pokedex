import App from "../App";
import PokedexProvider from "./PokedexProvider";
import SearchProvider from "./SearchProvider";

const Providers = () => {
    return (
        <PokedexProvider>
            <SearchProvider>
                <App />
            </SearchProvider>
        </PokedexProvider>
    );
};

export default Providers;
