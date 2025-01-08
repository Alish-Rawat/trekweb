import KedarkanthaBanner from "../images/kedarkantha-banner.jpg";
import a from "../images/1.jpg";
import b from "../images/2.jpg";
import c from "../images/3.jpg";
import d from "../images/4.jpg";
import location from "../images/location.png";
import mountain from "../images/mountain.png";
import whatsapp from "../images/whatsapp.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Kedarkantha = () => {
  return (
    <>
      <div className=" w-[100%] relative">
        <div className=" fixed border-4 border-blue-200 bg-blue-500 z-10 m-1 p-5 right-0 text-white rounded-xl shadow-sm">
          <h1 className="text-center text-3xl font-bold border-b-2 p-2 rounded-xl">
            BOOKING
          </h1>
          <ul className="mt-2 text-lg">
            <li>❆ 5 Days - 4 Nights</li>
            <li>❆ Dehradun to Dehradun</li>
            <li>❆ Food & Stay included</li>
          </ul>
          <div className="flex items-center justify-center mt-3 mx-2 border-4 p-2">
            <h1 className="text-xl font-semibold">₹ 7,000 </h1>
            <p className="font-medium">&nbsp; +5% GST</p>
          </div>
          <button className="flex items-center border mx-2 mt-4 p-4 rounded-2xl justify-center space-x-2 bg-gray-700 hover:bg-blue-400 hover:border-4">
            <img className="h-6" src={whatsapp} alt="" srcset="" />
            <h1 className="font-semibold">BOOK Trip & CHAT</h1>
          </button>
        </div>
        <div className="relative  w-full border shadow-lg">
          <h1 className="absolute right-[35%] bottom-[35%]  text-white text-6xl font-bold border-b-4 p-1 ">
            KEDARKANTHA
          </h1>
          <img className="border w-full" src={KedarkanthaBanner} alt="Banner" />
        </div>

        <div className="flex w-full">
          <div className="w-full m-3 shadow-lg">
            <div className="flex justify-around border w-[95%] p-4 text-xl font-bold bg-[#421e27] text-white">
              <h1 className="flex items-center">
                <img className="h-9" src={mountain} alt="" srcset="" /> &nbsp; 5
                Days - 4 Nights Trek
              </h1>
              <p className="flex items-center">
                <img className="h-6" src={location} alt="" /> &nbsp;
                Kedarkantha, Uttrakashi , Uttrakhand
              </p>
            </div>
            <div className="w-[95%] border">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                <div className=" m-2">
                  <img src={a} alt="" srcset="" />
                </div>
                <div className="m-2">
                  <img src={b} alt="" srcset="" />
                </div>
                <div className="m-2">
                  <img src={c} alt="" srcset="" />
                </div>
                <div className="m-2">
                  <img src={d} alt="" srcset="" />
                </div>
              </Carousel>
              ;
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Kedarkantha;
