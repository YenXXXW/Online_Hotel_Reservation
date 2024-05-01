import LandingImage from "../assets/hotel_view.jpg";
import showerImage from "../assets/shower.jpg";
import hotelImage from "../assets/innerView.jpg";

import Logo from "../assets/lexe.jpg";

import { useState } from "react";
import Accomodation from "../components/Accomodation";
import Gallary from "../components/gallary";
import Spa from "../components/spa";
// import { Link } from "react-router-dom";

export default function Home() {
  const imgArray = [hotelImage, LandingImage, showerImage];
  const [index, setIndex] = useState(0);

  const handleArrowClick = (direction: string) => {
    if (direction === "right")
      setIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    else {
      if (index === 0) setIndex(2);
      else setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full pb-[100px]">
      <video loop controls className="h-[83vh] w-full object-cover">
        <source
          src={
            "https://img.belmond.com/video/upload/w_1920,ar_16:9,c_fill,g_auto/f_auto,q_auto/v1696240075/videos/CAT/cat-homepage-loop.mp4"
          }
          type="video/mp4"
        />
      </video>

      <div className="lg:w-[70%] mx-auto text-center my-[50px] flex flex-col gap-6">
        <h1>LEXE</h1>
        <h2>Unforgettable Experiences. Unmatched Luxury.</h2>
        <p className="text-sm md:text-base">
          Steeped in French Renaissance charm, The Plaza presides like a
          pâtissier’s fantasy over the corner of Fifth Avenue and Central Park
          South. Since it first opened in 1907, the hotel has become a landmark
          in its own right – representing the pinnacle of New York City
          hospitality and hosting the highest echelons of society from world
          leaders to stars of screen and stage. Make memories over afternoon tea
          at the legendary Palm Court, attend the wedding of the year in the
          Grand Ballroom, or settle in for a spa break at the most luxurious
          hotel in NYC.
        </p>
      </div>

      <Accomodation />
      <Gallary />
      <Spa />
    </div>
  );
}
