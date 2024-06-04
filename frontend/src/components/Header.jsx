import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import {useContext, useState } from "react";
import {NavLink} from "react-router-dom";
import { MdClass, MdClose, MdMenu,MdOutlineShoppingBag  } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { FaOpencart  } from "react-icons/fa";
// IMPORT IMAGES
import logo from "../assets/logo.png";
import logout from "../assets/logout.svg";
import user from "../assets/user.svg";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpenned] = useState(false);
  const toggleMenu = () => setMenuOpenned(!menuOpened)
  const {getTotalCartItems} = useContext(ShopContext)

  return (
    <header className="fixed top-0 left-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10">
      <div className="px-4 flexBetween py-3  max-xs:px-2">
        {/* logo */}
        <div>
          <Link to={'/'}>
            <img src={logo} alt="" height={30} width={50} />{" "}
          </Link>
        </div>
        {/* Navbar Desktop */}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />
        {/* Navbar Mobile */}
        <Navbar
          containerStyles={`${ menuOpened ? 
            "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20  p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          } `}
        />
        {/* Buttons */}
        <div className="flexBetween sm:gap-x-2 bold-16"> 
          {!menuOpened ? (
          <MdMenu className="md:hidden cursor-pointer hover:text-cyan mr-2 p-1 ring-1  ring-cyan-900/30 h-8 w-8  rounded-full  hover:ring-cyan  text-cyan-400 bg-black" onClick={toggleMenu}/>
          ) : (  
          <MdClose className="md:hidden cursor-pointer hover:text-cyan mr-2 p-1 ring-1  ring-cyan-900/30 h-8 w-8  rounded-full  hover:ring-cyan  text-cyan-400 bg-black" onClick={toggleMenu}/>) }
          <div className="flexBetween sm:gap-x-6">
            <NavLink to={"cart-page"} className={"flex"}> < MdOutlineShoppingBag className="p-1 h-8 w-8  ring-slate-900  ring-1 rounded-full  bg-black text-cyan-300 "/> <span className="relative flexCenter w-5 h-5  rounded-full bg-black text-cyan-400  medium-14 -top-2 ">{getTotalCartItems()}</span></NavLink>
            {localStorage.getItem('auth-token') ? <NavLink onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace("/") }} to={"logout"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> <img src={logout} alt="logouticon" height={19} width={19}/> Logout </NavLink>  :
            <NavLink to={"login"} className={"btn_secondary_rounded flexCenter gap-x-2 medium-16"}> <img src={user} alt="usericon" height={19} width={19} /> Login </NavLink> }
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
