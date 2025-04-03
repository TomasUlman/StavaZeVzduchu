import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

function getNavLinkClass({ isActive }) {
  return isActive
    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
    : "hover:text-blue-600 transition";
}

function PageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 text-gray-800 font-semibold text-sm">
          <li>
            <NavLink to="/about" className={getNavLinkClass}>
              Jak to funguje
            </NavLink>
          </li>
          <li>
            <NavLink to="/studies" className={getNavLinkClass}>
              Studie & Certifikace
            </NavLink>
          </li>
          <li>
            <NavLink to="/reviews" className={getNavLinkClass}>
              Recenze
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow hover:bg-blue-700 transition"
                  : "bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
              }
            >
              Objednat
            </NavLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4 text-gray-800 font-medium">
            <li>
              <NavLink
                to="/about"
                className={getNavLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Jak to funguje
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/studies"
                className={getNavLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Studie & Certifikace
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/reviews"
                className={getNavLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Recenze
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/order"
                onClick={() => setMenuOpen(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition block w-fit"
              >
                Objednat
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default PageNav;
