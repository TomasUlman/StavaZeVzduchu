function CelebrityReviews() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-24">
      <h2 className="text-2xl font-bold mb-6">Co říkají známé osobnosti</h2>
      <div className="space-y-8 italic text-base">
        <p>
          „Nepil jsem to. Ale mám z toho dojem.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Fiktivní Leoš Mareš
          </span>
        </p>
        <p>
          „Kdybych měl udělat reklamu na nic... byla by to tahle šťáva.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Neexistující influencerka @minimalmisa
          </span>
        </p>
        <p>
          „Je to jako luxusní parfém pro ústa. Ale bez vůně.“
          <br />
          <span className="not-italic text-sm text-gray-500">
            – Umělá celebrita
          </span>
        </p>
      </div>
    </div>
  );
}

export default CelebrityReviews;
