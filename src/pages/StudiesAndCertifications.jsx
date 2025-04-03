import { Helmet } from "react-helmet-async";

import Studies from "../components/Studies";
import Certifications from "../components/Certifications";
import NewsQuotes from "../components/NewsQuotes";

function StudiesAndCertifications() {
  return (
    <>
      <Helmet>
        <title>Studie & Certifikace | Šťáva ze vzduchu</title>
        <meta
          name="description"
          content="Vědecké studie a oficiální certifikáty dokazují, že i nic může být revoluční. Přesvědč se sám."
        />
      </Helmet>
      <section className="py-20 px-4 text-gray-800">
        <Studies />
        <Certifications />
        <NewsQuotes />
      </section>
    </>
  );
}

export default StudiesAndCertifications;
