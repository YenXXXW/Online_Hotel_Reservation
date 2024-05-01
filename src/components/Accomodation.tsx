import { useEffect, useState } from "react";
import { Room } from "../lib/Rooms";

const BedRooms = ({
  image,
  name,
  description,
}: {
  image: string;
  description: string;
  name: string;
}) => {
  return (
    <div className="basis-1/3 shadow-2xl h-full">
      <img src={image} />
      <div className="pl-3">
        <h3 className="font-bold font-Cormorant text-xl my-2">{name}</h3>
        <p>{description}</p>
      </div>
      <div className="w-full flex justify-end my-5">
        <button className="w-[50%] bg-gray-800 py-2 text-white">
          Check Availbility
        </button>
      </div>
    </div>
  );
};

export default function Accomodation() {
  const [rooms, setRooms] = useState<null | Room[]>(null);
  useEffect(() => {
    const getRoomInfo = async () => {
      const response = await fetch("http://127.0.0.1:5000/rooms");
      const Rooms = await response.json();
      setRooms(Rooms);
    };

    getRoomInfo();
  }, []);

  return (
    <div className="w-full">
      <div className="w-full grid grid-cols-3 gap-10 px-[5%]">
        {rooms &&
          rooms.map((room, i) => (
            <div key={i}>
              <BedRooms
                image={room.roomImg}
                description={room.roomDescription}
                name={room.roomName}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
