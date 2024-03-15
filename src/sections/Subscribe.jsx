import Button from "../components/Button";

export default function Subscribe() {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="font-palanquin font-bold text-4xl leading-[68px] lg:max-w-md">
        Sign up for
        <span className="text-coral-red"> Update </span> Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-4 sm:border sm:border-slate-gray rounded-full p-2.5">
        <input
          type="text"
          name="subscribe"
          placeholder="shakhfarid71@gmail.com"
          className="input"
        />
        <Button className="flex max-sm:justify-end items-center max-sm:w-full" label= "Sign Up" fullWidth />
      </div>
    </section>
  );
}
