const urlImage = import.meta.env.VITE_API_IMG;

function CardMovieComponent({ movie }) {
    return (
        <div className="card">
            <img src={urlImage + movie.poster_path} className="card-img" />
            <div id="overlay">
                <h4>Original title: {movie.original_title}</h4>
                <h5>Title: {movie.title}</h5>
                <p>{movie.overview}</p>
                <p>Language: {movie.original_language}</p>
            </div>
        </div >
    )
}

export default CardMovieComponent;