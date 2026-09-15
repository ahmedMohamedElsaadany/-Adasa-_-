import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
function   Header() {
    return (

<header className="header text-white w-full bg-[#161616] sticky top-0 z-50">
    <nav className="navbar flex flex-wrap justify-between items-center  p-4 w-3/4  m-auto">
        <div className="cont flex flex-wrap items-center gap-2">
            <div className="logo w-15">
            <img src={logo} alt="عدسة" />
            </div>
            <div className="logo-text">
            <span className="text-xl font-bold bg-linear-to-r from-white to-neutral-300 bg-clip-text text-transparent">عدسة</span>
            <span className="text-xs text-orange-400/80 hidden sm:block tracking-wide">عالم التصوير الفوتوغرافي</span>
            </div>
        </div>
        <ul className="nav-links flex flex-wrap justify-between items-center border border-[#262626] rounded-full p-3 gap-2">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"} >الرئيسية</NavLink></li>
            <li><NavLink to="/blog" className={({ isActive }) => isActive ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"} >المدونة</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 bg-linear-to-r from-orange-500 to-orange-600 text-white" : "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 text-neutral-400 hover:text-white"} >من نحن</NavLink></li>
        </ul>
        <div className="flex gap-4">
            <button className="p-3 text-neutral-500 hover:text-orange-500 hover:bg-[#161616] rounded-xl transition-all duration-300 border border-transparent hover:border-[#262626]">
                A
            </button>
            <NavLink to="/blog" className="btn-primary text-sm hover:-translate-y-1 duration-100" >
                 ابدأ القراءة
            </NavLink>
        </div>
    </nav>
</header>

    )
}
export default Header