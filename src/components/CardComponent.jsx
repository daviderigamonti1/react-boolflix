const urlImage = import.meta.env.VITE_API_IMG;

function CardComponent({ media }) {
    return (
        <div className="card">
            <img src={urlImage + media.poster_path} className="card-img" alt={media.title || media.name} />
            <div id="overlay">
                <h4>Original title: {media.original_name}</h4>
                <h5>Title: {media.title || media.name}</h5>
                <p>{media.overview}</p>
                <p>Language: {media.original_language}</p>
            </div>
        </div >
    )
}

export default CardComponent;