import {images} from "./Images.js";

function Aircraft({ aircraft }) {
    return (
        <div className="Aircraft">
            <h2>{aircraft.name}</h2>
            <p>{aircraft.description}</p>
            <img src={images[aircraft.imageKey]} alt={aircraft.altText} />
        </div>
    );
}

export default Aircraft;
