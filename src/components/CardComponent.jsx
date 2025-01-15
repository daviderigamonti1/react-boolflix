const urlImage = import.meta.env.VITE_API_IMG;
function CardComponent({ media }) {
    const language = ["it", "es", "en", "de", "fr"];
    return (
        <div className="card">
            <img src={urlImage + media.poster_path} className="card-img" alt={media.title || media.name} />
            <div id="overlay">
                <h4 className="text-center">{media.original_title || media.original_name}</h4>
                <p className="text-center">{media.overview}</p>
                {language.includes(media.original_language) ? (
                    <div className="text-center">
                        Language:
                        <img className="text-center" src={`/img/${media.original_language}.webp`} alt={media.original_language} />
                    </div>
                ) : (
                    <p>Language: {media.original_language}</p>
                )}
            </div>
        </div >
    )
}

export default CardComponent;