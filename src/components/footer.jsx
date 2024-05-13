import React from "react";

const Footer = () => {
  return <div className="mt-16">
    <div className="bg-black py-10 px-16">
        <div className="container m-auto lg:flex gap-20 ">

        <div className="img mb-10"><img src="/img/logo.png" alt="" /></div>
        <div className="sm:flex justify-between flex-[0.7] ">
            <div className="left flex flex-col gap-4">
                <p className="font-medium text-white text-xl">Contact Us</p>
                <p className="text-white">Phone: +2348035693820</p>
                <p className="text-white">Email: contact@lfcictgroup.com</p>
                <p className="text-white">Location Address : KM, 10, Idiroko Road,</p>
                <p className="text-white mb-10">Canaanland ota, ogun state, nigeria.</p>

            </div>
            <div className="right flex flex-col gap-4 ">
                <p className="font-medium text-white text-xl">Works/activities</p>
                <p className="text-white">Software</p>
                <p className="text-white">Hardware</p>
                <p className="text-white">Latest news</p>
                <p className="text-white">Photo gallery</p>
                <p className="text-white">Livestream</p>
            </div>
        </div>

        </div>
    </div>
    <div className="bg-[red] text-white p-5 text-center text-sm font-medium py-7">Designed by Odukwu Confidence</div>
  </div>;
};

export default Footer;
