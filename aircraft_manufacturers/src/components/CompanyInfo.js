import {images} from "./Images.js";

function CompanyInfo ({company}) {
    return (
        <>
        <div className="companyContainer">
	        <h2 className="company"> {company.name} </h2>
	        <img src={images[company.companyLogo.imageKey]} alt={company.companyLogo.altText} className="logo" />
	    </div>
        <p className="homeParagraph"> {company.introduction} </p>
        </>
    );
}

export default CompanyInfo;