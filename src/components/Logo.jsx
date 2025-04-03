import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
      <img src="/logo.svg" alt="Logo" className="h-7 sm:h-8 md:h-9 lg:h-10" />
    </Link>
  );
}

export default Logo;
