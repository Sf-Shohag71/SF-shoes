export default function Button({ label, iconURL }) {
  return (
    <button className="flex justify-center items-center px-7 py-4 rounded-full bg-coral-red gap-2 text-lg text-white leading-none border border-coral-red font-montserrat">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right"
          className="ml-2 rounded-full h-5 w-5"
        />
      )}
    </button>
  );
}
