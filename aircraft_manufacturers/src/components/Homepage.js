import SquareGallery from "./SquareGallery";
import {Airbus, Boeing} from "./ManufacturersData";
import CompanyInfo from "./CompanyInfo";

function Homepage () {
    return (
        <main>
        <h1 id="title">Introduction to the 2 major aircraft manufacturers</h1>
        <section id="intro">
            <h2>Brief History</h2>
            <p className="homeParagraph">
                Boeing, founded in 1916 by William E. Boeing in Seattle, Washington, has been a stalwart in aviation history, originally producing wooden seaplanes. Its first major commercial aircraft, the Boeing 247, revolutionized air travel in the 1930s by introducing an all-metal monoplane design. The development of the 707 in the 1950s marked Boeing’s entry into the jet age, setting the stage for it becoming a dominant force in commercial aviation. The subsequent launches of the 747, the iconic jumbo jet, and the 787 Dreamliner have underscored Boeing’s commitment to innovation. Boeing has also been a significant player in defense and space sectors, producing military aircraft and spacecraft.
                <br /><br />
                Airbus, established in 1970 as a European consortium consisting of aerospace manufacturers from France, Germany, and the UK, was a direct response to the American dominance in commercial aviation. Airbus's approach was to share manufacturing and financial risks by pooling resources across national borders, a novel strategy at the time. Its first aircraft, the A300, was the world’s first twin-engine wide-body jet, which made its first flight in 1972. Airbus introduced innovations such as fly-by-wire control systems and the use of lightweight composites. With the introduction of the A320 in the 1980s, Airbus cemented its reputation for technological leadership. The massive A380, launched in 2007, showcased Airbus's ability to challenge Boeing’s dominance in the long-range, large-capacity markets.
                <br /><br />
                Both companies have heavily influenced advancements in aerospace technology and air travel, competing intensely in both commercial airliners and aerospace innovation, each pushing the other to continually evolve and refine their aircraft for global markets.
            </p>
        </section>
        <hr></hr>
        <section className="companies">
            <div>
                <CompanyInfo company={Airbus}/>
                <SquareGallery company={Airbus}/>
            </div>
            <div>
                <CompanyInfo company={Boeing}/>
                <SquareGallery company={Boeing}/>
            </div>
        </section>
    </main>
    );
}

export default Homepage;