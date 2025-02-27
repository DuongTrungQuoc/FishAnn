import PaginateIndicator from "./PaginateIndicator";
import Creature from "./Creature";
import { creatureData } from "../../data/creatureData";
import { useState, useEffect } from "react";
const FeatureCreature = () => {
  const [activeCreatureId, setActiveCreatureId] = useState(creatureData[0].id);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCreatureId((prevId) => {
        const currentIndex = creatureData.findIndex((c) => c.id === prevId);
        const nextIndex = (currentIndex + 1) % creatureData.length;
        return creatureData[nextIndex].id;
      });
    }, 5000); // Chuyển sau mỗi 5 giây

    return () => clearInterval(interval); // Cleanup khi component unmount
  }, []);

  return (
    <>
      <div className="relative text-white">
        {creatureData
          .filter((creature) => creature.id === activeCreatureId)
          .map((creature) => (
            <Creature key={creature.id} creature={creature} />
          ))}
        <PaginateIndicator
          creatureData={creatureData}
          activeCreatureId={activeCreatureId}
          setActiveCreatureId={setActiveCreatureId}
        />
      </div>
    </>
  );
};
export default FeatureCreature;
