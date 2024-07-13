import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false)

  return (

    <div className="bg-transparent text-center flex ">
      { <div className="p-8 text-white flex">
        <img src={logo} alt="Abhishek Patil" className="w-10" />
       
      </div> }
      <div onClick={() => setMenuIcon(!menuIcon)} className="absolute right-8 top-8 cursor-pointer md:hidden">
        {
          menuIcon ? <CloseIcon sx={{ color: "white", fontSize: "40px" }} /> : <MenuIcon sx={{ color: "white", fontSize: "40px" }} />
        }
      </div>
      <ul className={`text-white absolute right-0 md:flex md:item-center md:pb-5 md:top-4  max-md:bg-[#191919] md:z-auto max-md:z-30 z-[-1] w-screen md:w-auto md:pl-0 lg:pl-9 transition-all duration-500 ease-in ${menuIcon ? 'top-20 opacity-100' : 'hidden'}  md:opacity-100 font-semibold z-40 tracking-widest`} >
        <li className="p-6 max-md:p-3  " ><Link to="/about" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100">ABOUT</Link></li>
        <li className="p-6 max-md:p-2 "><Link to="/Portfolio" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  ">PROTFOLIO</Link></li>
        <li className="p-6 max-md:p-2 "><Link to="/project" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  ">PROJECT</Link></li>
        {/* <li className="p-6  max-md:p-2  "><Link to="/links" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100 ">LINKS</Link></li> */}
        <li className="p-6 max-md:p-2 "><Link to="/contact" className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  ">CONTACT</Link></li>
      </ul>
    </div>
  );
};
export default Navbar;
