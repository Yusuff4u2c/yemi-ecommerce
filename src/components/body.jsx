import React, { useRef } from "react";
import Cover from "../assets/images/cover.jpg";
// import Nosecover from "../assets/images/nose_cover.jpg";
// import Bodyspray from "../assets/images/body_spray.jpg";
import Bodyspraysmall from "../assets/images/body_spray_small.png";
import Newproduct from "../assets/images/new_products.jpg";
import Phone from "../assets/images/feature_phone.png";
import Discount from "../assets/images/discount.jpg";
import Pad from "../assets/images/pad.png";
import Padsmall from "../assets/images/padsmall.png";
import Topselling from "../assets/images/topselling.jpg";
import Nosecoversmall from "../assets/images/nose_cover_small.png";
import Man from "../assets/images/feature_man.png";
import Covid from "../assets/images/covid.jpg";

const newProduct = [
  {
    title: "Face Mask",
    image: Nosecoversmall,
    badge: "Top Seller",
  },
  {
    title: "Body Spray",
    image: Bodyspraysmall,
  },
  {
    title: "Stay Free Ultra Pad",
    image: Pad,
  },
  {
    title: "Face Mask",
    image: Nosecoversmall,
    badge: "Top Seller",
  },
  {
    title: "Face Mask",
    image: Nosecoversmall,
    badge: "Top Seller",
  },
];

const Body = () => {
  const newProductRef = useRef();

  const handleScroll = (scrollOffset) => {
    console.log(newProductRef.current);
    newProductRef.current.scrollLeft = 500;
  };
  return (
    <div>
      <div className="flex gap-16 p-12 first-grid">
        <div>
          <h1 className="font-Poppins first-grid-heading">
            PROVIDING SERVICES <br /> AT YOUR DOOR
          </h1>
          <p>
            {" "}
            <span className="bold-span">MACC Essentials</span> has an important
            role in making <br /> supplies and services available to customers
            and their <br /> patients during this critical time. This includes
            services <br /> from various domains. Our aim is to aid you. As much
            we can.
          </p>
          <button className="mt-16 p-3 w-56 text-white">LEARN MORE</button>
        </div>
        <img src={Cover} alt="" />
      </div>
      <div className="second-grid my-20">
        <img className="mx-auto mt-5" src={Newproduct} alt="" />
        <div
          className="flex w-full mt-10 overflow-x-auto hide-scrollbar relative"
          ref={newProductRef}
        >
          <div className="absolute flex justify-center items-center top-[40%] left-4 z-10 p-4 w-3 h-3  bg-white rounded-full">
            <i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>
          </div>
          <div
            className="absolute flex justify-center items-center top-[40%] right-4 z-10 p-4 w-3 h-3  bg-white rounded-full"
            onClick={() => handleScroll()}
          >
            <i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>
          </div>

          {newProduct.map((item) => {
            return (
              <div className="relative shrink-0 h-full w-1/3 p-8">
                <div className="product">
                  <img className="p-14" src={item.image} alt={item.title} />
                </div>
                <h3 className="font-bold text-center my-3">{item.title}</h3>
                {item.badge && (
                  <span className="absolute right-8 top-8 bg-red-500 px-3 text-white ">
                    {item.badge}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="third-grid flex gap-10 items-center">
        <div>
          <img src={Phone} alt="" />
        </div>
        <div>
          <div className="flex justify-between gap-20">
            <img className="mx-auto flex-grow" src={Discount} alt="" />
            <button className="product px-2 text-black ">VIEW ALL</button>
          </div>
          <div className="flex gap-5 my-14">
            <div className="relative">
              <div className="product">
                <img className="p-5" src={Bodyspraysmall} alt="" />
              </div>
              <h3 className="font-bold text-center my-3">Body Spray</h3>
              <p className="text-center"> ₹ 500 &nbsp; ₹ 400</p>
              <button className="absolute right-0 top-0 bg-red-500 px-3 text-white ">
                20% OFF
              </button>
            </div>
            <div className="relative">
              <div className="product">
                <img className="p-5 py-10" src={Padsmall} alt="" />
              </div>
              <h3 className="font-bold text-center my-3">
                Stay Free Ultra Pad
              </h3>
              <p className="text-center"> ₹ 400 &nbsp; ₹ 250</p>
              <button className="absolute right-0 top-0 bg-red-500 px-3 text-white ">
                40% OFF
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-grid flex gap-10 my-14 items-center">
        <div>
          <div className="flex justify-between gap-20">
            <img className="mx-auto flex-grow" src={Topselling} alt="" />
            <button className="product px-2 text-black ">VIEW ALL</button>
          </div>
          <div className="flex gap-5 my-14">
            <div className="relative">
              <div className="product">
                <img className="p-5" src={Bodyspraysmall} alt="" />
              </div>
              <h3 className="font-bold text-center my-3">Body Spray</h3>
              <p className="text-center">₹ 400</p>
              <button className="absolute right-0 top-0 bg-red-500 px-3 text-white ">
                20% OFF
              </button>
            </div>
            <div className="relative">
              <div className="product">
                <img className="p-5 py-5" src={Nosecoversmall} alt="" />
              </div>
              <h3 className="font-bold text-center my-3">Nose Cover</h3>
              <p className="text-center">₹ 400</p>
              <button className="absolute right-0 top-0 bg-red-500 px-3 text-white ">
                40% OFF
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={Man} alt="" />
        </div>
      </div>
      <div className="my-3">
        <img className="mx-auto my-5" src={Covid} alt="" />
        <p className="text-center">
          Please remember to adhere all covid-19 guidelines. Precaution is key
          to <br /> survive this pandemic. Stay at home and Stay safe.
        </p>
      </div>
    </div>
  );
};

export default Body;
