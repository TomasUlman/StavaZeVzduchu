import { useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-6">
      <h2 className="text-3xl font-extrabold text-blue-600 mb-4">
        Děkujeme za objednávku!
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        Tvoje šťáva ze vzduchu je právě na cestě... možná už je ve vzduchu kolem
        tebe.
      </p>

      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
      >
        Zpět na hlavní stránku
      </button>
    </div>
  );
}

export default OrderConfirmation;
