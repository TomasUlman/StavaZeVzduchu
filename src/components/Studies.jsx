const studiesData = [
  {
    title: "Studie molekulární hydratace",
    org: "Univerzita čiré pravdy",
    year: "2023",
    desc: "Dlouhodobé pití šťávy ze vzduchu nemá žádné vedlejší účinky. Ani přímé účinky.",
  },
  {
    title: "Test esence 5. skupiny",
    org: "Akademie neviditelných tekutin",
    year: "2024",
    desc: "Vzdušné látky vykazují překvapivou míru hydratace v laboratorních podmínkách neexistence.",
  },
  {
    title: "Výzkum nicotvorných molekul",
    org: "Ústav kvantové prázdnoty",
    year: "2022",
    desc: "Vědci prokázali existenci chutě v prostoru, kde není žádná substance.",
  },
  {
    title: "Zpráva o čirosti",
    org: "Mezinárodní institut esencí",
    year: "2023",
    desc: "Produkt dosahuje ideální úrovně čirosti – 100 %. Subjektivně i objektivně prázdné.",
  },
  {
    title: "Audit nehmotných nápojů",
    org: "Národní centrum pro regulaci ničeho",
    year: "2024",
    desc: "Produkt prošel testy bezpečnosti, chuti a objemu. Výsledky: N/A. Doporučeno.",
  },
  {
    title: "Efektivita proti žízni",
    org: "Fakulta pocitů",
    year: "2021",
    desc: "Subjekty vykazovaly sníženou touhu pít... z respektu k technologii.",
  },
];

function Studies() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-6">Studie & Certifikace</h1>
        <p className="text-lg text-gray-600">
          Naše šťáva není jen vize – je to vědecky (ne)prokázaná realita.
          Podívejte se na výsledky nezávislých studií a námi udělené
          certifikace.
        </p>
      </div>

      {/* Karty studií */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-24">
        {studiesData.map((study, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-left"
          >
            <h2 className="text-xl font-bold mb-2">{study.title}</h2>
            <p className="text-sm text-gray-500 mb-1">{study.org}</p>
            <p className="text-sm text-gray-400 mb-4">{study.year}</p>
            <p className="text-sm text-gray-700">{study.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Studies;
