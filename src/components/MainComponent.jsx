import axios from "axios";
import { useGlobalContext } from "../contexts/GlobalContext";

function MainComponent() {
    const { movies, setMovies } = useGlobalContext();

    function getData() {

    }
    return (
        <main>
            <div className="row gy-4">
                {movies.map((movie) => (
                    <div className="col-12 col-md-6-col-lg-4" key={movie.id}>
                        <CardComponent />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default MainComponent;