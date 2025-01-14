const urlImage = import.meta.env.VITE_API_IMG;

function CardSerieComponent({ serie }) {
    return (
        <div className="card">
            <img src={urlImage + serie.poster_path} className="card-img" />
            <div id="overlay">
                <h4>Original title: {serie.original_name}</h4>
                <h5>Title: {serie.name}</h5>
                <p>{serie.overview}</p>
                <p>Language: {serie.original_language}</p>
            </div>
        </div >
    )
}

export default CardSerieComponent;