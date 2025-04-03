import { Helmet } from "react-helmet-async";

import OrderForm from "../components/OrderForm";

function Order() {
  return (
    <>
      <Helmet>
        <title>Objednávka | Šťáva ze vzduchu</title>
        <meta
          name="description"
          content="Objednej si čistotu přímo z atmosféry. Vyber variantu šťávy, množství... a nečekej nic víc."
        />
      </Helmet>
      <section className="py-20 px-4 text-gray-800">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">Objednávka šťávy</h1>
          <p className="text-lg text-gray-600">
            Vyplň následující formulář a my ti pošleme čistý vzduch – zabalený v
            revoluční plastové nádobě.
          </p>
        </div>
        <OrderForm />
      </section>
    </>
  );
}

export default Order;
