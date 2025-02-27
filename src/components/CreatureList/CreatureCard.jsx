const CreatureCard = ({ name, englishName, backdropPath }) => {
  return (
    <>
      <div className="rounded-lg border border-slate-800">
        <div className="">
          <img className="rounded-lg" src={backdropPath} />
        </div>

        <div className="px-4 py-2">
          <p className="font-bold">{name}</p>
          <p className="text-slate-300">{englishName}</p>
        </div>
      </div>
    </>
  );
};
export default CreatureCard;
