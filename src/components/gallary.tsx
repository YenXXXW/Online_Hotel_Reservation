import { imgs } from "../lib/gallary";

export default function Gallary() {
  return (
    <div className="w-full px-[5%]">
      <h1>Gallary</h1>
      <div className="grid grid-cols-4 gap-5  text-center font-Cormorant text-lg">
        {imgs.map((img) => (
          <div key={img.src}>
            <img src={img.src} alt={img.name} className="w-[260px]" />{" "}
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
