import axios from "axios";
import { useGlobalContext } from "../contexts/GlobalContext";

const apiUrl = import.meta.env.VITE_API_URL;
const key = import.meta.env.VITE_API_KEY;

function HeaderComponent() {
    const { search, setSearch, setMovies, setSeries } = useGlobalContext();

    function handleInput(e) {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        axios
            .get(apiUrl + "/search/movie", {
                params: {
                    api_key: key,
                    query: search
                }
            })
            .then((res) => {
                console.log(res);
                setMovies(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            })

        axios
            .get(apiUrl + "/search/tv", {
                params: {
                    api_key: key,
                    query: search
                }
            })
            .then((res) => {
                console.log(res);
                setSeries(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally");
            })
    }

    return (
        <header>
            <h1 className="logo">Boolflix</h1>
            <form onSubmit={handleSearch}>
                <nav className="navbar p-1">
                    <input
                        type="search"
                        name="search"
                        className="m-2"
                        value={search}
                        onChange={handleInput} placeholder="Search"
                    />
                    <button type="submit">
                        Search
                    </button>
                </nav>
            </form>
        </header>
    )
}

export default HeaderComponent;