import Bodyspraysmall from "../assets/images/body_spray_small.png";
import Vitaminc from "../assets/images/vitaminc.jpg";
import Glove from "../assets/images/glove.jpg";
import Purell from "../assets/images/purell.jpg";
import Nivea from "../assets/images/nivea.jpg";
import Nosesmall from "../assets/images/nosesmall.png";
import Cover from "../assets/images/cover-2.jpg";

const productsArrOne = [
  {
    title: "Body Spray",
    image: Bodyspraysmall,
  },
  {
    title: "Vitamin C",
    image: Vitaminc,
  },
  {
    title: "Hand Gloves",
    image: Glove,
  },
];

const productsArrTwo = [
  {
    title: "Sanitizer",
    image: Purell,
  },
  {
    title: "Face Mask",
    image: Nosesmall,
    badge: "Top Seller",
  },
  {
    title: "Deodorant",
    image: Nivea,
  },
];

const Filterpage = () => {
  return (
    <div className="filter">
      <div>
        <img src={Cover} alt="" />
      </div>
      <div className="flex gap-16">
        <div>
          <ul>
            <div className="flex w-[250px] justify-between relative p-2 border-b border-black-600">
              <button className="">COMPANY</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div>
                <a href="test"></a>
                <a href="test"></a>
              </div>
            </div>

            <div className="flex w-[250px] justify-between relative p-2 border-b border-black-600">
              <button className="">PRICE</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div>
                <a href="test"></a>
                <a href="test"></a>
              </div>
            </div>

            <div className="flex w-[250px] justify-between relative p-2 border-b border-black-600">
              <button className="">CATEGORY</button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute right-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>

              <div>
                <a href="test"></a>
                <a href="test"></a>
              </div>
            </div>
          </ul>
        </div>
        <div className="mt-10">
          <ul className="flex justify-between">
            <a className="px-5 py-3 active-nav" href="">
              Everyday Essentials
            </a>
            <a className="px-5 py-3 product" href="">
              Cleaning Essentials
            </a>
            <a className="px-5 py-3 product" href="">
              Immunity & Health
            </a>
            <a className="px-5 py-3 product" href="">
              Vitamin Supplements
            </a>
          </ul>
          <div className="products my-10">
            <div className="flex justify-between">
              <p>40 Products</p>
              <div className="flex w-[250px] justify-between relative border border-gray-400 p-2">
                <button className="">Sort</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 justify-self-end absolute right-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>

                <div>
                  <a href="test"></a>
                  <a href="test"></a>
                </div>
              </div>
            </div>
            <div className="product-list-one flex gap-6 my-10 justify-between">
              {productsArrOne.map((item) => {
                return (
                  <div className="">
                    <div className="product p-14">
                      <img className="" src={item.image} alt={item.title} />
                    </div>
                    <h3 className="font-bold text-center my-3">{item.title}</h3>
                    {item.badge && (
                      <span className="absolute right-8 top-8 bg-red-500 px-3 text-white ">
                        {item.badge}
                      </span>
                    )}
                    {item.title === "Body Spray" && (
                      <p className="text-center">₹ 500 ₹ 400</p>
                    )}
                    {item.title === "Vitamin C" && (
                      <p className="text-center">₹ 200</p>
                    )}
                    {item.title === "Hand Gloves" && (
                      <p className="text-center">₹ 150</p>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="product-list-two flex gap-6">
              {productsArrTwo.map((item) => {
                return (
                  <div className="">
                    <div className="product">
                      <img className="p-14" src={item.image} alt={item.title} />
                    </div>
                    <h3 className="font-bold text-center my-2">{item.title}</h3>
                    {item.title === "Face Mask" && (
                      <p className="text-center">₹ 34</p>
                    )}
                    {item.title === "Deodorant" && (
                      <p className="text-center">₹ 500 ₹ 244</p>
                    )}
                    {item.title === "Sanitizer" && (
                      <p className="text-center">₹ 87</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterpage;
