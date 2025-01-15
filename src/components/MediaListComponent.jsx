import { useGlobalContext } from "../contexts/GlobalContext";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useRef } from "react";

import CardComponent from "./CardComponent";

function MediaListComponent({ mediaType }) {
    const { movies, series } = useGlobalContext();
    const mediaData = mediaType === "movies" ? movies : series;
    const myRef = useRef(null);

    function scrollLft() {
        myRef.current.scrollBy({
            left: -1200,
            behavior: "smooth",
        })
    }
    function scrollRgt() {
        myRef.current.scrollBy({
            left: 1200,
            behavior: "smooth",
        })
    }

    return (
        <section className="position-relative">
            <h3 className="p-3 text-white">{mediaType === "movies" ? "Movie" : "Serie"}</h3>
            <div className="row py-4 flex-nowrap overflow-x-scroll nobar" ref={myRef}>
                {mediaData.map((media) => (
                    <div className="col-12 col-md-6 col-lg-3" key={media.id}>
                        <CardComponent media={media} />
                    </div>
                ))}
            </div>
            <div
                className="scroll-button left"
                onClick={scrollLft}>
                <FaAngleLeft />
            </div>
            <div
                className="scroll-button right"
                onClick={scrollRgt}>
                <FaAngleRight />
            </div>
        </section >
    )
}

export default MediaListComponent;