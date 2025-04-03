import { Outlet } from "react-router-dom";
import PageNav from "./components/PageNav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f9fbfd] via-[#d4ecff] to-[#a4d4ff]">
      <PageNav />

      <main className="flex-grow max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
