import MovieComponent from "./MovieComponent";
import SerieComponent from "./SerieComponent";

function MainComponent() {

    return (
        <main>
            <div className="container">
                <MovieComponent />
                <SerieComponent />
            </div>
        </main>
    )
}

export default MainComponent;