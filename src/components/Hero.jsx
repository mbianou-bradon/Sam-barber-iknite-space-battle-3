import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroImage1 from "../assets/HeroImage1.jpg";
import Modal from "./modal";
import babaer from "../assets/babar.jpeg"
import haircut from "../assets/haircut.jpeg"

const SecondEditionUIHome = () => {

  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState("");
  const [time, setTime] = React.useState([]);

  const onSubmit = (e)=> {
    e.preventDefault()

    return (
      alert(`Congratulation ${name}, you just booked an appointment with Barber Sam on ${date}. Ensure you are there on time at ${time} to catch up on your meeting`)
    )
  }


  return (
    <div className="px-4 sm:px-10">
      <p className="w-1/2 text-lg mt-10 mx-auto">
        Welcome to Sam's Barber shop, the one stop shop for all your exquisite and luscious hair styles. Here at Sam's we treat you to a variety of hair products designed to make your hair glow and your appearance brighter. As we like to say, a smart haircut befits a smart person
        </p>
      <div className="h-full sm:h-[60vh] grid grid-cols-1 gap-3 items-center md:grid-cols-2 w-full my-10">
        <div className="w-3/4">
         <img src={haircut} alt="" className="h-full w-full object-cover"/>
        </div>
        <div className="block mx-auto text-center md:text-left w-full">
          
          <h1 className="py-3 text-5xl font-bold text-original leading-[3.5rem]">
            Available Hours
          </h1>
          <p className="font-semibold text-myText py-3 items-center">
            Mondays - Fridays:
            <br />
            Morning: 08:00am - 12:00pm
            <br />
            Afternoon: 1:00pm - 5:00pm
          </p>
          <div className="flex justify-center items-center gap-10 my-5">
            <button
              className="bg-primary text-white hover:bg-white border border-primary hover:text-primary py-2 px-8 rounded-xl">
             <a href="/#form"> Make Appointment</a>
            </button>
            <button className="hover:bg-primary hover:text-white border border-primary text-primary py-2 px-8 rounded-xl">
              View Calendar
            </button>
          </div>
        </div>
      </div>

      <div className=" md:mt-10">
        <div>
          <h2 className="text-3xl font-semibold text-center">
            Book an appointment
          </h2>
          <p className="text-xs w-1/2 text-center mx-auto my-3">
            Kindly fill the form below to book a date and time for your
            appointment
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 [&>*]:place-self-center px-3 sm:px-0">
            <div>
              <img src={babaer} alt="" className="h-full w-full object-cover"/>
            </div>

            <div className="w-4/5 ">
              <form
                id="form"
                className="[&>input]:border [&>input]:border-primary [&>input]:block [&>input]:h-10 [&>input]:w-full  [&>input]:text-sm [&>input]:text-primary [&>input]:rounded-lg [&>input]:my-2 [&>input]:pl-4 [&>label]:text-sm [&>label]:mt-5 [&>label]:block [&>label]:ml-2"
              >
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="forName"
                  placeholder="John Doe" onChange={(e)=> setName(e.target.value)}
                />

                <label htmlFor="email">Date</label>
                <select name="date" id="date" className="px-4 py-2 bg-transparent border focus:border-2 border-primary rounded-md" onChange={(e)=> setDate(e.target.value)}>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                </select>

                <div>Time</div>
                <div className="text-sm grid grid-cols-3 gap-2 [&>*>label>h2]:px-4 [&>*>label>h2]:py-2 [&>*>label>h2]:rounded-md [&>*]:border [&>*]:border-primary [&>*>input]:sr-only">
                  <div>
                    <input
                      type="checkbox"
                      name="8-9"
                      id="1"
                      value={"8:00AM-9:00AM"}
                      className="peer"
                    />
                    <label
                      htmlFor="1"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>8:00AM - 9:00AM</h2>
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="9-10"
                      id="2"
                      value={"9:00AM-10:00AM"}
                      className="peer"
                    />
                    <label
                      htmlFor="2"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>9:00AM - 10:00AM</h2>{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="10-11"
                      id="3"
                      value={"10:00AM-11:00AM"}
                      className="peer"
                    />
                    <label
                      htmlFor="3"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>10:00AM - 11:00AM</h2>{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="11-12"
                      id="4"
                      value={"11:00AM-12:00PM"}
                      className="peer"
                    />
                    <label
                      htmlFor="4"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>11:00AM - 12:00PM</h2>{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="1-2"
                      id="5"
                      value={"1:00PM-2:00PM"}
                      className="peer"
                    />
                    <label
                      htmlFor="5"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>1:00PM - 2:00PM</h2>{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="2-3"
                      id="6"
                      value={"2:00PM-3:00PM"}
                      className="peer"
                    />
                    <label
                      htmlFor="6"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>2:00PM - 3:00PM</h2>{" "}
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="3-4"
                      id="7"
                      value={"3:00PM-4:00PM"}
                      className="peer"
                    />
                    <label
                      htmlFor="7"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>3:00PM - 4:00PM</h2>{" "}
                    </label>
        
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      name="4-5"
                      id="8"
                      value={"4:00PM-5:00PM"}
                      className="peer"
                    />
                    <label
                      htmlFor="8"
                      className="peer-checked:[&>h2]:bg-primary peer-checked:[&>h2]:text-white"
                    >
                      <h2>4:00PM - 5:00PM</h2>{" "}
                    </label>
                  </div>
                </div>

                <label htmlFor="message">Haircut Type</label>
                <textarea
                  name="message"
                  id="forMessage"
                  rows="5"
                  placeholder="Write your message here. . ."
                  className="block border border-primary rounded-lg resize-none p-4 my-2 text-sm w-full"
                ></textarea>

                <button className="border border-primary bg-primary py-2 text-white font-semibold rounded-full text-sm my-3 w-full hover:bg-primary hover:scale-105 active:scale-95" onClick={onSubmit}>
                  Make An Appointment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <Form id="#form"/> */}
    </div>
  );
};

export default SecondEditionUIHome;

/*

<div
        id="items-list-container"
        className="p-6 mb-8 border border-[#023020] rounded-md"
      >
        <div
          id="list-items"
          className="grid grid-cols-2 sm:grid-cols-4 gap-10 "
        >
          {/* "transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ..."

          <div className="icon-hero">
            <IoIosPhonePortrait className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Dedicated</p>
            <p className="text-md sm:text-xl">Digital Wallet</p>
          </div>

          <div className="icon-hero">
            <TfiTarget className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Automatic</p>
            <p className="text-md sm:text-xl">Bill Payments</p>
          </div>

          <div className="icon-hero">
            <FiMonitor className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Financial</p>
            <p className="text-md sm:text-xl">Planning</p>
          </div>

          <div className="icon-hero">
            <FaBrain className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Dedicated</p>
            <p className="text-md sm:text-xl">Remote Advisor</p>
          </div>

          <div className="icon-hero">
            <AiOutlineDollarCircle className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Unified Payment</p>
            <p className="text-md sm:text-xl">System</p>
          </div>

          <div className="icon-hero">
            <FaHandHoldingHeart className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Loyalty</p>
            <p className="text-md sm:text-xl">Programs</p>
          </div>

          <div className="icon-hero">
            <IoMdMailOpen className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Secure Message</p>
            <p className="text-md sm:text-xl">Alerts</p>
          </div>

          <div className="icon-hero">
            <FaPiggyBank className="mx-auto my-2 text-2xl sm:text-5xl" />
            <p className="text-md sm:text-xl">Secure Online</p>
            <p className="text-md sm:text-xl">Banking</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-20">
        <div className="w-[80%] mx-auto">
          <img
            src={ValueImage1}
            alt="#"
            className="opacity-60 rounded-3xl mx-auto mix-blend-lighten w-full h-full object-cover"
          />
        </div>

        <div className="block mx-5 text-left">
          <h1 className="text-5xl font-bold text-gray-300 pb-2">
            PeFi provides the <span className="text-[#d4af37]">best value</span>{" "}
            for you
          </h1>
          <p className="font-semibold text-gray-400 py-2">
            PeFi is always ready to help by providing the best service in the
            field of finance for you, good finance provides a better life.
          </p>
          <div>
            <Accordion />
          </div>
          
        </div>
      </div>

*/
