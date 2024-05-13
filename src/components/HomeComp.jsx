import {React,} from "react";
import Nav from "./Nav";
import "../styles/home.scss"
import { Swiper, SwiperSlide,} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Footer from "./footer";
import { Link } from "react-router-dom";


const HomeComp = () => {
  return <div className="home">
    <div className="home">
    <Nav/>
    <div className="home-wrap flex items-center justify-center  h-[70%] ">
    <div className=" text-center">
      <p className="text-[white] text-xl md:text-3xl">Welcome to</p>
      <h1 className="text-[white] text-3xl md:text-5xl font-medium my-1">FAITH TABERNACLE</h1>
      <h1 className="text-[white] text-3xl md:text-5xl font-bold">ICT GROUP</h1>
      <button className="text-[white]  md:text-lg font-medium bg-[red] px-4 py-2 rounded-md mt-4 border-solid border-2 border-[#ccc]">JOIN US TODAY</button>
    </div>
    </div>
    </div>
    <div className="bg-[black] py-16 px-10">
      {/* <div className="container m-auto flex  py-5 gap-3 justify-center"> */}
        <Swiper
        modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={1}

      breakpoints={{ 
            768:{
                slidesPerView:2,
              
            }, 
            1000:{
                slidesPerView:3,
            }, 
           
            
            1300:{
                slidesPerView:4,
            }, 
            
        }}
        className="container m-auto flex justify-center h-[21rem]">
          
       

      <SwiperSlide className="wrap-ict1 h-[21rem] rounded-md p-4 flex flex-col justify-between just">
        <div className=" flex flex-col justify-between h-[100%]">
        <div className="appli bg-[black] text-white px-3 py-1 rounded-xl  w-[max-content]">
          <p className="text-2xl">ICT</p>
          <p className="text-2xl">APPLICATION</p>
        </div>
        <div className="bg-white rounded-lg px-2 py-5  font-medium">General Application of Information
        Technology for the automation of 
        Kingdom Advancement endeavours</div>
          
        </div>
      </SwiperSlide>
      <SwiperSlide className="wrap-ict2 h-[21rem] rounded-md p-4  rounded-md">
        <div className=" flex flex-col justify-between h-[100%]">
        <div className="appli bg-[black] text-white px-3 py-1 rounded-xl  w-[max-content]">
          <p className="text-2xl">SATELITE</p>
          <p className="text-2xl">BROADCASTING</p>
        </div>
        <div className="bg-white rounded-lg p-2 font-medium">One of the things we do is rendering of live broadcast to various Winners’ Satellite Centers across the globe</div>

        </div>
      </SwiperSlide>
      <SwiperSlide className="wrap-ict3 h-[21rem] rounded-md p-4 rounded-xl ">
        <div className=" flex flex-col justify-between h-[100%]">
        <div className="appli bg-[black] text-white px-3 py-1 rounded-xl  w-[max-content]">
          <p className="text-2xl">INTERNET</p>
          <p className="text-2xl">STREAMING</p>
        </div>
        <div className="bg-white rounded-lg p-2 font-medium">We also stream live services on the web via Youtube, FT websites, Mobile Apps, Facebooks, Twitter and Instagram</div>

        </div>
      </SwiperSlide>
      <SwiperSlide className="wrap-ict4 h-[21rem] rounded-md p-4  rounded-md">
        <div className=" flex flex-col justify-between h-[100%]">
          
        <div className="appli bg-[black] text-white px-3 py-1 rounded-xl  w-[max-content]">
          <p className="text-2xl">AUTO</p>
          <p className="text-2xl">MATION</p>
        </div>
        <div className="bg-white rounded-lg p-2 font-medium">We run Automation of Kingdom based initiatives and operations. This is to enhance the flow of Kingdom growth and advancement</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="wrap-ict1 h-[21rem] rounded-md p-4">
        <div className=" flex flex-col justify-between h-[100%]">
          
        <div className="appli bg-[black] text-white px-3 py-1 rounded-xl  w-[max-content]">
          <p className="text-2xl">ICT</p>
          <p className="text-2xl">APPLICATION</p>
        </div>
        <div className="bg-white rounded-lg px-2 py-5  font-medium">General Application of Information
        Technology for the automation of 
        Kingdom Advancement endeavours</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="wrap-ict2 h-[21rem] rounded-md p-4  rounded-md">
        <div className=" flex flex-col justify-between h-[100%]">
          
        <div className="appli bg-[black] text-white px-3 py-1 rounded-xl  w-[max-content]">
          <p className="text-2xl">SATELITE</p>
          <p className="text-2xl">BROADCASTING</p>
        </div>
        <div className="bg-white rounded-lg p-2 font-medium">One of the things we do is rendering of live broadcast to various Winners’ Satellite Centers across the globe</div>
        </div>
      </SwiperSlide>
       </Swiper>
      {/* </div> */}


    </div>
<div className="bg-[white]">
  <div className="container m-auto bg-[#E8E8E8] rounded-lg mt-10">
    <div className="lg:px-20 md:px-10 px-7 flex flex-col-reverse lg:flex-row lg:justify-between gap-12 py-10">

    <div className="flex flex-col gap-5 flex-1">
      <h2 className="text-3xl font-semibold">Dedicated to Serving God</h2>
      <p>We’re committed to serving GOD and the interest of his kingdom</p>
      <p>Are you a software engineer or a network satellite engineer willing to
      serve God and the interest of his kingdom? Please submit your
      application online.</p>
      <p>Within the group, you will be able  to leverage on your core strengths
      to serve the Lord in either the Hardware Sub-Group or Software
      Sub-Group.</p>
      <Link to="/register">

      <button className="w-[max-content] text-[white] text-lg font-medium bg-[red] px-4 py-2 rounded-md mt-4 border-solid border-2 border-[#ccc] ">Click Here TO REGISTER</button>
      </Link>
    </div>
    
<div className="img flex-1 md:w-[100%] md:h-[100%]">
  <img src="/img/Frame 13.png "w alt="" className="w-[100%] h-[100]" />
</div>
    </div>
  </div>
</div>
{/* slide start */}
 <div className="bg-white mt-12 px-10">
  <h3 className="text-2xl md:text-4xl text-center py-1 font-semibold mb-4">Gospel Messages</h3>

      {/* <div className="container m-auto flex  py-5 gap-3 justify-center"> */}
<Swiper
modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={1}

      breakpoints={{ 
            600:{
                slidesPerView:2,
              
            }, 
            1000:{
                slidesPerView:3,
            }, 
           
            
            1300:{
                slidesPerView:4,
            }, 
            
        }}
className="container m-auto py-5 h-[100%] md:h-[21rem]">

      <SwiperSlide className="bg-black h-[21rem] rounded-md p-4 ">
        <div className=" flex flex-col justify-between gap-5 h-[100%]">
          
        <div className="w-[100%]"><img src="/img/Frame 16 (1).png" className="w-[100%]"  alt="" />

          <p className="text-white mt-3 text-md md:text-lg">Understanding The Wonder of Thankgiving</p>
        </div>
        
        <button className="bg-white rounded-full px-5 py-1 w-[max-content] font-medium  text-sm">Bishop David Oyedpo</button>
        </div>

      </SwiperSlide>
     
      <SwiperSlide className="bg-black  h-[21rem] rounded-md p-4">
        <div className=" flex flex-col justify-between gap-5 h-[100%]">
          
         <div className="w-[100%]"><img src="/img/Frame 16.png"  className="w-[100%]" alt="" />

          <p className="text-white mt-3 text-md md:text-lg">Prophetic Warning to The End Time Church</p>
         </div>
        
        
               <button className="bg-white rounded-full py-1 px-5 w-[max-content] font-medium text-sm">Bishop David Oyeddpo</button>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-black flex flex-col justify-center gap-9 h-[21rem] rounded-md p-4 just">
        <div className=" flex flex-col justify-between h-[100%] gap-5">
          
         <div className="w-[100%]">
          <img src="/img/Frame 16 (2).png"  className="w-[100%]" alt="" />
         
          <p className="text-white mt-3 text-md md:text-lg">Prophetic Warning to The End Time Church</p>
         </div>
       <button className="bg-white rounded-full py-1 px-5 w-[max-content] font-medium  text-sm">Bishop David Abioye</button>
        </div>

      </SwiperSlide>
      <SwiperSlide className="bg-black  h-[21rem] rounded-md p-4  rounded-md just">
        <div className=" flex flex-col justify-between gap-5 h-[100%]">
          
         <div className="w-[100%]"><img src="/img/Frame 16 (3).png" className="w-[100%]" alt="" />
          <p className="text-white mt-3 text-md md:text-lg">The Meekness Factor in the School of Exploit</p>
         </div>
        
          <button className="bg-white rounded-full py-1 px-5 w-[max-content] font-medium text-sm">Pastor Folorunsho</button>
        </div>
      </SwiperSlide>
       <SwiperSlide className="bg-black h-[21rem] rounded-md p-4">
        <div className=" flex flex-col justify-between h-[100%] gap-5">
          
        <div className="w-[100%]"><img src="/img/Frame 16 (1).png" alt="" className="w-[100%]" />

          <p className="text-white mt-3 text-md md:text-lg ">Understanding The Wonder of Thankgiving</p>
        </div>
        
        <button className="bg-white rounded-full px-5 py-1 w-[max-content] font-medium text-sm">Bishop David Oyedpo</button>
        </div>

      </SwiperSlide>
     
      <SwiperSlide className="bg-black h-[21rem] rounded-md p-4 ">
        <div className=" flex flex-col justify-between h-[100%] gap-5">
         <div className=""><img src="/img/Frame 16.png" className="w-[100%]" alt="" />
          <p className="text-white mt-3 text-md md:text-lg">Prophetic Warning to The End Time Church</p>
         </div>
        <button className="bg-white rounded-full py-1 px-5 w-[max-content] font-medium text-sm mb-14">Bishop David Oyeddpo</button>
          
        </div>
      </SwiperSlide>
      </Swiper>
     
      </div>


    {/* </div> */}
{/* slider end */}

    <div className="bg-white mt-10">
        <h2 className="text-2xl md:text-4xl text-center mb-4 font-semibold">Our Core Values</h2>
      <div className="container m-auto bg-[#E8E8E8] rounded-lg px-10 py-8">
        <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-4 gap-3 justify-items-center">
          <div className="bg-white p-3 w-[100%] md:w-[70%] rounded-xl">
            <h4 className="font-semibold text-2xl mb-2">Sacrifice</h4>
            <p className="text-md font-medium font-medium">Sacrifice is another Core Value we hold. it takes sacrifice and selflessness to really serve GOD wholeheartedly.</p>
          </div>
          <div className="bg-white p-3 w-[100%] md:w-[70%] rounded-xl">
            <h4 className="font-semibold text-2xl mb-2">Diligence</h4>
            <p className="text-md font-medium font-medium">Hard work alway pays. In Winners Chapel ICT Group, ther is no room for laziness. Diligence is one of our cord values</p>
          </div>
          <div className="bg-white p-3  w-[100%] md:w-[70%] rounded-xl">
            <h4 className="font-semibold text-2xl mb-2">Spirituality</h4>
            <p className="text-md font-medium font-medium">One of our core value is spirituality. In order to God and get rewarded, you have to be spiritually minded</p>
          </div>
          <div className="bg-white p-3  w-[100%] md:w-[70%] rounded-xl">
            <h4 className="font-semibold text-2xl mb-2">Creativity</h4>
            <p className="text-md font-medium font-medium">Creativity is one of our core values. we are creative in all we do</p>
          </div>

        </div>
      </div>

    </div>
<Footer/>
  </div>
};

export default HomeComp;
