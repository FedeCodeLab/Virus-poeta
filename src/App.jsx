import { useState } from "react";
import Footer from "./components/Footer";
import Desktop from "./components/Desktop";
import Console from "./components/Console";
import Video from "./components/Video";
import { closeVideo } from "./redux/actions/actions";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const isVideoOpen = useSelector((state) => state.isVideoOpen);

  const handleClose = () => {
    dispatch(closeVideo());
  };
  return (
    <main className="min-h-screen max-h-screen bg-elm-700 relative typo">
      <Desktop />
      <Console />
      <Video onClose={handleClose} />
      {/* {isVideoOpen && <Video onClose={handleClose} />} */}
      <Footer />
    </main>
  );
}

export default App;
