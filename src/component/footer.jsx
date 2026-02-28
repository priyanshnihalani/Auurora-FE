import { Facebook, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {

    return (
        <footer className="bg-white  border-divider pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                                <span className="material-icons text-white text-sm"><img src="/logo.svg" /></span>
                            </div>
                            <span className="text-xl font-bold tracking-tight gradient-text">Auurora</span>
                        </div>
                        <p className="text-slate-500 max-w-xs mb-8">
                            The unified collaboration layer for high-performance distributed teams.
                        </p>
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors border border-divider" href="#">
                                <span className="material-icons text-xl"><Facebook /></span>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-primary transition-colors border border-divider" href="#">
                                <span className="material-icons text-xl"><Mail /></span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 mb-6">Product</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary" to="/features">Features</Link></li>
                            <li><Link className="hover:text-primary" to="/pricing">Pricing</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 mt-20">Company</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary" to="/aboutus">About Us</Link></li>
                            <li><Link className="hover:text-primary" to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-slate-900 mb-6 mt-10">Support</h5>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link className="hover:text-primary" to="/privacypolicy">Privacy Policy</Link></li>
                            <li><Link className="hover:text-primary" to="/terms-conditions">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-slate-400">© {new Date().getFullYear()} Auurora Technologies Inc. All rights reserved.</p>
                    <div className="flex items-center gap-6 text-xs text-slate-400">
                        <a className="hover:text-primary" href="#">Privacy</a>
                        <a className="hover:text-primary" href="#">Terms</a>
                        <a className="hover:text-primary" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer
