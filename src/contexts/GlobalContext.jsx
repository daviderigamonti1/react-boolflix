import axios from "axios";
import { useState, createContext, useContext } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState([]);
    const [cast, setCast] = useState([]);

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
                    res.data.results.forEach((movie) => {
                        axios
                            .get(`${apiUrl}/movie/${movie.id}/credits`, {
                                params: {
                                    api_key: key,
                                }
                            })
                            .then((castRes) => {
                                setCast((prevCast) => [
                                    ...prevCast,
                                    { movieId: movie.id, cast: castRes.data.cast }
                                ]);
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                            .finally(() => {
                                console.log("finally");
                            })
                    })

                } else {
                    setSeries(res.data.results);
                    res.data.results.forEach((serie) => {
                        axios
                            .get(`${apiUrl}/tv/${serie.id}/credits`, {
                                params: {
                                    api_key: key,
                                }
                            })
                            .then((castRes) => {
                                setCast((prevCast) => [
                                    ...prevCast,
                                    { seriesId: serie.id, cast: castRes.data.cast }
                                ]);
                            })
                            .catch((error) => {
                                console.log(error);
                            })
                            .finally(() => {
                                console.log("finally");
                            })
                    })
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
        <GlobalContext.Provider value={{ movies, setMovies, series, setSeries, search, setSearch, cast, setCast, getData }}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    const context = useContext(GlobalContext);
    return context;
}

export { GlobalProvider, useGlobalContext };