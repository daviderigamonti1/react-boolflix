import { useGlobalContext } from "../contexts/GlobalContext";

function HeaderComponent() {
    const { search, setSearch, getData } = useGlobalContext();

    function handleInput(e) {
        const searchValue = e.target.value;
        setSearch(searchValue);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        getData(search, "movie");
        getData(search, "tv")
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