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
            <div className="flex justify-around border w-[92%] p-4 text-xl font-bold bg-[#421e27] text-white mx-auto">
              <h1 className="flex items-center">
                <img className="h-9" src={mountain} alt="" srcset="" /> &nbsp; 5
                Days - 4 Nights Trek | ` Dehradun to Dehradun `
              </h1>
              <p className="flex items-center">
                <img className="h-6" src={location} alt="" /> &nbsp;
                Kedarkantha, Uttrakashi , Uttrakhand
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
        </div>
        <div className="border  mx-16 mt-5 p-6">
          <h1 className="text-4xl text-center m-2 p-2">
            KEDARKANTHA TREK JOURNEY
          </h1>
          <p className="m-4 p-4">
            Get Ready to trek the most popular and adventurous Kedarkantha Trek
            located in Uttarkashi, Uttrakhand, India. Fringed with pine trees
            and decked with the prettiness of snow, Peak is often considered the
            best snow-trekking destination across the globe. Located at an
            altitude of 12,500 ft. above sea level, the trek to this mountain
            pass in Uttarakhand provides diverse levels of challenges to the
            voyagers. If you want to experience nature at its best and enjoy a
            wonderful trek then this Winter Snow Trek is definitely for you.
            During the trek, you will pass through mesmerizing picturesque
            views, rich forests, fields as well as snow trails. You need to know
            that Kedarkantha Summit is nestled in Govind wild life National
            santuary Park of Uttarkashi. This beautiful peak is encircled by
            several scenic river valleys, this valley is also known as upper
            valley of garwal, remotely situated villages the villagers of these
            villages are living here since Mahabharat Period. Kedarkantha is
            considered as top most winter snow trek in India, beginners can also
            do this trek in the Himalayas that you need to experience at least
            once in your life. Best time to do this trek is from the first week
            of November to the last week of April, you can find a lot of
            snowfall here. The campsites of this trek are beautifull all camps
            are covered with snow after mid november. Although every trek in the
            Himalayas is special and known for its own beauty. Trekking often
            gives you a dose of nature which is not possible in the cities and
            also offers you the chance to stretch your psychological & physical
            limits. This Trek is one of those treks in the Himalayas that induce
            you to witness the beauty of nature that too in its pure form. Right
            from snow-capped mountains, green pastures forest, frozen lake to a
            pleasing divine summit, it offers everything that you wish for as a
            trekker. The summit ascent of trek is extremely rewarding and sure
            to give you amazing memories. All these views are seen from the
            starting point Sankri base camp till summit. As you begin your trek
            in the early hours of the morning and gradually climb up the steep
            hill, you will experience breathtaking nature views. Kedar Kantha is
            popular mainly as a winter trek that starts right from a famous
            village called Sankri. This beautiful village is almost 210km away
            from Dehradun. Generally, in the mountains, winter is quite harsh
            when it comes to weather. When the snowfall begins, the temperature
            drops down to minus that further blocks several roads, making most
            areas unreachable. All these things often make trek exciting and
            popular because here you can actually experience what winter feels
            like in the mountains. The temperature here drops to 10 degrees at
            night and even less but remember such kind of temperature is
            bearable only with a bit of carefulness. This is the reason why
            several tourists head towards the base village of this trek called
            Sankri, especially in the month of December, January, February, and
            March each year.{" "}
          </p>
          <p className="m-4 p-4">
            Get Ready to trek the most popular and adventurous Kedarkantha Trek
            located in Uttarkashi, Uttrakhand, India. Fringed with pine trees
            and decked with the prettiness of snow, Peak is often considered the
            best snow-trekking destination across the globe. Located at an
            altitude of 12,500 ft. above sea level, the trek to this mountain
            pass in Uttarakhand provides diverse levels of challenges to the
            voyagers. If you want to experience nature at its best and enjoy a
            wonderful trek then this Winter Snow Trek is definitely for you.
            During the trek, you will pass through mesmerizing picturesque
            views, rich forests, fields as well as snow trails. You need to know
            that Kedarkantha Summit is nestled in Govind wild life National
            santuary Park of Uttarkashi. This beautiful peak is encircled by
            several scenic river valleys, this valley is also known as upper
            valley of garwal, remotely situated villages the villagers of these
            villages are living here since Mahabharat Period. Kedarkantha is
            considered as top most winter snow trek in India, beginners can also
            do this trek in the Himalayas that you need to experience at least
            once in your life. Best time to do this trek is from the first week
            of November to the last week of April, you can find a lot of
            snowfall here. The campsites of this trek are beautifull all camps
            are covered with snow after mid november. Although every trek in the
            Himalayas is special and known for its own beauty. Trekking often
            gives you a dose of nature which is not possible in the cities and
            also offers you the chance to stretch your psychological & physical
            limits. This Trek is one of those treks in the Himalayas that induce
            you to witness the beauty of nature that too in its pure form. Right
            from snow-capped mountains, green pastures forest, frozen lake to a
            pleasing divine summit, it offers everything that you wish for as a
            trekker. The summit ascent of trek is extremely rewarding and sure
            to give you amazing memories. All these views are seen from the
            starting point Sankri base camp till summit. As you begin your trek
            in the early hours of the morning and gradually climb up the steep
            hill, you will experience breathtaking nature views. Kedar Kantha is
            popular mainly as a winter trek that starts right from a famous
            village called Sankri. This beautiful village is almost 210km away
            from Dehradun. Generally, in the mountains, winter is quite harsh
            when it comes to weather. When the snowfall begins, the temperature
            drops down to minus that further blocks several roads, making most
            areas unreachable. All these things often make trek exciting and
            popular because here you can actually experience what winter feels
            like in the mountains. The temperature here drops to 10 degrees at
            night and even less but remember such kind of temperature is
            bearable only with a bit of carefulness. This is the reason why
            several tourists head towards the base village of this trek called
            Sankri, especially in the month of December, January, February, and
            March each year.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Kedarkantha;
