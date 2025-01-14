import { useGlobalContext } from "../contexts/GlobalContext";

function CardComponent() {
    return (
        <div className="card">
            <img src="" className="card-img" />
            <div className="card-body">
                <h5>{ }</h5>
                <p>contenuto</p>
            </div>
        </div >
    )
}

export default CardComponent;