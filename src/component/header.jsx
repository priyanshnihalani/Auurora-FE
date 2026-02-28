import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-md"
          : "bg-transparent"
      }`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                    <div className="w-10 h-10 border-none rounded-lg flex items-center justify-center ">
                        <span className=" text-white"><img src="/logo.svg" /></span>
                    </div>
                    <span className="text-2xl text-slate-800 font-bold tracking-tight gradient-text">Auurora</span>
                </div>
                <div className="hidden md:flex items-center gap-10 text-md font-medium text-slate-600">
                    <a className="hover:text-primary transition-colors" href="#features">Platform</a>
                    <a className="hover:text-primary transition-colors" href="#files">Files</a>
                    <a className="hover:text-primary transition-colors" href="#chat">Chat</a>
                    <a className="hover:text-primary transition-colors" href="#tasks">Tasks</a>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-5 py-2.5 text-sm font-semibold text-slate-700">Log in</button>
                    <button className="cta-gradient px-6 py-2.5 rounded-lg text-sm font-bold text-white shadow-xl shadow-primary/25 hover:opacity-90 transition-all">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Header