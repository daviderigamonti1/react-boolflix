import { useState, createContext, useContext } from "react";
const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState([]);

    return (
        <GlobalContext.Provider value={{ movies, setMovies, series, setSeries, search, setSearch }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };