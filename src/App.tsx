import React, { useState } from "react";
import Logo from "./UI/logo_white.png";
import TopImage from "./UI/image_03.png";
import Bg1 from "./UI/Shape_06.png";
import Bg2 from "./UI/Shape_03.png";
import Card from "./card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from "react-responsive";

import { CardInfo } from "./CardInfo";
function App() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    // This is the full Container
    <div className="bg-gradient-to-r from-secondary to-primary h-full">
      {/* This is the Top Bar */}
      <div className="border-b-2 border-gray-300 border-opacity-50">
        {!isTabletOrMobileDevice ? (
          <div className="container w-screen flex flex-col lg:flex-row items-center justify-between mx-auto my-0 px-12 ">
            <img className="" src={Logo} alt="Logo" />
            <nav className="w-40">
              <ul className="flex justify-between text-white">
                <li className="cursor-pointer font-medium hover:text-black">
                  Home
                </li>
                <li className="cursor-pointer font-medium hover:text-black">
                  Portfolio
                </li>
              </ul>
            </nav>
            <div>
              <button className="font-bold  bg-white px-10 py-3 m-2">
                Hire Me
              </button>
            </div>
          </div>
        ) : (
          // MOBILE TOGGLER
          <div className=" w-screen flex flex-row justify-between p-5">
            <img className=" w-5/12" src={Logo} alt="Logo" />
            <div className=" w-20 flex justify-center items-center border-2 rounded-xl border-gray-300 ">
            <FontAwesomeIcon icon={faBars} size="3x" color="#fdfdfd" bg-white/>
            </div>
          </div>
        )}
      </div>

      {/* This is the 2nd Section */}
      <div className=" container lg:h-full lg:w-full sm:w-screen md:w-screen mx-auto md:mt-10 sm:mt-10 lg:mt-40 lg:p-0 text-white flex lg:flex-row md:flex-col sm:flex-col justify-between">
        <div className=" lg:flex lg:flex-col lg:w-5/12 lg:leading-10">
          <h3 className="text-lg font-medium md:text-center sm:text-center lg:text-left">
            Business Workflow
          </h3>
          <p className="md:text-5xl sm:text-5xl md:px-36 lg:px-0 lg:text-6xl font-bold py-6 md:text-center sm:text-center lg:text-left">
            Get the most efficient
            <br />
            UI design for your business now!
          </p>
          <h5 className="mb-10 mt-5 text-2xl md:text-center sm:text-center lg:text-left">
            Hire me to design a clean and modern UI for your product's website.
          </h5>
          <div className="md:text-center lg:text-left">
            <button className="md:w-full sm:w-full lg:w-4/12 lg:mx-2 font-bold text-black border-2 border-white bg-white px-10 py-3">
              Hire Me
            </button>

            <button className="md:w-full sm:w-full lg:w-4/12 font-bold border-2 border-white px-10 mt-2 py-3 ">
              Portfolio
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-full ">
          <img
            className="md:mt-7 sm:mt-7 lg:mt-0 md:p-0"
            src={TopImage}
            alt="Logo"
          />
        </div>
      </div>
      {/* PACKAGES SECTION */}
      <div className="p-0 border-b-2 border-white">
        <img src={Bg1} alt="bg" />
      </div>
      <div className=" bg-white ">
        <div className=" flex flex-col w-screen justify-center bg-white ">
          <div className=" container flex mx-auto mb-10 justify-center ">
            <h1 className="font-bold text-4xl border-b-2 border-red-200 py-7 ">
              Packages
            </h1>
          </div>

          <div className="z-10 md:my-20 lg:my-10 lg:flex lg:flex-row lg:w-screen lg:justify-center ">
            {CardInfo.map((item, index) => {
              return (
                <div className="justify-between w-screen">
                  <Card
                    className="mx-3"
                    top={item.top}
                    title={item.title}
                    desc={item.description}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <img className="p-0 transform rotate-180 ..." src={Bg2} alt="bg" />
      </div>

      {/* Last Section */}
      <div className="flex flex-col justify-center w-screen lg:-mt-40 md:mt-0">
        <div className="flex flex-row justify-center">
          <p className="text-4xl text-white font-bold px-10 pb-5 border-b-2 border-white">
            Start a project with me
          </p>
        </div>
        <div className="w-screen flex justify-center">
          <p className="mt-7 ld:w-3/12 md:w-7/12 text-center text-white">
            Let's discuss our ideas for presenting your busiess to the world in
            an attractive, efficient and effective way.
          </p>
        </div>{" "}
        <div className="w-screen flex justify-center mb-20">
          <button className="font-bold text-black border-2 border-white bg-white px-10 py-3 m-2">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
