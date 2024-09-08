import {images} from "./Images.js";

function SquareGallery ({company}) {
    return (
        <div className="gallery">
	        {company.gallery.map((photo, index) => ( 
            <img  src={images[photo[0]]} alt={images[photo[1]]}></img> ))
            }
	    </div>
    );
}

export default SquareGallery;