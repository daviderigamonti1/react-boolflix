import axios from "axios";
import { useState, createContext, useContext } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState([]);

    function getData(query, endpoint) {
        axios
            .get(apiUrl + "/search/" + endpoint, {
                params: {
                    api_key: key,
                    query
                }
            })
            .then((res) => {
                console.log(res);
                if (endpoint === "movie") {
                    setMovies(res.data.results);
                } else {
                    setSeries(res.data.results)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            })
    }
    return (
        <GlobalContext.Provider value={{ movies, setMovies, series, setSeries, search, setSearch, getData }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };