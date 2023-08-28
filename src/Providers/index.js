import App from "../App";
import SearchProvider from "./SearchProvider";

const Providers = ({ children }) => {
    return (
        <SearchProvider>
            <App />
        </SearchProvider>
    );
};

export default Providers;
