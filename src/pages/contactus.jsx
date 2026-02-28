import { Instagram, Linkedin, LocateIcon, Mail, Twitter } from "lucide-react"

const ContactUs = () => {
    return (
        <div className="mt-14 font-display   text-slate-800  antialiased">
            <main className="relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px]"></div>
                </div>
                <section className="pt-16 pb-12 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider uppercase bg-primary/10 text-primary rounded-full">Contact Support</span>
                        <h1 className="text-5xl text-black font-extrabold mb-6 tracking-tight ">
                            Get in touch with the <span className="gradient-text">Auurora</span> team.
                        </h1>
                        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            We’re here to help you scale your business. Reach out and our specialized support team will get back to you within 24 hours.
                        </p>
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-5 space-y-8">
                            <div className="glass-card  p-8 rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-200 ">
                                <h3 className="text-2xl font-bold mb-8 dark:text-white">Contact Information</h3>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-icons text-primary"><Mail/></span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                                            <p className="text-slate-500 dark:text-slate-400 mb-2">Our team is ready to assist you.</p>
                                            <a className="text-primary font-semibold hover:underline" href="mailto:hello@auurora.io">hello@auurora.io</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <span className="material-icons text-primary"><LocateIcon/></span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 mb-1">Visit Us</h4>
                                            <p className="text-slate-500 dark:text-slate-400">
                                                123 Innovation Drive, Suite 500<br />
                                                San Francisco, CA 94103
                                            </p>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Follow Us</h4>
                                        <div className="flex gap-4">
                                            <a className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#">
                                                <Twitter/>
                                            </a>
                                            <a className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#">
                                                <Linkedin/>
                                            </a>
                                            <a className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#">
                                                <Instagram/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg border border-slate-200 ">
                                <img alt="Office Location Map" className="w-full h-full object-cover" data-alt="A clean top-down map showing San Francisco streets" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdxe4CSeoT8HkJVvURW-PF5AadiBC_88A8zra8yCY8kFHZIuHgtVSPyhv8K1kn6JOX5GNHHOmSqHYhNdcfB6P5-MBf66JyafK6Yi328EJjljqXRL6q7qlxD-VZQZFOgzpRoTYt3HKe2mqukl0-FN895AT3vOrFXHLxNfnVZ0mMJofAlGUlBcvilMeLGS2LoaRTkMxMf6O4R5VbocnrnQ1xJiWbu24meX2lj84H9ffQqHwuQLZ12oomwfM60T4PzFwNZOaGBOg3D1E" />
                                <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="p-8 md:p-12 rounded-xl shadow-2xl shadow-slate-200/60 dark:shadow-none border border-slate-200 ">
                                <h3 className="text-3xl font-bold mb-2 dark:text-white">Send us a message</h3>
                                <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">Fill out the form below and we'll get back to you as soon as possible.</p>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 " for="name">Full Name</label>
                                            <input className="w-full px-4 py-3.5 rounded-xl border border-slate-200  bg-slate-50  focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" id="name" placeholder="e.g. Priyansh Nihalani" type="text" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 " for="email">Work Email</label>
                                            <input className="w-full px-4 py-3.5 rounded-xl border border-slate-200  bg-slate-50  focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" id="email" placeholder="work@company.com" type="email" />
                                        </div>
                                    </div>
                                    <div className="space-y-2 space-x-4">
                                        <label className="text-sm font-semibold text-slate-700 " for="subject">Subject</label>
                                        <select className="w-auto px-4 py-3.5 text-slate-500 rounded-xl border border-slate-200  bg-slate-50  focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all " id="subject">
                                            <option>General Inquiry</option>
                                            <option>Technical Support</option>
                                            <option>Sales &amp; Partnerships</option>
                                            <option>Billing Question</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 " for="message">Message</label>
                                        <textarea className="w-full px-4 py-3.5 rounded-xl border border-slate-200  bg-slate-50  focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500" id="message" placeholder="How can we help you today?" rows="5"></textarea>
                                    </div>
                                    <div className="flex items-center gap-2 pb-4">
                                        <input className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary" id="consent" type="checkbox" />
                                        <label className="text-sm text-slate-500 dark:text-slate-400" for="consent">I agree to the <a className="text-primary hover:underline" href="#">Privacy Policy</a> and terms of service.</label>
                                    </div>
                                    <button className="w-full md:w-auto px-10 py-4 rounded-xl gradient-button cta-gradient font-bold text-lg shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all text-white" type="submit">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta-gradient py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-3xl font-bold mb-2 text-white">Need a faster answer?</h2>
                                <p className="text-slate-200">Check out our detailed documentation and FAQ pages.</p>
                            </div>
                            <div className="flex gap-4">
                                <a className="px-8 py-3.5 rounded-xl border border-white/20 font-bold hover:bg-white/10 transition-all text-white" href="#">Browse Docs</a>
                                <a className="px-8 py-3.5 rounded-xl border border-white/20 font-bold hover:bg-white/10 transition-all text-white" href="#">Visit FAQ</a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default ContactUs