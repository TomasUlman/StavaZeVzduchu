function HomepageReviews() {
  return (
    <div className="py-16 px-4 bg-blue-50 text-center">
      <h2 className="text-2xl font-bold mb-10 text-gray-900">
        Co o nás říkají
      </h2>
      <div className="max-w-3xl mx-auto space-y-8 text-gray-700 text-lg italic">
        <p>
          „Měl jsem pocit, že piju nic. A to miluju.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Honza, skeptik
          </span>
        </p>
        <p>
          „Otevřela jsem víčko a nic tam nebylo. GENIÁLNÍ!“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Lucie, minimalistka
          </span>
        </p>
        <p>
          „Nevěřil jsem tomu, ale ten vzduch fakt chutná.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Marek, influencer
          </span>
        </p>
      </div>
    </div>
  );
}

export default HomepageReviews;
