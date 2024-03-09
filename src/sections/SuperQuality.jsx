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
          Ensuring the highest quality and comfort, our shoes are designed to be
          durable and stylish. We are committed to providing you with the best
          quality shoes.
        </p>
        <p className="mt-4 info-text max-lg:max-w-lg">
          Our declaration is to provide you with the best quality shoes.
        </p>

        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
      </div>
    </section>
  );
}
