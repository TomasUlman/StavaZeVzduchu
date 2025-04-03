function Benefits() {
  return (
    <div className="py-16 px-4 bg-[#eaf6ff] text-center">
      <h2 className="text-2xl font-bold mb-10 text-gray-900">Proč právě my?</h2>
      <div className="max-w-4xl mx-auto grid gap-10 sm:grid-cols-3 text-gray-700 text-lg">
        <div>
          <div className="text-4xl mb-3">🌍</div>
          <p>
            Obsahuje 0 % vody,
            <br /> 100 % vzduchu
          </p>
        </div>
        <div>
          <div className="text-4xl mb-3">🧪</div>
          <p>
            Patent č. 42069
            <br />
            na extrakci svěžesti
          </p>
        </div>
        <div>
          <div className="text-4xl mb-3">💨</div>
          <p>
            Chuť atmosféry
            <br />v každém doušku
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
