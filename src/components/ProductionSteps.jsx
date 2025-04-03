import { Link } from "react-router-dom";

function ProductionSteps() {
  return (
    <div className="py-20 px-4 text-center text-gray-800">
      <div className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl font-extrabold mb-6">Jak to funguje?</h1>
        <p className="text-lg text-gray-600">
          Vědecký postup, který nedává smysl – a právě proto funguje.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-3 max-w-6xl mx-auto">
        {/* Krok 1 */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
          <div className="text-5xl">🌬️</div>
          <h2 className="text-xl font-bold">1. Zachytíme vzduch</h2>
          <p className="text-gray-600 text-sm">
            Pomocí našeho patentovaného molekulárního síta nasajeme
            nejčerstvější vzduch v okolí.
          </p>
        </div>

        {/* Krok 2 */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
          <div className="text-5xl">🧪</div>
          <h2 className="text-xl font-bold">2. Extrahujeme esenci</h2>
          <p className="text-gray-600 text-sm">
            Pokročilá kvantová filtrace oddělí molekuly svěžesti od prázdnoty.
            Nevíš jak? Ani my. Ale funguje to.
          </p>
        </div>

        {/* Krok 3 */}
        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
          <div className="text-5xl">💧</div>
          <h2 className="text-xl font-bold">3. Zabalíme do plastu</h2>
          <p className="text-gray-600 text-sm">
            Výsledek zapečetíme do designové lahve. Vypadá prázdně, chutná...
            jako nic. A právě to je kouzlo.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <Link
          to="/order"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Objednat
        </Link>
      </div>
    </div>
  );
}

export default ProductionSteps;
