import { shoe8 } from "../assets/images";
import Button from "../components/Button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-wrap items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold max-lg:max-w-lg capitalize">
          We provide you
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 info-text max-lg:max-w-lg">
          we take pride in offering superior quality shoes that combine comfort,
          style, and durability. Whether you’re strolling through the city
          streets or conquering rugged trails, our footwear ensures you step
          confidently.
        </p>
        <p className="mt-4 info-text max-lg:max-w-lg">
        Discover the perfect pair that elevates your every stride.
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
}
