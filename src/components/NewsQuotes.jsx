function NewsQuotes() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-10 text-center text-gray-700">
      <h3 className="text-xl font-bold mb-6 text-gray-900">
        Citace z odborných zpráv
      </h3>
      <div className="space-y-8 italic text-base">
        <p>
          „Produkt splnil všechna kritéria: neviditelnost, bezchuť a totální
          neutralita.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Interní zpráva ÚKPN (Ústav kontrolu prázdnoty nápojů)
          </span>
        </p>
        <p>
          „Nezaznamenali jsme žádné účinky. Což potvrzuje očekávání.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Mezinárodní rada pro esenciální tekutiny
          </span>
        </p>
        <p>
          „Tento produkt není ničím rušivý. Což z něj dělá ideálního
          společníka.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Závěr hodnotící komise nehmotných nápojů
          </span>
        </p>
      </div>
    </div>
  );
}

export default NewsQuotes;
