import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Creature = (props) => {
  console.log({ props });
  const {
    creature: { backdrop_path, name, overview, redlist },
  } = props;
  return (
    <>
      <img src={backdrop_path} className="aspect-video w-full brightness-50" />
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="mb-2 font-bold sm:text-[2vw]">{name}</p>
        {redlist && (
          <p className="mb-4 inline-block border border-gray-400 p-1 text-gray-400">
            {redlist}
          </p>
        )}

        <div className="text-1.2 hidden sm:block">
          <p className="mb-2 font-bold">Tổng quan</p>
          <p>{overview}</p>
        </div>
        <div className="mt-4">
          <button className="mr-2 rounded bg-white px-4 py-2 text-xs text-black lg:text-lg">
            <FontAwesomeIcon icon={faPlay} className="mr-1" />
            Video
          </button>
          <button className="rounded bg-slate-300/35 px-4 py-2 text-xs lg:text-lg">
            Mô tả
          </button>
        </div>
      </div>
    </>
  );
};
export default Creature;
