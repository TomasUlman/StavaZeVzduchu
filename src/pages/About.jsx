import { Helmet } from "react-helmet-async";

import ProductionSteps from "../components/ProductionSteps";
import JuiceComposition from "../components/JuiceComposition";
import ScientistsQuotes from "../components/ScientistsQuotes";

function About() {
  return (
    <>
      <Helmet>
        <title>Jak to funguje | Šťáva ze vzduchu</title>
        <meta
          name="description"
          content="Objev technologii, která mění molekuly vzduchu na šťávu. Bez kapaliny. Bez výčitek. Čirá magie vědy."
        />
      </Helmet>
      <section>
        <ProductionSteps />
        <JuiceComposition />
        <ScientistsQuotes />
      </section>
    </>
  );
}

export default About;
