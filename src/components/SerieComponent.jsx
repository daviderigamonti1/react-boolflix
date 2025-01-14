import { useGlobalContext } from "../contexts/GlobalContext";

import CardSerieComponent from "./CardSerieComponent";

function SerieComponent() {
    const { series } = useGlobalContext();

    return (
        <>
            <h3 className="p-3 text-white">Series</h3>
            <div className="row gy-4">
                {series.map((serie) => (
                    <div className="col-12 col-md-6 col-lg-3" key={serie.id}>
                        <CardSerieComponent serie={serie} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default SerieComponent;