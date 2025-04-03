import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Video from "../components/Video";
import HomepageReviews from "../components/HomepageReviews";
import Pricing from "../components/Pricing";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Šťáva ze vzduchu</title>
        <meta
          name="description"
          content="Objednej si revoluční nápoj z ničeho. Bez vody. Bez výčitek. Jen vzduch."
        />
      </Helmet>
      <section>
        <Hero />
        <Benefits />
        <Video />
        <HomepageReviews />
        <Pricing />
      </section>
    </>
  );
}

export default Homepage;
