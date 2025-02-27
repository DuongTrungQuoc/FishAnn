import CreatureCard from "./CreatureCard";
import { all } from "../../data/TrendingFish";
import { sea_fish } from "../../data/TrendingSeaFish";
import { freshwater_fish } from "../../data/TrendingFreshwaterFish";
import { useEffect, useState } from "react";

const CreatureList = () => {
  const TABS = [
    {
      id: "all",
      name: "Tất cả",
    },
    {
      id: "sea_fish",
      name: "Cá biển",
    },
    {
      id: "freshwater_fish",
      name: "Cá nước ngọt",
    },
  ];

  const [activeTabId, setActiveTabId] = useState("all");
  const [data, setData] = useState(all);

  useEffect(() => {
    switch (activeTabId) {
      case "sea_fish":
        setData(sea_fish);
        break;
      case "freshwater_fish":
        setData(freshwater_fish);
        break;
      default:
        setData(all);
    }
  }, [activeTabId]);

  return (
    <>
      <div className="text-1.2 bg-black px-8 py-10 text-white">
        <div className="mb-6 flex items-center gap-4">
          <p className="text-[2vw] font-bold">Phổ biến</p>
          <ul className="flex rounded border">
            {TABS.map((tab) => (
              <li
                className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabId && "bg-white text-black"}`}
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {data.map((fish) => (
            <CreatureCard
              key={fish.id}
              name={fish.name}
              englishName={fish.english_name}
              backdropPath={fish.backdrop_path}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default CreatureList;
