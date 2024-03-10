import LandingImage from "../assets/hotel_view.jpg";
import showerImage from "../assets/shower.jpg";
import hotelImage from "../assets/innerView.jpg";
import StandardRoomImage from "../assets/standerdRoom.jpg";
import KingRooMImage from "../assets/KingRoom.jpg";
import QueenSizedImage from "../assets/TwoQueensRoom.jpg";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useState } from "react";
// import { Link } from "react-router-dom";

export default function LandingPage() {
  const imgArray = [hotelImage, LandingImage, showerImage];
  const [index, setIndex] = useState(0);
  // const [avialable, setAvailable] = useState(false);
  // const [showAvailablebutton, setShowAvailablebutton] = useState(true);

  // const CheckAvailable = () => {
  //   setAvailable(true);
  // };

  const BedRooms = ({
    image,
    title,
    description,
  }: {
    image: string;
    description: string;
    title: string;
  }) => {
    return (
      <div className="basis-1/3 shadow-2xl">
        <img src={image} />
        <div className="pl-3">
          <h3 className="font-bold font-Cormorant text-lg my-2">{title}</h3>
          <p className="text-sm font-light">{description}</p>
        </div>
        <button
          // onClick={CheckAvailable}
          className="bg-slate-800 text-white px-3 py-2 mt-10 text-sm"
        >
          Check availbility
        </button>
        {/* {avialable && (
          <div>
            <p className="text-md text-green-500">Available</p>{" "}
            <Link to="/book">
              <button className="py-1 text-sm text-white px-2 rounded-lg bg-slate-800">
                Book now
              </button>
            </Link>
          </div>
        )} */}
      </div>
    );
  };

  const singleDescription =
    "Single Rooms are located on floors 5 to 19 and provide elegant accomdations with a conmfortable sitting area";
  const DoubleDescription =
    "The luxurious Double Room is exceptionally spacious with a comfortable sitting area";
  const FamilyRoomDescription = `Family Grand Room features an open-concept room that provides a comfortable sitting area, two Queen beds, and Butler's pantry. The bathrooms reflect Luxe's classical elegant style with inlaid "earth stone" mosaics, a luxrious bathtub, and a separate, oversize shower`;

  const handleArrowClick = (direction: string) => {
    if (direction === "right")
      setIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    else {
      if (index === 0) setIndex(2);
      else setIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="w-full h-[100vh]">
      <div className="flex items-center justify-center gap-6 relative">
        <div className="absolute z-30 top-[50%] flex justify-between w-full px-10 text-white">
          <FaChevronLeft
            className="backdrop-brightness-50 bg-black/30 p-2 rounded-full  cursor-pointer"
            size={30}
            onClick={() => {
              handleArrowClick("left");
            }}
          />
          <FaChevronRight
            className="backdrop-brightness-50 bg-black/30 p-2 rounded-full cursor-pointer"
            size={30}
            onClick={() => {
              handleArrowClick("right");
            }}
          />
        </div>
        <img src={imgArray[index]} className="w-full h-[600px]" />
      </div>

      <div className="flex w-[70%] gap-[50px] justify-center m-auto my-10 ">
        <div className="basis-1/2">
          <h2 className="text-[30px] font-bold font-Cormorant px-10">
            Welcome to LEXE, A Sithu Managed Hotel
          </h2>
        </div>
        <div className="basis-1/2 px-10">
          <p className="text-sm">
            Steeped in French Renaissance charm, The Plaza presides like a
            pâtissier’s fantasy over the corner of Fifth Avenue and Central Park
            South. Since it first opened in 1907, the hotel has become a
            landmark in its own right – representing the pinnacle of New York
            City hospitality and hosting the highest echelons of society from
            world leaders to stars of screen and stage. Make memories over
            afternoon tea at the legendary Palm Court, attend the wedding of the
            year in the Grand Ballroom, or settle in for a spa break at the most
            luxurious hotel in NYC.
          </p>
        </div>
      </div>

      {/* BEDROOM IMAGES */}
      <div className="flex gap-14 w-[85%] m-auto">
        <BedRooms
          image={StandardRoomImage}
          title={"Standard Room"}
          description={singleDescription}
        />
        <BedRooms
          image={KingRooMImage}
          title={"Double Room"}
          description={DoubleDescription}
        />
        <BedRooms
          image={QueenSizedImage}
          title={"Suite"}
          description={FamilyRoomDescription}
        />
      </div>
    </div>
  );
}
