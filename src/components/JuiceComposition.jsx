function JuiceComposition() {
  return (
    <div className="mt-18 px-4 text-center text-gray-700">
      <h3 className="text-2xl font-bold mb-10 text-gray-900">
        Složení na 100 ml šťávy
      </h3>

      <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <p className="text-3xl font-bold text-blue-600 mb-2">78 %</p>
          <p className="text-sm text-gray-600">Dusík</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <p className="text-3xl font-bold text-blue-600 mb-2">21 %</p>
          <p className="text-sm text-gray-600">Kyslík</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <p className="text-3xl font-bold text-blue-600 mb-2">0.04 %</p>
          <p className="text-sm text-gray-600">Oxid uhličitý</p>
        </div>

        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition col-span-full">
          <p className="text-2xl font-bold text-purple-600 mb-2">0.01 %</p>
          <p className="text-sm text-gray-600 italic">Mystická esence</p>
        </div>
      </div>
    </div>
  );
}

export default JuiceComposition;
