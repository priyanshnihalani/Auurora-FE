import { ActivitySquareIcon, ArrowBigLeftIcon, ArrowBigRightDashIcon, Calendar, ChartArea, CheckCircle, CloudSync, Facebook, Folder, Mail, MessageCircleCodeIcon, MessageCircleDashed, Network, Search, Server, ShieldCheck, TextAlignStart, TvMinimal } from "lucide-react"
import MouseGlow from "../component/mouseparticles"
import { Link } from "react-router-dom"

const Home = () => {
    
    return (
        <>
            <div className="w-full">
                <MouseGlow />
            </div>
            <div className="relative z-10 font-display  text-slate-800 antialiased overflow-x-hidden">
                <header className="relative pt-44 pb-32">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-50">
                        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                        <div className="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px]"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Now in Private Beta
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-slate-900 mb-8">
                            Collaborate at the <br />
                            <span className="gradient-text">speed of light</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed">
                            The distributed platform for high-performance enterprise teams. Centralize your knowledge, communication, and execution in one seamless glass interface.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button className="cta-gradient px-10 py-4 rounded-xl text-lg font-bold text-white shadow-2xl shadow-primary/30 flex items-center gap-2 hover:scale-[1.02] transition-transform">
                                Deploy Auurora <span className=""><ArrowBigRightDashIcon /></span>
                            </button>
                            <button className="bg-white px-10 py-4 rounded-xl text-lg font-bold text-slate-700 flex items-center gap-2 border border-divider shadow-sm hover:bg-slate-50 transition-colors">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </header>
                <section className="w-full mx-auto px-18 py-6 mb-32 relative">
                    <div className="glass rounded-2xl p-4 shadow-2xl border border-white shadow-slate-200/50 overflow-hidden">
                        <div className="rounded-xl border border-divider overflow-hidden bg-white aspect-video relative">
                            <div className="flex h-full">
                                <div className="w-64 border-r border-divider p-6 flex flex-col gap-8">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                        <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-4 w-32 bg-slate-100 rounded"></div>
                                        <div className="h-4 w-24 bg-slate-100 rounded opacity-60"></div>
                                        <div className="h-4 w-28 bg-slate-100 rounded opacity-60"></div>
                                        <div className="h-4 w-36 bg-slate-100 rounded opacity-60"></div>
                                    </div>
                                </div>
                                <div className="flex-1 p-8 bg-background-light">
                                    <div className="flex justify-between items-end mb-12">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2">Workspace Overview</h3>
                                            <p className="text-slate-500 text-sm">Welcome back, Sarah. Here's what's happening.</p>
                                        </div>
                                        <div className="flex -space-x-3">
                                            <img alt="Sarah" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlGrIWeGdeOn1lhW5X0Gmw7s0kMK22Mfn4_MJyC4g0PKRH4g9ayV_xtgdhd6rrxeBnrQmJeNn4FO4tjqkXpuMQOxPtmw8qJy2b4891dGRQVSO2Wnd4dzp67XSdLiiQTbaR4ssf4oO8sTCaTyNrpAs_I8htcjtcoW5eKAPmVELrhtJD1G_jbxodfBsCiphduCW5Tbngu0OQk7T2VtX_OdoCDuykg2pIaI3PxEh27M3vYe_ETxdUZ9iLd_l1mPoGUWwdvpz4-GdLFs" />
                                            <img alt="John" className="w-10 h-10 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAOVsFU6_bsqxWOojCMv03pKCLQYIJxLxGmrUuwx2PoJ9YiAHF0dKBqM8nuMUnle-HKd8jfv4qfzuA76qGJfeNOlvrlXjG-4E0Vxv6S1hlbDXrAb-qA3E26FOC3kaYKRE1VjWIY9tGB9fMAOHtkg0Y0g1VXsQfaRDMkaIrnQfM737WVoLrVmcj6Uf6ev3q530VdfLJ3GxG3817mfL4XW1MOdBlaztKpoeICEOLBcPqdRqZEoLfYEk_vhWh9LqtSGWgUIFb2jijngg" />
                                            <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-xs font-bold text-primary">+4</div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-6">
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-divider">
                                            <span className="material-icons text-primary mb-4"><ChartArea /></span>
                                            <div className="text-2xl font-bold">84%</div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Productivity</div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-divider">
                                            <span className="material-icons text-purple-500 mb-4"><Folder /></span>
                                            <div className="text-2xl font-bold">1.2TB</div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Cloud Storage</div>
                                        </div>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-divider">
                                            <span className="material-icons text-emerald-500 mb-4"><ActivitySquareIcon/></span>
                                            <div className="text-2xl font-bold">128</div>
                                            <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Active Threads</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-8 right-8 w-72 glass rounded-xl border border-white shadow-2xl p-4 transform translate-x-4">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Live Notifications</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex gap-3 p-2 bg-white/80 rounded-lg border border-divider">
                                        <span className="material-icons text-sm text-primary"><MessageCircleCodeIcon /></span>
                                        <div>
                                            <p className="text-xs font-bold">Alex Chen</p>
                                            <p className="text-[10px] text-slate-500">Commented on "Project Alpha"</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 p-2 bg-white/80 rounded-lg opacity-70 border border-divider">
                                        <span className="material-icons text-sm text-emerald-500"><CheckCircle /></span>
                                        <div>
                                            <p className="text-xs font-bold">System</p>
                                            <p className="text-[10px] text-slate-500">Backup completed successfully</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-18 py-24 relative overflow-hidden" id="files">
                    <div className=" mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <span className="material-icons"><TvMinimal /></span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-slate-900">Your knowledge, <br />centralized in the cloud.</h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                A distributed file management system that lives where you work. Instant previews, version control, and deep search across all your enterprise assets.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <span className="material-icons text-primary text-sm"><CheckCircle /></span>
                                    <span className="font-medium text-slate-700">Real-time collaboration on documents</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <span className="material-icons text-primary text-sm"><CheckCircle /></span>
                                    <span className="font-medium text-slate-700">End-to-end encrypted storage</span>
                                </li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-background-light p-6 rounded-2xl shadow-xl border border-divider">
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">Grid View</button>
                                        <button className="px-3 py-1 bg-white border border-divider text-slate-500 text-xs font-bold rounded">List View</button>
                                    </div>
                                    <span className="material-icons text-slate-400"><Search/></span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    <div className="p-4 bg-white rounded-xl border border-divider hover:border-primary/50 transition-colors cursor-pointer group shadow-sm">
                                        <span className="material-icons text-4xl text-amber-400 mb-3 group-hover:scale-110 transition-transform"><Folder /></span>
                                        <p className="text-sm font-bold text-slate-800">Marketing Assets</p>
                                        <p className="text-[10px] text-slate-400">24 files • 1.2 GB</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-divider hover:border-primary/50 transition-colors cursor-pointer group shadow-sm">
                                        <span className="material-icons text-4xl text-blue-400 mb-3 group-hover:scale-110 transition-transform"><Folder /></span>
                                        <p className="text-sm font-bold text-slate-800">Product Specs</p>
                                        <p className="text-[10px] text-slate-400">12 files • 400 MB</p>
                                    </div>
                                    <div className="p-4 bg-white rounded-xl border border-divider hover:border-primary/50 transition-colors cursor-pointer group shadow-sm">
                                        <span className="material-icons text-4xl text-emerald-400 mb-3 group-hover:scale-110 transition-transform"><TextAlignStart /></span>
                                        <p className="text-sm font-bold text-slate-800">Annual_Report.pdf</p>
                                        <p className="text-[10px] text-slate-400">Just now • 4.5 MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-18 py-24 relative overflow-hidden bg-background-light" id="chat">
                    <div className=" mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-20">
                        <div className="lg:w-1/2">
                            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-6">
                                <span className="material-icons"><MessageCircleDashed /></span>
                            </div>
                            <h2 className="text-4xl font-bold mb-6 text-slate-900">Contextual <br />conversations.</h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                Stop switching between apps. Auurora's chat is baked into every document, task, and project. Keep the context where the work happens.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-white shadow-sm border border-divider">
                                    <div className="text-primary font-bold mb-1">99.9%</div>
                                    <div className="text-xs text-slate-500">Uptime Reliability</div>
                                </div>
                                <div className="p-4 rounded-xl bg-white shadow-sm border border-divider">
                                    <div className="text-purple-500 font-bold mb-1">Threaded</div>
                                    <div className="text-xs text-slate-500">Organized Topics</div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="glass p-6 rounded-3xl shadow-xl border border-divider">
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-divider">
                                    <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden">
                                        <img alt="Jordan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnGE5f6MXZa0YDcV-EzwQMRxV-S0TuofQ8NImtNBk1DV44HLle6aDDU-ASmmbGv1EuZ6s8zmoCg17odIXNbgO8x59rH-4Uo1ML0tcS2A8Xggf-E4JapVfI90U22yQCq3v3V_7cCJ8GvHcn8eUX2Nt0IS3EPPCBk0Y_PQGT8hDTphMNBx_XKD5CLK8oF3MWrBM2cq1d19bmOnWuFh7EI4j2vvjHVW838h1sJXT3BJ23OCQNTnbXvdEp2T5m9eUqWiWFSdR1L-Yhw7s" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">#design-ops</p>
                                        <p className="text-[10px] text-emerald-500 font-bold flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 12 Online
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-100 shrink-0 overflow-hidden">
                                            <img alt="Team Member" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWGZJJaTR5v5EnruTWXvMRwodLLSoyy8iTx6dS4Pc3Ml7qIlrDferMC_aoS9zstjMiwfRedNewo31TDZqlJClypY5Npy42u2Rg6fsi_5evQ1pwozJNWIKA2SeT8BD6Q0MFESgnE5FXhFQNj61AGUcFgvY6eu3gmzAzNZA6GVfVJmhsf1HbDbdqlN5JV4lPSk4fQkYDKmz4_k22kQsCxqNnW83nnXbw7n6ZHHauP3KyaoHFa3km5gcdgfO1H2KrEEoFvS3xGKQVPE" />
                                        </div>
                                        <div>
                                            <div className="bg-slate-50 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 border border-divider shadow-sm">
                                                Hey team, have we finalized the v2 color tokens? 🎨
                                            </div>
                                            <div className="flex gap-2 mt-2">
                                                <span className="px-2 py-0.5 rounded-full bg-white border border-divider text-[10px] shadow-sm">👍 4</span>
                                                <span className="px-2 py-0.5 rounded-full bg-white border border-divider text-[10px] shadow-sm">🚀 2</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 justify-end">
                                        <div className="flex flex-col items-end">
                                            <div className="cta-gradient p-3 rounded-2xl rounded-tr-none text-sm text-white font-medium shadow-md">
                                                Almost! Just waiting for Sarah's approval on the primary blue.
                                            </div>
                                            <span className="text-[10px] text-slate-400 mt-1">Sent 2m ago</span>
                                        </div>
                                    </div>
                                    <div className="relative pt-2">
                                        <input className="w-full pl-4 pr-12 py-3 rounded-xl border-divider bg-white focus:ring-primary focus:border-primary text-sm shadow-inner" placeholder="Type a message..." type="text" />
                                        <button className="absolute right-3 top-[calc(50%+4px)] -translate-y-1/2 text-primary">
                                            <span className="material-icons">send</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 px-18" id="tasks">
                    <div className="mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-4 text-slate-900">Project management without clutter.</h2>
                            <p className="text-slate-500 max-w-2xl mx-auto">Visualize progress with our high-performance Kanban engine. Optimized for large teams with complex workflows.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-2 mb-2">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400">To Do</h4>
                                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">3</span>
                                </div>
                                <div className="bg-background-light p-4 rounded-xl border border-divider shadow-sm hover:shadow-md transition-shadow cursor-grab group">
                                    <div className="flex gap-1 mb-3">
                                        <span className="w-8 h-1 bg-amber-400 rounded-full"></span>
                                    </div>
                                    <p className="text-sm font-bold mb-4 text-slate-800">Integrate Stripe API for Enterprise billing</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                                            <span className="material-icons text-xs"><Calendar size={18}/></span> Oct 12
                                        </span>
                                        <img alt="Dev" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzisLeuPemDFGiYc7sVGruq3H69lhX8sKXvFAoJ_3ppTTcmKaOwohwmG1olUoNSjkTFIyzyIKTrjOEe9LyVs88O5uy7OnPk6ZqCRzwHVmLz-6Of36A8tcqq1vm42-iiQOkPSeXVWX9Djj4eO8jAQBj69jig7HdQI_1p7oVl0yGA_cNtnbEetjdv3rla28Os1r2Ao3JUNuqMqQgevNf6D1eRFmAhEXQGsux84wg5FDjhgg6l7XMjv4gkSvKJkDetZIf_2MvQriXlEI" />
                                    </div>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-divider shadow-sm opacity-60">
                                    <div className="flex gap-1 mb-3">
                                        <span className="w-8 h-1 bg-blue-400 rounded-full"></span>
                                    </div>
                                    <p className="text-sm font-bold mb-4">Update brand guidelines</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-2 mb-2">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">In Progress</h4>
                                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">1</span>
                                </div>
                                <div className="bg-white p-4 rounded-xl border-2 border-primary shadow-lg shadow-primary/5 cursor-grab">
                                    <div className="flex gap-1 mb-3">
                                        <span className="w-8 h-1 bg-primary rounded-full"></span>
                                        <span className="w-8 h-1 bg-purple-400 rounded-full"></span>
                                    </div>
                                    <p className="text-sm font-bold mb-4 text-slate-900">Refactor notification engine for scalability</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                                            <span className="material-icons text-xs"><CloudSync size={18}/></span> Processing
                                        </span>
                                        <img alt="Lead" className="w-6 h-6 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBVU3Q5eTgkQEbeyiziCCP4wT14k1brHWJtOKldH6jM3V0xgSj00fFuDxd2f3sC5OZBtKQs7aTaOBafuEDae6vFnuEtpdj5Ekbs1-5cJJ9PjBjhKRZvAif446iExuxoOITU2H1jYLp8PV-7qv9NlTUgICubBoOWAB6kwV8j_5LutB3VWhmny7KTgyWsxUgfpD37rH93YFLAfQXp4TirWJNNqfUTudPzuap3PRRwrvXRvbFYdBTCU3X5UpbTCNa_u1aRtbkW0nZ1Kk" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between px-2 mb-2">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-500">Done</h4>
                                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center text-xs font-bold text-emerald-500">8</span>
                                </div>
                                <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-divider opacity-50">
                                    <p className="text-sm font-bold mb-2 line-through text-slate-500">Launch Landing Page</p>
                                    <span className="material-icons text-emerald-500 text-sm"><CheckCircle size={18}/></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-18 py-24 relative overflow-hidden bg-background-light">
                    <div className="mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <h2 className="text-4xl font-bold mb-6 text-slate-900">Enterprise-Grade Architecture.</h2>
                                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                    Auurora is built on a distributed node network ensuring zero downtime and lightning-fast synchronization across the globe.
                                </p>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-icons text-sm"><Network /></span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Distributed Node Network</h4>
                                            <p className="text-sm text-slate-500">Low-latency data synchronization across 24 global regions.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="mt-1 w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                            <span className="material-icons text-sm"><ShieldCheck /></span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800">Zero-Trust Security</h4>
                                            <p className="text-sm text-slate-500">Enterprise SSO, 2FA, and granular permission controls.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full flex justify-center">
                                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                    <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 400">
                                        <line className="node-line" x1="200" x2="80" y1="200" y2="100"></line>
                                        <line className="node-line" x1="200" x2="320" y1="200" y2="100"></line>
                                        <line className="node-line" x1="200" x2="80" y1="200" y2="300"></line>
                                        <line className="node-line" x1="200" x2="320" y1="200" y2="300"></line>
                                        <line className="node-line" x1="80" x2="320" y1="100" y2="100"></line>
                                        <line className="node-line" x1="80" x2="320" y1="300" y2="300"></line>
                                        <circle cx="200" cy="200" fill="#25aff4" fillOpacity="0.1" r="40" stroke="#25aff4" strokeWidth="2"></circle>
                                        <circle cx="200" cy="200" fill="#25aff4" r="10"></circle>
                                        <circle cx="80" cy="100" fill="#ffffff" r="15" stroke="#25aff4" strokeWidth="1"></circle>
                                        <circle cx="320" cy="100" fill="#ffffff" r="15" stroke="#25aff4" strokeWidth="1"></circle>
                                        <circle cx="80" cy="300" fill="#ffffff" r="15" stroke="#25aff4" strokeWidth="1"></circle>
                                        <circle cx="320" cy="300" fill="#ffffff" r="15" stroke="#25aff4" strokeWidth="1"></circle>
                                    </svg>
                                    <div className="flex flex-col items-center z-10 bg-white p-4 rounded-xl shadow-xl border border-divider text-center">
                                        <span className="material-icons text-primary text-3xl mb-1"><Server /></span>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Core Engine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="px-18 py-24 bg-background-light">
                    <div className=" mx-auto px-6">
                        <div className="cta-gradient rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/20">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-400/20 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/2"></div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 relative z-10">Ready to accelerate your team?</h2>
                            <p className="text-lg text-white/80 mb-10 max-w-xl mx-auto relative z-10">
                                Join 500+ forward-thinking enterprises already using Auurora to redefine how they work.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                <button className="bg-white text-primary px-10 py-4 rounded-xl text-lg font-bold hover:shadow-lg transition-all">
                                    Get Started for Free
                                </button>
                                <button className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors">
                                    Schedule Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default Home