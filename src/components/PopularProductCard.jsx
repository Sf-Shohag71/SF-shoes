import { star } from "../assets/icons";

export default function PopularProductCard({ name, imgURL, price, rating }) {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex justify-start gap-2.5 mt-8">
        <img src={star} alt="rating" width={20} height={20} />
        <p className="font-montserrat text-lg text-slate-gray leading-normal">
          ({rating})
        </p>
      </div>
      <h3 className="font-palanquin text-2xl font-semibold mt-2 leading-normal">{name}</h3>
      <p className="font-montserrat font-semibold leading-normal text-coral-red mt-2">{price}</p>
    </div>
  );
}
