import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import Ask from "./pages/Ask";
import Book from "./pages/Book";
import { useEffect, useState } from "react";
import { MdChat, MdCancel } from "react-icons/md";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [chat, setChat] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Delay in milliseconds (2000ms = 2 seconds)
    console.log(showPopup);
    return () => clearTimeout(timer);
  });

  const ChatWithBot = () => {
    return (
      <div
        className="fixed bottom-4 right-5 animate-pulse cursor-pointer"
        onClick={() => setChat(!chat)}
      >
        {chat ? <MdCancel size={50} /> : <MdChat size={50} />}
      </div>
    );
  };
  return (
    <section className="relative">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/book" element={<Book />} />
      </Routes>
      {showPopup && <ChatWithBot />}
      <div className={` right-2 top-16 ${chat ? "fixed" : "hidden"}`}>
        <Ask />
      </div>
    </section>
  );
}

export default App;
