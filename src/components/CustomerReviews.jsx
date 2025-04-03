const reviews = [
  {
    name: "Tonda, ultramaratonec",
    stars: 4,
    text: "Vzal jsem si ji na 120 km běh. Nevypil jsem nic. A přesto jsem cítil vítězství.",
  },
  {
    name: "Klára, HR specialistka",
    stars: 5,
    text: "Na onboarding dávám šťávu všem nováčkům. Zatím si nikdo nestěžoval.",
  },
  {
    name: "Alena, babička",
    stars: 4,
    text: "Děti to chtějí k večeři. Když jim dojde, stejně si ničeho nevšimnou.",
  },
  {
    name: "Bára, eko-aktivistka",
    stars: 5,
    text: "Konečně něco, co nemá žádný ekologický dopad. Ani obsah.",
  },
  {
    name: "David, ajťák",
    stars: 3,
    text: "Nezanechává stopy. Ani mokro. Perfektní pro klávesnici.",
  },
  {
    name: "Monika, foodblogerka",
    stars: 5,
    text: "Skvěle se páruje s ničím. Doporučuju k prázdnému talíři.",
  },
];

function CustomerReviews() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-extrabold mb-6">Recenze zákazníků</h1>
        <p className="text-lg text-gray-600">
          Co říkají lidé, kteří možná pili.
        </p>
      </div>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-24">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-left flex flex-col justify-between"
          >
            <div className="mb-4">
              <p className="text-yellow-500 text-lg mb-2">
                {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
              </p>
              <p className="text-gray-700 text-sm italic">„{review.text}“</p>
            </div>
            <p className="text-sm text-gray-500 mt-4 not-italic">
              {review.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default CustomerReviews;
