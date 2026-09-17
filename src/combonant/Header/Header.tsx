import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkClass = ({ isActive }: { isActive: boolean }) => `transition duration-300 ${isActive ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"}`;
  return (
    <header dir="rtl" className="sticky top-0 z-50 w-full bg-[#161616]/95 backdrop-blur-md border-b border-[#262626]" >
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-6">
          <NavLink to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="عدسة" className="w-12 h-12 object-contain" />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">عدسة</h1>
              <p className="text-xs text-gray-400">عالم التصوير الفوتوغرافي</p>
            </div>
          </NavLink>
          <div className="hidden lg:flex items-center gap-8 flex items-center bg-[#161616] rounded-full p-1.5 border border-[#262626]">
            <NavLink to="/" className={navLinkClass}>
              الرئيسية
            </NavLink>

            <NavLink to="/blog" className={navLinkClass}>
              المدونة
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              من نحن
            </NavLink>
          </div>
          <div className="hidden lg:flex items-center gap-3">
            <button className=" p-4 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626] ">
              <FaSearch />
            </button>
            <NavLink to="/blog" className=" px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold hover:-translate-y-1 transition duration-300 shadow-lg shadow-orange-500/20 " >
              ابدأ القراءة
            </NavLink>
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className=" lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-[#333] text-white hover:text-orange-500 hover:border-orange-500 transition duration-300 " aria-label="فتح القائمة" >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="flex flex-col space-y-1">
            <NavLink to="/" className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${ isActive ? "bg-orange-500/10 text-orange-500 border border-orange-500/30" : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white" }` } >
              الرئيسية
            </NavLink>

            <NavLink to="/blog" className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${ isActive ? "bg-orange-500/10 text-orange-500 border border-orange-500/30" : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white" }` } >
              المدونة
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${ isActive ? "bg-orange-500/10 text-orange-500 border border-orange-500/30" : "text-neutral-400 hover:bg-[#1a1a1a] hover:text-white" }` } >
              من نحن
            </NavLink>

            <NavLink to="/blog" className=" btn-primary mb-3 text-sm text-center mt-2 " >
              ابدأ القراءة
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
