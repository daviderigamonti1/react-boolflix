import { useGlobalContext } from "../contexts/GlobalContext";
const urlImage = import.meta.env.VITE_API_IMG;

function CardComponent({ media }) {
    const { cast } = useGlobalContext();
    const vote = Math.floor(media.vote_average / 2);
    const language = ["it", "es", "en", "de", "fr"];

    const mediaCast = cast.find((item) =>
        (media.title ? item.movieId === media.id : item.serieId === media.id)
    );
    const castString = mediaCast ? mediaCast.cast.map(actor => actor.name).splice(0, 5).join(", ") : "No cast available";

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
                <p>Cast: {castString}</p>
            </div>
        </div >
    );
}

export default CardComponent;