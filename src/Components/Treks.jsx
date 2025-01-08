import Kedarkantha from "../images/kedarkantha.jpg";
import gangotri from "../images/gangotri.jpg";

const Treks = () => {
  return (
    <div className="border mx-32 my-10 p-3 relative">
      <h1 className="border m-10 flex justify-center text-5xl font-bold">
        TREKS
      </h1>

      <div className="flex flex-col flex-wrap  border border-red-500 px-28 m-4 h-[50rem] container">
        <div className="w-[40%] h-[30rem]  m-3 relative  hover:opacity-90">
          <div className="absolute   px-4 py-1 bottom-0 text-white space-y-2">
            <h1 className=" flex justify-end text-3xl font-bold shadow-lg p-2 border-b-2 ">
              KEDARKANTHA
            </h1>

            <p className="font-semibold shadow-xl   text-right pl-24">
              Kedarkantha (केदारकंठ) is a mountain peak of the Himalayas in
              Uttarakhand located in Uttarkashi district.
            </p>

            <div className=" flex justify-between items-center shadow-lg pb-3 py-2">
              <p>12,500 ft (3,800 m)</p>
              <button className="bg-blue-600  px-6 py-2  font-bold text-white animate-pulse">
                Book Now
              </button>
            </div>
          </div>
          <img
            className="h-[100%] border shadow-lg"
            src={Kedarkantha}
            alt=""
            srcset=""
          />
        </div>

        <div className="w-[40%] h-[15rem]  m-3 relative hover:opacity-90 ">
          <div className="absolute    px-4 py-1 bottom-0 text-white">
            <h1 className=" flex justify-start text-2xl font-bold shadow-lg p-2 border-b-2 ">
              GANGOTRI
            </h1>

            <p className="font-semibold shadow-xl   text-left pr-24 translate-y-2">
              Gangotri is a sacred pilgrimage site in the Char Dham situated in
              Uttarkashi.
            </p>

            <div className=" flex justify-between items-center shadow-lg  py-1">
              <p>10,200 ft (3,100 m)</p>
              <button className="bg-blue-600  px-6 py-2  font-bold text-sm text-white animate-pulse">
                Book Now
              </button>
            </div>
          </div>
          <img
            className="h-[100%] border shadow-lg"
            src={gangotri}
            alt=""
            srcset=""
          />
        </div>

        <div className="w-[40%] h-[15rem] border border-blue-600 m-3">3</div>
        <div className="w-[40%] h-[30rem] border border-blue-600 m-3">4</div>
      </div>
    </div>
  );
};

export default Treks;
