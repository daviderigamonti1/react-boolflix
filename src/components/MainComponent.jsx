import { useGlobalContext } from "../contexts/GlobalContext";
import MediaListComponent from "./MediaListComponent";

function MainComponent() {
    const { movies, series } = useGlobalContext();

    return (
        <main>
            {movies.length > 0 || series.length > 0 ? (
                <div className="container">
                    {movies.length > 0 && <MediaListComponent mediaType="movies" />}
                    {series.length > 0 && <MediaListComponent mediaType="series" />}
                </div>
            ) : (
                <h2 className="text-white text-center">Cerca film o serie per iniziare</h2>
            )}
        </main>
    )
}

export default MainComponent;