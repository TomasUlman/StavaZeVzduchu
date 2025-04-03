import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="pt-16 md:pt-12 pb-20 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Šťáva ze vzduchu.
            <br />
            Revoluce v hydrataci.
          </h1>

          <p className="text-lg sm:text-xl text-gray-700 mb-10">
            Vzduch není jen k dýchání. Je i k pití.
            <br className="hidden sm:block" />
            Naše molekulární technologie extrahuje čistou esenci svěžesti přímo
            z atmosféry.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              to="/order"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
            >
              Objednat šťávu
            </Link>
            <Link
              to="/about"
              className="text-blue-600 text-lg font-semibold underline underline-offset-2 hover:text-blue-800 transition"
            >
              Jak to funguje
            </Link>
          </div>
        </div>

        {/* Obrázek */}
        <div className="w-full md:w-1/2">
          <img
            src="/hero.png"
            alt="Ilustrace šťávy ze vzduchu"
            className="w-full max-w-lg mx-auto md:mx-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
