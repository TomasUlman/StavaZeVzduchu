import { useReducer } from "react";
import OrderConfirmation from "./OrderConfirmation";

const initialState = {
  orderState: "notComplete",
  peaces: 0,
  juice: "Basic",
  price: "0 Kč (vzduch je zatím zdarma)",
};

const pricePerPeace = {
  Basic: 199,
  Premium: 429,
  Elite: 999,
};

function reducer(state, action) {
  switch (action.type) {
    case "setOrderState":
      return { ...initialState, orderState: "complete" };

    case "setJuice": {
      const newJuice = action.payload;
      const newPrice = pricePerPeace[newJuice] * Number(state.peaces || 0);

      return {
        ...state,
        juice: newJuice,
        price: `${newPrice} Kč`,
      };
    }

    case "setPeaces": {
      const newPeaces = action.payload;
      const newPrice = pricePerPeace[state.juice] * Number(newPeaces || 0);

      return {
        ...state,
        peaces: newPeaces,
        price: `${newPrice} Kč`,
      };
    }

    default:
      throw new Error("Unknown action");
  }
}

function OrderForm() {
  const [{ orderState, peaces, juice, price }, dispatch] = useReducer(
    reducer,
    initialState
  );

  if (orderState === "complete") return <OrderConfirmation />;

  if (orderState === "notComplete")
    return (
      <form
        className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "setOrderState" });
        }}
      >
        {/* Výběr varianty */}
        <div>
          <label className="block font-semibold mb-2">
            Vyber variantu šťávy
          </label>
          <select
            className="w-full border border-gray-300 rounded px-4 py-2"
            onChange={(e) =>
              dispatch({ type: "setJuice", payload: e.target.value })
            }
          >
            <option value="Basic">Basic (199 Kč)</option>
            <option value="Premium">Premium (429 Kč)</option>
            <option value="Elite">Elite (999 Kč)</option>
          </select>
        </div>

        {/* Počet kusů */}
        <div>
          <label className="block font-semibold mb-2">Počet lahví</label>
          <input
            type="number"
            min="1"
            placeholder="Např. 3"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
            onChange={(e) =>
              dispatch({ type: "setPeaces", payload: e.target.value })
            }
          />
        </div>

        {/* Osobní údaje */}
        <div>
          <label className="block font-semibold mb-2">Jméno a příjmení</label>
          <input
            type="text"
            placeholder="Jan Vzduchový"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            placeholder="jan@vzduch.cz"
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Adresa pro doručení
          </label>
          <textarea
            placeholder="Ulice, město, PSČ... nebo jen souřadnice"
            className="w-full border border-gray-300 rounded px-4 py-2"
            rows="3"
          ></textarea>
        </div>

        {/* Souhrn objednávky */}
        <div className="bg-[#f4faff] p-4 rounded text-sm text-gray-700">
          <p>
            <strong>Souhrn:</strong>
          </p>
          <p>
            • Šťáva: <i>{juice}</i>
          </p>
          <p>
            • Množství: <i>{peaces} ks</i>
          </p>
          <p>
            • Cena: <i>{price}</i>
          </p>
        </div>

        {/* Tlačítko */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Odeslat objednávku
        </button>
      </form>
    );
}

export default OrderForm;
