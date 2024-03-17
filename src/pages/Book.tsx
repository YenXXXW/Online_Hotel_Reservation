import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import barImg from "../assets/bar.jpg";
import StandardRoomImage from "../assets/standerdRoom.jpg";
import KingRooMImage from "../assets/KingRoom.jpg";
import QueenSizedImage from "../assets/TwoQueensRoom.jpg";

interface CalenderProps {
  dayList: number[];
  month: number;
  year: number;
  second: boolean;
}

interface DaysAndMonths {
  [key: number]: string;
}

interface RoomCradProps {
  title: string;
  roomImg: string;
  description: string;
  area: string;
}

export default function Book() {
  const date = new Date();
  const today = date.getDate();
  const todayYear = date.getFullYear();
  const todayMonth = date.getMonth();

  const days: DaysAndMonths = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thr",
    5: "Fri",
    6: "Sat",
  };
  const months: DaysAndMonths = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December",
  };

  //for evalutaion in calendar
  const [currentMonth, setCurrentMonth] = useState(todayMonth);
  const [currentYear, setCurrentYear] = useState(todayYear);

  //to fill out the calender days
  const [daysOfMonth, setDaysOfMonths] = useState<number[]>([]);
  const [daysOfNextMonth, setDaysOfNextMonths] = useState<number[]>([]);

  //for booking
  const [noOfRooms, setNoOfRooms] = useState(1);
  const [selectedRoomType, setSelectedRoomType] = useState("Standard Room");
  const [roomAvailable, setRoomAvailable] = useState(false);
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [checkInDate, setCheckInDate] = useState(date.getDate()); //This is the date like 1,2,3,...,21,22
  const [checkInMonth, setCheckInMonth] = useState(todayMonth);
  const [checkInYear, setCheckInYear] = useState(todayYear);
  const [checkOutDate, setCheckOutDate] = useState(date.getDate() + 1); //This is the date like 1,2,3,...,21,22
  const [checkOutMonth, setCheckOutMonth] = useState(todayMonth);
  const [checkOutYear, setCheckOutYear] = useState(todayYear);

  const handleClick = (day: number, month: number, year: number) => {
    //check the total no of days booked is over 30 days

    // asign setCheckOutDate -1 so that when user first click on the calender,
    // only the checkIn date has backgroud color as there is no day in the calender matching with -1
    if (checkOutDate !== -1) {
      setCheckInDate(day);
      setCheckInYear(year);
      setCheckInMonth(month);
      setCheckOutDate(-1);
    } else {
      const checkIn = Number(new Date(checkInYear, checkInMonth, checkInDate));
      const checkOut = Number(new Date(year, month, day));

      if (checkOut > checkIn && checkOut - checkIn <= 1123200000) {
        setCheckOutDate(day);
        setCheckOutMonth(month);
        setCheckOutYear(year);
      } else if (checkIn > checkOut) {
        setCheckInDate(day);
        setCheckInYear(year);
        setCheckInMonth(month);
        setCheckOutDate(-1);
      }
    }
  };

  const handleSelectRoom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoomType(e.target.value);
  };

  const handleCheckAvailbility = () => {
    setRoomAvailable(true);
  };

  const handleLeftClick = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((year) => year - 1);
    } else {
      setCurrentMonth((month) => month - 1);
    }
  };

  const handleRightClick = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((year) => year + 1);
    } else {
      setCurrentMonth((month) => month + 1);
    }
  };

  // const AddDetals = () => (

  // );
  const Book = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log();
  };

  const Calender = ({ dayList, month, year, second }: CalenderProps) => {
    return (
      <div className="text-xs px-3 ">
        <p className="flex justify-center text-[17px]">
          {months[month]}, {year}
        </p>
        <ul className="list-none flex ">
          {" "}
          <li className="mx-[1px] text-center w-11">Su</li>
          <li className="mx-[1px] text-center w-11">Mo</li>
          <li className="mx-[1px] text-center w-11">Tu</li>
          <li className="mx-[1px] text-center w-11">We</li>
          <li className="mx-[1px] text-center w-11">Tr</li>
          <li className="mx-[1px] text-center w-11">Fr</li>
          <li className="mx-[1px] text-center w-11">Sa</li>
        </ul>
        <div className="">
          {dayList.map((day, index) => (
            <React.Fragment key={index}>
              {day === 100 ? (
                <span className=" mx-[1px] my-1 h-10 inline-block text-center w-11 cursor-auto">
                  &nbsp;
                </span>
              ) : (
                <span
                  className={` mx-[1px] my-1 h-10 inline-block text-center w-11 cursor-pointer pt-3 border-gray-500 border-[1px] ${
                    checkInMonth === month &&
                    checkInDate === day &&
                    checkInYear === year
                      ? "bg-slate-600 text-white "
                      : checkOutMonth === month &&
                        checkOutDate === day &&
                        checkOutYear === year
                      ? "bg-slate-600 text-white"
                      : checkInMonth === checkOutMonth &&
                        checkInYear === checkOutYear &&
                        month === checkInMonth &&
                        year === checkInYear &&
                        checkInDate < day &&
                        day < checkOutDate
                      ? "bg-slate-500 text-white"
                      : checkInMonth === month &&
                        month < checkOutMonth &&
                        day > checkInDate
                      ? "bg-slate-500 text-white"
                      : month < checkOutMonth && checkInMonth < month
                      ? "bg-slate-500 text-white"
                      : month === checkOutMonth &&
                        checkInMonth < month &&
                        day < checkOutDate
                      ? "bg-slate-500 text-white"
                      : day < today &&
                        currentMonth === todayMonth &&
                        currentYear === todayYear &&
                        !second &&
                        "pointer-events-none opacity-50"
                  }`}
                  onClick={() => handleClick(day, month, year)}
                >
                  {day}
                </span>
              )}
              {index !== 0 && (index + 1) % 7 === 0 && <br />}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const RoomCard = ({ roomImg, description, area, title }: RoomCradProps) => {
    return (
      <div className="flex shadow-lg gap-5">
        <div>
          <img src={roomImg} className="w-[300px]" />
          <ul className="text-sm font-thin px-2">
            <li>Non-smoking</li>
            <li>Pets Allowed</li>
            <li>Free Wifi</li>
            <li>Air Conditioning</li>
            <li>Sitting Area</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <h3 className="font-Cormorant text-xl font-semibold mb-3">{title}</h3>
          <p className="text-sm font-thin ">{description}</p>
          <p className="text-sm font-thin ">{area}</p>
          <ul className="text-sm font-thin px-2">
            <li>Semi-private pool</li>
            <li>Personalized butler service</li>
            <li>Marble bathroom</li>
          </ul>
          <button className="checkAvaillbilityButtons">Select</button>
        </div>
      </div>
    );
  };
  useEffect(() => {
    const getdays = (year: number, month: number) => {
      // Get the first day of the month return Sunday Monday
      const dayone = new Date(year, month, 1).getDay();

      // Get the last date of the month
      const lastdate = new Date(year, month + 1, 0).getDate();
      // Get the day of the last date of the month Sunday Monday
      const dayend = new Date(year, month, lastdate).getDay();

      const lit: number[] = [];

      for (let i = dayone; i > 0; i--) {
        lit.unshift(100);
      }

      // Loop to add the dates of the current month
      for (let i = 1; i <= lastdate; i++) {
        lit.push(i);
      }

      // Loop to add the first dates of the next month
      for (let i = dayend; i < 6; i++) {
        lit.push(100);
      }

      return lit;
    };

    setDaysOfMonths([...getdays(currentYear, currentMonth)]);

    if (currentMonth === 11) {
      setDaysOfNextMonths([...getdays(currentYear + 1, 0)]);
    } else {
      setDaysOfNextMonths([...getdays(currentYear, currentMonth + 1)]);
    }

    // const setReservationDates = () => {
    //   const today = date.getDate();
    //   console.log(date.getMonth());
    // };

    // setReservationDates();
  }, [currentMonth, currentYear]);

  return (
    <section className="w-full b">
      <div>
        <img src={barImg} className="w-full" />
      </div>
      <div className="flex">
        <div className="w-[60%]">
          <div className="flex gap-12 items-start w-full ">
            <div className="w-full">
              <div className="flex justify-around  border-[1px] border-gray-300 p-2">
                <div className="py-2  flex flex-col items-center border-r-[1px] border-gray-300  basis-1/2">
                  <p>Check In</p>

                  <p>{`${
                    days[
                      new Date(checkInYear, checkInMonth, checkInDate).getDay()
                    ]
                  }, ${
                    months[checkInMonth]
                  } ${checkInDate}, ${checkInYear}`}</p>
                </div>
                <div className="basis-1/2 flex flex-col items-center py-2 ">
                  <p>Check Out</p>
                  {checkOutDate !== -1 && (
                    <p>{` ${
                      days[
                        new Date(
                          checkOutYear,
                          checkOutMonth,
                          checkOutDate
                        ).getDay()
                      ]
                    },            
              ${months[checkOutMonth]} ${checkOutDate}, ${checkOutYear}`}</p>
                  )}
                </div>
              </div>
              <div className="flex gap-4  border-[1px] border-gray-300 shadow-lg p-3">
                <span
                  className={
                    currentMonth === todayMonth && currentYear === todayYear
                      ? "pointer-events-none opacity-30"
                      : ""
                  }
                  onClick={handleLeftClick}
                >
                  <FaChevronLeft />
                </span>

                <Calender
                  dayList={daysOfMonth}
                  month={currentMonth}
                  year={currentYear}
                  second={false}
                />
                {currentMonth === 11 ? (
                  <Calender
                    dayList={daysOfNextMonth}
                    month={0}
                    year={currentYear + 1}
                    second={true}
                  />
                ) : (
                  <Calender
                    dayList={daysOfNextMonth}
                    month={currentMonth + 1}
                    year={currentYear}
                    second={true}
                  />
                )}

                <FaChevronRight onClick={handleRightClick} />
              </div>
            </div>
          </div>
          <div className="my-2 shadow-lg border-[1px] border-gray-300  w-full">
            <RoomCard
              roomImg={StandardRoomImage}
              title={"Standard Room"}
              area={"Sleeps 31 King30 m²"}
              description="These cozy rooms offer effortless comfort with soothing botanical accents."
            />
          </div>
          <div className="my-2 shadow-lg border-[1px] border-gray-300  w-full">
            <RoomCard
              roomImg={KingRooMImage}
              title={"king Room"}
              area={"Sleeps 31 King30 m²"}
              description="Wake up each morning to stunning views of the ocean and beyond."
            />
          </div>
          <div className="my-2 shadow-lg border-[1px] border-gray-300  w-full">
            <RoomCard
              roomImg={QueenSizedImage}
              title={"Queen Room"}
              area={"Sleeps 31 King60 m²square meters"}
              description="Gleaming parquet floors, vibrant bursts of colour and classic touches make these suites an indulgent retreat.
          "
            />
          </div>
        </div>
        <div>
          <h2 className="font-sans text-lg  tracking-wider">YOUR STAY</h2>
          <div className="flex min-w-[250px]">
            <div className="text-sm basis-1/2">
              <p>Check In</p>
              <p className="font-thin ">After 4:00pm</p>
            </div>
            <div className="text-sm  basis-1/2">
              <p>Check Out</p>
              <p className="font-thin">Before 12:00pm</p>
            </div>
          </div>
          <p className="text-xs font-thin">
            {`${
              days[new Date(checkInYear, checkInMonth, checkInDate).getDay()]
            }, ${months[checkInMonth]} ${checkInDate}, ${checkInYear}`}
            -
            {` ${
              days[new Date(checkOutYear, checkOutMonth, checkOutDate).getDay()]
            },            
    ${months[checkOutMonth]} ${checkOutDate}, ${checkOutYear}`}
          </p>
        </div>
      </div>
      {roomAvailable && (
        <form
          className="flex flex-col"
          onSubmit={(e) => {
            Book(e);
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            value={name}
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            value={email}
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label id="contact">Contact</label>
          <input
            value={contact}
            id="contact"
            type="text"
            onChange={(e) => setContact(e.target.value)}
            required
          />
          <label id="no_of_guests">No of guests</label>
          <input
            value={noOfGuests}
            id="no_of_guests"
            type="number"
            onChange={(e) => setNoOfGuests(Number(e.target.value))}
            required
          />
          <button type="submit">Book</button>
        </form>
      )}
    </section>
  );
}
