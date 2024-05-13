import {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/nav.scss"

const Nav = () => {
const [first, setFirst] = useState(false);

  return <div className="w-[100%] h-[6rem] bg-[black]">
    <nav className="container m-auto flex justify-between items-center h-[100%] w-[100%] px-4 md:10">
      <div className="logo">
        <img src="/img/logo.png" alt="" className="w-[80%] sm:w-[100%]" />
      </div>
      <div className="hidden lg:block nav_list  lg:flex gap-5 ">
        <Link to="/">

        <li className="text-[white] cursor-pointer list_item"><a href="">Home</a></li>
        </Link>
        <li className="text-[white] cursor-pointer list_item"><a href="">About Us</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">Projects</a></li>
        <li className="text-[white] cursor-pointer list_item">Live Services</li>
        <li className="text-[white] cursor-pointer list_item"><a href="">BFC</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">WOFBI</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">Contact Us</a></li>
      </div>
      <div className="live_btn flex w-[max-content] bg-[red] px-2 py-2 rounded-md gap-2 cursor-pointer text-sm font-medium">
        <img src="/img/Polygon 1.svg" alt="" width={15}/>
        <span className="text-[white]">LIVE SERVICE</span>
      </div>
      <div className="text-[white] lg:hidden" onClick={()=>setFirst(!first)}>
        <i class="fa fa-bars text-3xl" aria-hidden="true"></i>
      </div>
    </nav>

    {
  first &&
 <div className="index relative " onClick={()=>setFirst(!first)}>


   <div className="absolute z-1000 top-30 left-0 right-0 flex flex-col gap-9 bg-[black] text-center p-10">
      
   <li className="text-[white] cursor-pointer list_item"><a href="">Home</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">About Us</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">Projects</a></li>
        <li className="text-[white] cursor-pointer list_item">Live Services</li>
        <li className="text-[white] cursor-pointer list_item"><a href="">BFC</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">WOFBI</a></li>
        <li className="text-[white] cursor-pointer list_item"><a href="">Contact Us</a></li>
    </div>

 </div>
}

    

  </div>;
};

export default Nav;
