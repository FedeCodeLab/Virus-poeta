import { useState } from "react";
import Footer from "./components/Footer";
import Desktop from "./components/Desktop";

function App() {
  return (
    <main className="min-h-screen max-h-screen bg-elm-700 relative">
      <Desktop />
      <Footer />
    </main>
  );
}

export default App;
