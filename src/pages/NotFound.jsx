import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 | Stránka nenalezena | Šťáva ze vzduchu</title>
        <meta
          name="description"
          content="Tahle stránka se vypařila. Možná nikdy neexistovala. Stejně jako náš produkt."
        />
      </Helmet>
      <section className="py-24 px-4 text-center bg-gradient-to-b from-white to-[#F9FBFD]">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Tahle stránka se vypařila...
        </h2>
        <p className="text-gray-600 max-w-md mx-auto mb-8">
          Možná byla tak lehká jako naše šťáva. Možná tu nikdy nebyla.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Zpět na domovskou stránku
        </Link>
      </section>
    </>
  );
}

export default NotFound;
