

const Card = (
    {
        icon,
        title,
        value,
        description,

        className="",
    }
) => {
  return (
    <div
      className={`bg-white/50 rounded-4xl shadow-md px-10 py-8 w-[200px]
    gap-4 flex items-start border border-stone-100 ${className}`}
    >
      <div className="text-3xl">{icon}</div>
      <div>
        <p className="font-semibold text-lime-400">{title}</p>
        <h1 className="text-2xl font-bold">{value}</h1>
        <p className="text-stone-700">{description}</p>
      </div>
    </div>
  );
};

export default Card;