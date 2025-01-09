// import KedarkanthaBanner from "../images/kedarkantha-banner.jpg";
// import a from "../images/1.jpg";
// import b from "../images/2.jpg";
// import c from "../images/3.jpg";
// import d from "../images/4.jpg";
import location from "../images/location.png";
import mountain from "../images/mountain.png";
import whatsapp from "../images/whatsapp.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import all_treks from "./Assets/all_treks.jsx";

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

const Kedarkantha = ({ num }) => {
  let trekData = all_treks[num];
  console.log(trekData);
  return (
    <>
      <div className=" w-[100%] relative">
        <div className=" fixed border-4 border-blue-200 bg-blue-500 z-10 m-1 p-5 right-0 text-white rounded-3xl shadow-sm opacity-95">
          <h1 className="text-center text-3xl font-bold border-b-2 p-2 rounded-xl">
            BOOKING
          </h1>
          <ul className="mt-2 text-lg font-poppins">
            <li>❆ {trekData.daysNights}</li>
            <li>❆ {trekData.fromTo}</li>
            <li>❆ Food & Stay included</li>
          </ul>
          <div className="flex items-center justify-center mt-3 mx-2 border-4 p-2">
            <h1 className="text-2xl font-semibold">₹ {trekData.price} </h1>
            <p className="font-medium">&nbsp; +5% GST</p>
          </div>
          <button className="flex items-center border mx-2 mt-4 p-4 rounded-2xl justify-center space-x-2 bg-gray-700 hover:bg-blue-400 hover:border-4">
            <img className="h-6" src={whatsapp} alt="" srcset="" />
            <h1 className="font-semibold text-lg ">BOOK Trip & CHAT</h1>
          </button>
        </div>
        <div className="relative  w-full border shadow-lg">
          <h1 className="absolute right-[35%] bottom-[35%]  text-white text-6xl font-bold border-b-4 p-1 ">
            {trekData.name}
          </h1>
          <img className="border w-full" src={trekData.banner} alt="Banner" />
        </div>

        <div className="flex w-full">
          <div className="w-full m-3 shadow-lg">
            <div className="flex justify-around border w-[92%] p-4 text-xl font-bold bg-[#421e27] text-white mx-auto">
              <h1 className="flex items-center">
                <img className="h-9" src={mountain} alt="" srcset="" /> &nbsp;{" "}
                {trekData.daysNights} | ` {trekData.fromTo} `
              </h1>
              <p className="flex items-center">
                <img className="h-6" src={location} alt="" /> &nbsp;
                {trekData.location}
              </p>
            </div>
            <div className="mx-auto  container mt-4">
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
                  <img src={trekData.img1} alt="" srcset="" />
                </div>
                <div className="m-2">
                  <img src={trekData.img2} alt="" srcset="" />
                </div>
                <div className="m-2">
                  <img src={trekData.img3} alt="" srcset="" />
                </div>
                <div className="m-2">
                  <img src={trekData.img4} alt="" srcset="" />
                </div>
              </Carousel>
              ;
            </div>
          </div>
        </div>
        <div className="border  mx-16 mt-5 p-6 ">
          <h1 className="text-4xl text-center m-2 p-2 border-b-4 border-gray-600 font-poppins">
            {trekData.name} TREK JOURNEY
          </h1>
          <p className="m-4 p-4 font-roboto">{trekData.description1}</p>
          <p className="m-4 p-4 font-roboto">{trekData.description2}</p>
        </div>
      </div>
    </>
  );
};

export default Kedarkantha;
