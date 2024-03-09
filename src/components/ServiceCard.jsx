export default function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] w-full shadow-3xl px-10 py-16">
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="text-3xl font-palanquin mt-5 leading-normal font-semibold">
        {label}
      </h3>
      <p className="font-montserrat text-lg text-slate-gray break-words mt-4 leading-normal">
        {subtext}
      </p>
    </div>
  );
}
