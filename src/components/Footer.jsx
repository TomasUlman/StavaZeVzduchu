function Footer() {
  return (
    <footer className="bg-[#f4faff] py-10 mt-20 text-center text-sm text-gray-600">
      <div className="text-xs text-gray-500 space-y-2">
        <p>© {new Date().getFullYear()} Šťáva ze vzduchu. Vyrobeno z ničeho.</p>
        <p>
          Vytvořil{" "}
          <span className="font-medium text-gray-700">Tomáš Ulman</span>{" "}
          &middot;{" "}
          <a
            href="https://github.com/TomasUlman"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>{" "}
          ·{" "}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
