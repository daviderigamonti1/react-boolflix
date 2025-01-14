import { useGlobalContext } from "../contexts/GlobalContext";

import CardMovieComponent from "./CardMovieComponent";

function MovieComponent() {
    const { movies } = useGlobalContext();

    return (
        <>
            <h3 className="p-3 text-white">Movies</h3>
            <div className="row gy-4">
                {movies.map((movie) => (
                    <div className="col-12 col-md-6 col-lg-3" key={movie.id}>
                        <CardMovieComponent movie={movie} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default MovieComponent;