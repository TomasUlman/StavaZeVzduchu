import { Helmet } from "react-helmet-async";

import CustomerReviews from "../components/CustomerReviews";
import CelebrityReviews from "../components/CelebrityReviews";
import Rating from "../components/Rating";
import EmotionalEffects from "../components/EmotionalEffects";

function Reviews() {
  return (
    <>
      <Helmet>
        <title>Recenze | Šťáva ze vzduchu</title>
        <meta
          name="description"
          content="Zákazníci mluví jasně: Šťáva ze vzduchu je zážitek, který nelze ochutnat. Přečti si jejich příběhy."
        />
      </Helmet>
      <section className="py-20 px-4 text-gray-800">
        <CustomerReviews />
        <CelebrityReviews />
        <Rating />
        <EmotionalEffects />
      </section>
    </>
  );
}

export default Reviews;
