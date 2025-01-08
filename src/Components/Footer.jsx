import facebook from "../images/facebook2.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import location from "../images/location.png";

const Footer = () => {
  return (
    <div className="bg-gray-900 flex justify-around mt-4 p-5 text-white">
      <div className="border p-4 text-3xl font-bold">LOGO</div>
      <div className="">
        <h1 className="flex space-x-2  p-4">
          <img className="h-6 " src={phone} alt="" srcset="" />
          <p>Contact : 9999999999, 7777777777 &nbsp; &nbsp;</p>

          <img className="h-6" src={mail} alt="" srcset="" />
          <p>Email : aaaa@gmail.com</p>
        </h1>
        <h1 className="px-4 flex items-center space-x-1">
          <img className="h-5" src={location} alt="" srcset="" />
          <p>
            Address : District Magistrate Office. Collectorate, Uttarkashi. PIN-
            249193
          </p>
        </h1>
      </div>
      <div className=" p-2 flex items-center">
        <img
          className=" h-10  px-1 cursor-pointer hover:border border- rounded-xl shadow-lg"
          src={facebook}
          alt="facebook"
          srcset=""
        />
        <img
          className="h-11 px-1 cursor-pointer hover:border border- rounded-xl shadow-lg"
          src={instagram}
          alt="facebook"
          srcset=""
        />
        <img
          className="h-11 px-1 cursor-pointer hover:border border- rounded-xl shadow-lg"
          src={youtube}
          alt="facebook"
          srcset=""
        />
      </div>
    </div>
  );
};

export default Footer;
