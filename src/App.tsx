import { Route, Routes, useLocation } from "react-router-dom";
import Ask from "./pages/Ask";
import Book from "./pages/Book";
import { useEffect, useRef, useState } from "react";
import { MdChat, MdCancel } from "react-icons/md";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Accomodation from "./components/Accomodation";
import Gallary from "./components/gallary";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [chat, setChat] = useState(false);

  //for scoll passing ten percentage of the total height of the document
  const [scrolledPastTenPercent, setScrolledPastTenPercent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight; // Total document height
      const scrollTop = window.scrollY; // Scrolled pixels from top

      const tenPercentScrollPosition = scrollHeight * 0.1;

      if (scrollTop >= tenPercentScrollPosition) {
        setScrolledPastTenPercent(true);
      } else {
        setScrolledPastTenPercent(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ref = useRef<null | HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setChat(false);
  }, [location]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000); // Delay in milliseconds (2000ms = 2 seconds)

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
    <section className="relative" ref={ref}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/book" element={<Book />} />
        <Route path={"/accomodations"} element={<Accomodation />} />
        <Route path={"/gallary"} element={<Gallary />} />
      </Routes>
      {showPopup && <ChatWithBot />}
      <Navbar toTop={scrolledPastTenPercent} />
      <div className={` right-2 top-16 ${chat ? "fixed" : "hidden"}`}>
        <Ask />
      </div>
    </section>
  );
}

export default App;
