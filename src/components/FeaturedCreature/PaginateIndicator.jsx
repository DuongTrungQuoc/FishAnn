const PaginateIndicator = ({
  creatureData,
  activeCreatureId,
  setActiveCreatureId,
}) => {
  return (
    <>
      <div className="absolute bottom-[10%] right-8">
        <ul className="flex gap-1">
          {creatureData.map((creature) => (
            <li
              key={creature.id}
              className={`h-1.5 w-6 cursor-pointer ${creature.id === activeCreatureId ? "bg-white" : "bg-slate-600"} `}
              onClick={() => setActiveCreatureId(creature.id)}
            ></li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default PaginateIndicator;
