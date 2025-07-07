import {} from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";

function ContactMe() {
  return (
    <div className="flex bg-primary-background flex-col items-center justify-center h-screen p-15">
      <div>
        <div className="bg-brand-light p-10 rounded-2xl shadow-lg">
          <p className="text-md md:text-xl font-bold text-primary-dark">
            "Let's team up, bring ideas to life, and make something
            unforgettable."
          </p>
        </div>

        {/* Text fields container */}
        <div className="gap-5 flex flex-col mt-10 ">
          <h1 className="text-2xl font-bold text-primary-dark mt-4">
            Email Me
          </h1>

          <div className="flex flex-col gap-2">
            <h2 className="text-black-text">Name</h2>
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-200 rounded-lg px-4 py-2 focus:outline-none w-full text-gray-text shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-black-text">Your Email</h2>
            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-200 rounded-lg px-4 py-2 focus:outline-none w-full text-gray-text shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-black-text">Message</h2>
            <textarea
              rows={5}
              placeholder="Type your message here"
              className="bg-gray-200 rounded-lg px-4 py-2 focus:outline-none w-full text-gray-text resize-none shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between my-10 gap-8">
          <div className="">
            <div className="flex-row flex gap-5 items-center">
              <EnvelopeIcon className="w-5 h-5 text-primary" />
              <p className="text-black-text">
                jonas.andrei.calda.ballarta@gmail.com
              </p>
            </div>
            <div className="flex-row flex gap-5 items-center">
              <PhoneIcon className="w-5 h-5 text-primary" />
              <p className="text-black-text">0961-315-8197</p>
            </div>
            <div className="flex-row flex gap-5 items-center">
              <MapPinIcon className="w-5 h-5 text-primary" />
              <p className="text-black-text">Tatalon, Quezon City, PH</p>
            </div>
          </div>

          <div className="flex gap-8">
            <img src={Facebook} className="h-10 shadow-lg" />
            <img src={Linkedin} className="h-10 shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
