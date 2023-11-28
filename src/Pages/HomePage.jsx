import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import Card from "../components/Card/Card";
import service from "../content/service";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as Custom } from "https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.mjs";
import { TypeAnimation } from "react-type-animation";
import { PasswordInput, TextInput, Textarea } from "@mantine/core";
import { FaLocationDot } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import ProductCard from "../components/Card/ProductCard";
import product from "../content/product";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ScrollX from "../components/ScrollX";

const HomePage = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  console.log('====================================');
  console.log(scrollY.current);
  console.log('====================================');
  const [typingStatus, setTypingStatus] = useState("Initializing");
  return (
    <div className="circuitBg bg-cover">
      <section className="" id="home">
        <div className=" heroBg flex items-center overflow-hidden justify-center w-full h-[560px] xl:h-[730px] bg-cover bg-top">
          <div className="w-[83%] xl:mt-[50px] 2xl:mt-[150px] flex justify-center">
            <div className="flex flex-col items-start">
              <motion.div
                viewport={{ once: true }}
                whileInView={{ x: 1, opacity: 1 }}
                initial={{ x: "-100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  delay: 0.2,
                  duration: 2,
                }}
                className="w-full mx-auto leading-10 pt-[100px]  mb-6 text-[3rem] header text-white"
              >
                Everything in one App
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ x: 1, opacity: 1 }}
                initial={{ x: "-100%", opacity: 0 }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  delay: 0.5,
                  duration: 2,
                }}
                className="flex justify-center text-[2.3rem] text-white items-center"
              >
                Control Your Home With DET Products
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: "-100%" }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  delay: 0.8,
                  duration: 2,
                }}
                className="text-white text-lg mt-3 w-[80%]"
              >
                Digital Engineering Tech LTD. was founded in 2019 and one of
                Myanmar local company that manufactures high-end smart devices
                for clients at reasonable prices. We mainly provide IoT Smart
                Home Systems and Home Automation Systems which are depend on
                weather and requirements of clients.
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 1 }}
                initial={{ opacity: 0, x: "-100%" }}
                transition={{
                  type: "spring",
                  // stiffness: 50,
                  delay: 1,
                  duration: 2,
                }}
                className=""
              >
                <div
                  whileHover={{
                    scale: 1.1,
                  }}
                  className=" border-2 hover:bg-white hover:text-primary duration-150 border-white text-white rounded-md mt-4 px-4 text-2xl py-2"
                >
                  About us
                </div>
              </motion.div>
            </div>
            {/* lottie */}
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 1 }}
              initial={{ opacity: 0, x: "100%" }}
              transition={{
                type: "spring",
                // stiffness: 30,
                delay: 1.2,
                duration: 2,
              }}
              className=""
            >
              <div className="xl:flex hidden">
                <lottie-player
                  src="https://lottie.host/c2501c80-a1ae-4410-b609-371f97519054/6rX8wwTPN9.json"
                  background="transparent"
                  speed="1"
                  style={{
                    width: "600px",
                    height: "600px",
                    // marginTop: "-170px",
                    // marginRight: "-50px",
                  }}
                  direction="1"
                  mode="normal"
                  loop
                  autoplay
                ></lottie-player>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <section id="service">
        <div className=" ps-5 pb-10 sectionBg pt-20 bg-cover ">
          <div className=" w-[90%] pt-5 mx-auto">
            <TypeAnimation
              sequence={[
                1000,
                () => {
                  setTypingStatus("Typing...");
                },
                "Services that we offer",
                () => {
                  setTypingStatus("Done Typing");
                },
                5000,
                () => {
                  setTypingStatus("Deleting...");
                },
                "",
                () => {
                  setTypingStatus("Done Deleting");
                },
              ]}
              speed={65}
              style={{ fontSize: "2.3em" }}
              className="font-bold pt-10   ms-11 text-text"
              repeat={Infinity}
            />
            <div className="mt-8 xl:flex hidden ps-3 pb-12">
              <Swiper
                slidesPerView={3}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                // modules={[Pagination]}
                // cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {service.map((e) => (
                  <SwiperSlide className="pt-4 ps-5">
                    {/* <div className="" ref={ref}> */}
                    <motion.div
                      viewport={{ once: true, margin: "250px" }}
                      whileInView={{ opacity: 1, y: 1 }}
                      initial={{ opacity: 0, y: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        delay: e.delay,
                        duration: 2,
                      }}
                      className=""
                    >
                      <Card id={e.id} {...e} />
                    </motion.div>
                    {/* </div> */}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="mt-8 xl:hidden flex ps-3 pb-12">
              <Swiper
                slidesPerView={2}
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                // modules={[Pagination]}
                // cssMode={true}
                navigation={true}
                // pagination={true}
                // mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
              >
                {service.map((e) => (
                  <SwiperSlide className="pt-4 ps-5">
                    <motion.div
                      viewport={{ once: true }}
                      whileInView={{ opacity: 1, y: 1 }}
                      initial={{ opacity: 0, y: "100%" }}
                      transition={{
                        type: "spring",
                        stiffness: 40,
                        delay: e.delay,
                        duration: 2,
                      }}
                      className=""
                    >
                      <Card id={e.id} {...e} />
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          {/* <div className="p-5" onClick={()=>Navigation.}>next</div> */}
        </div>
      </section>
      <section id="product">
        <div className=" flex-col items-center flex justify-center pt-28">
          <div className="w-[90%] mt-5 mx-auto">
            <TypeAnimation
              sequence={[
                1000,
                () => {
                  setTypingStatus("Typing...");
                },
                "Products that we provide",
                () => {
                  setTypingStatus("Done Typing");
                },
                5000,
                () => {
                  setTypingStatus("Deleting...");
                },
                "",
                () => {
                  setTypingStatus("Done Deleting");
                },
              ]}
              speed={65}
              style={{ fontSize: "2.3em" }}
              className="font-bold pt-10  ms-11 text-white"
              repeat={Infinity}
            />
            <div className="w-full flex flex-col items-center mt-10">
              {product.map((e) => (
                <ProductCard {...e} />
              ))}
            </div>
          </div>
          <div className="overflow-hidden w-full pt-32">
            <ScrollX />
          </div>
        </div>
      </section>
      <section id="about" className="pt-10">
        <div className=" pb-14 sectionBg bg-cover  pt-8">
          <div className="mt-10 flex flex-col items-center">
            <motion.div
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 1 }}
              initial={{ opacity: 0, y: "100%" }}
              transition={{
                // stiffness: 400,
                // delay: e.delay,
                duration: 0.8,
              }}
              className="text-text font-bold text-[2.5rem] mb-3 text-center"
            >
              About Us
            </motion.div>
            <div className="flex flex-col items-center gap-1">
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  // delay: e.delay,
                  duration: 0.8,
                }}
                className="text-text font-bold xl:font-extrabold text-[3rem] text-center"
              >
                For Simple, Secure And Smart
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  delay: 0.2,
                  duration: 0.8,
                }}
                className="2xl:w-[60%] xl:w-[70%] w-[80%] text-2xl font-semibold text-center text-text/80"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  delay: 0.4,
                  duration: 0.8,
                }}
                className="text-text font-semibold text-[2rem] text-center"
              >
                Use DET Products
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 1 }}
                initial={{ opacity: 0, y: "-100%" }}
                transition={{
                  // stiffness: 400,
                  delay: 0.4,
                  duration: 0.8,
                }}
                className=""
              >
                <button className="mb-6 me-8 bg-button text-xl font-semibold hover:bg-transparent duration-100 mt-3 hover:text-button border-[3px] border-button px-4 py-2 flex rounded-md text-white">
                  Learn more
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="h-[550px]">
          <div className="mt-14 w-full overflow-hidden">
            <div className="text-white font-bold text-[3rem] text-center">
              Contact Us
            </div>
            <div className=" flex justify-center">
              <motion.div
                viewport={{ once: true ,margin:"200px"}}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0 }}
                transition={{
                  // stiffness: 400,
                  duration: 0.8,
                }}
                className="w-[90%] lg:w-[90%] 2xl:w-[80%] mt-5 flex justify-around items-center backdrop-blur-sm bg-text/40 border-2 rounded-xl border-button  h-[400px]"
              >
                <motion.div
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: "-100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    delay: 0.7,
                    duration: 2,
                  }}
                  className="bg-text/20 backdrop-blur-md shadow-lg border-button border-2  shadow-text/20 w-[45%] flex flex-col rounded-lg gap-3 p-8 "
                >
                  <div className="flex justify-between">
                    <TextInput
                      className="w-[48%]"
                      variant="filled"
                      size="lg"
                      placeholder="First Name"
                    />
                    <TextInput
                      className="w-[48%]"
                      variant="filled"
                      size="lg"
                      placeholder="Last Name"
                    />
                  </div>
                  <TextInput
                    variant="filled"
                    size="lg"
                    placeholder="Enter your email"
                  />
                  <Textarea
                    variant="filled"
                    size="lg"
                    placeholder="Text .... "
                    minRows={5}
                  />
                  <button className=" me-8 justify-center bg-button text-xl font-semibold hover:bg-transparent duration-100 hover:border-white hover:text-white border-[3px] w-full border-button px-4 py-2 flex rounded-md text-white">
                    Submit
                  </button>
                </motion.div>
                <motion.div
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: "100%" }}
                  transition={{
                    type: "spring",
                    stiffness: 50,
                    delay: 1,
                    duration: 3,
                  }}
                  className="bg-text/20 border-2 border-button p-7 backdrop-blur-md shadow-lg shadow-text/20 rounded-lg w-[45%]"
                >
                  <div className="text-2xl text-white font-semibold">
                    Information
                  </div>
                  <div className="text-lg font-semibold text-white ">
                    Contact us and we'll get back to you within 24 hours.
                  </div>
                  <div className="flex flex-col mt-3 items-start gap-2">
                    <div className="flex mt-3">
                      <FaLocationDot className="me-3 my-auto w-20 text-white text-[30px]" />
                      <div className="text-xl font-semibold text-white">
                        No.15/1921, 12th Street, Paung Laung 2 Wardz, Pyinmana,
                        Naypyitaw
                      </div>
                    </div>
                    <div className="flex mt-3">
                      <MdEmail className="me-3 my-auto w-12 text-white text-[30px]" />
                      <div className="text-xl font-semibold text-white">
                        admin@det-mm.com
                      </div>
                    </div>
                    <div className="flex mt-3">
                      <FaPhone className="me-3 my-auto w-12 text-white text-[25px]" />
                      <div className="text-xl font-semibold text-white">
                        (959)988-34-0001
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
// import React from 'react'

// const HomePage = () => {
//   return (
//     <div className='pt-[300px]'>HomePage</div>
//   )
// }

// export default HomePage
