import { useState } from "react";
import Footer from "./components/Footer";
import Desktop from "./components/Desktop";
import Console from "./components/Console";

function App() {
  return (
    <main className="min-h-screen max-h-screen bg-elm-700 relative typo">
      <Desktop />
      <Console />
      <Footer />
    </main>
  );
}

export default App;
