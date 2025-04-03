import { Link } from "react-router-dom";

const products = [
  {
    name: "Basic",
    price: "199 Kč",
    features: [
      "Lahev nehmotné šťávy",
      "Doručení pomocí atmosféry",
      "Chuť dle vlastní představivosti",
    ],
  },
  {
    name: "Premium",
    price: "429 Kč",
    features: [
      "Lahev s nádechem horského vzduchu",
      "Virtuální certifikát svěžesti",
      "Předstíraný pocit hydratace",
    ],
  },
  {
    name: "Elite",
    price: "999 Kč",
    features: [
      "Lahev z vysoké vrstvy troposféry",
      "Exkluzivní přístup do klubu čirých",
      "Lahev s podpisem molekulového someliéra",
    ],
    highlight: true,
  },
];

function Pricing() {
  return (
    <section className="py-20 px-4 text-center text-gray-800">
      <h2 className="text-3xl font-extrabold mb-4">Ceník šťávy ze vzduchu</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Vyber si ten správný balíček podle své míry žízně – nebo míry víry.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md p-8 flex flex-col justify-between transition hover:shadow-lg ${
              plan.highlight ? "bg-blue-50 border border-blue-200" : "bg-white"
            }`}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-blue-600 mb-4">
                {plan.price}
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                {plan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
            </div>
            <Link
              to="/order"
              className={`${
                plan.highlight
                  ? "bg-blue-600 text-white"
                  : "border border-blue-600 text-blue-600"
              } px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 hover:text-white transition`}
            >
              Objednat
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing;
