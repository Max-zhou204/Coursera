import Aircraft from "./Aircraft.js";
import {images} from "./Images.js";

function Manufacturer ({company}) {
    return (
        <>
        <div className="companyContainer" style={{marginTop: "60px"}}>
            <h1 className="company">{company.name}</h1>
            <img src={images[company.companyLogo.imageKey]} alt={company.companyLogo.altText} className="logo-sm"/>
        </div>
        <section className="grid">
            {company.aircraftsData.map((aircraft, index) => (
                <Aircraft key={index} aircraft={aircraft} />
            ))}
        </section>
        </>
    );
}

export default Manufacturer;