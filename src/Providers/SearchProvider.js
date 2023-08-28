import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [types, setTypes] = useState([]);
    const [weakness, setWeakness] = useState([]);
    const [gen, setGen] = useState([]);

    const insertSearch = (type, array, setArray) => {
        if (array.includes(type)) {
            setArray(array.filter((item) => item !== type));
        } else {
            setArray([...array, type]);
        }
    };

    const advancedSearch = {
        types,
        weakness,
        gen,
    };

    return (
        <SearchContext.Provider
            value={{
                search,
                setSearch,
                advancedSearch,
                types,
                setTypes,
                weakness,
                setWeakness,
                gen,
                setGen,
                insertSearch,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);

export default SearchProvider;
