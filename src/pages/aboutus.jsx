import { ChartNoAxesColumn, Cloud, FastForward, History, LockIcon, Network, Rss, Server, Sparkles, UserCheck2Icon } from "lucide-react"
import { ServerRouter } from "react-router-dom"
import MouseGlow from "../component/mouseparticles"

const AboutUs = () => {
    return (
        <>
            <div className="w-full">
                <MouseGlow />
            </div>
            <div className="font-sans bg-background-light text-slate-700 antialiased overflow-x-hidden">
                <header className="relative pt-44 pb-32 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-40">
                        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                        <div className="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px]"></div>
                    </div>
                    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-divider text-slate-500 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                            <span className="text-primary font-extrabold">Our Mission</span>
                        </div>
                        <h1 className="text-6xl  font-display font-extrabold tracking-tighter text-slate-900 mb-8">
                            Built for the speed of <br />
                            <span className="gradient-text">collaboration</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed font-light">
                            We are redefining how enterprise teams synchronize, innovate, and execute in a distributed world. At Auurora, we believe high-performance work requires a seamless, unified digital ecosystem.
                        </p>
                    </div>
                </header>
                <section className="max-w-7xl mx-auto px-6 mb-32 relative">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:translate-y-[-4px] transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-divider flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl icon-gradient"><UserCheck2Icon /></span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Unwavering Trust</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">Security is not an afterthought. We build every node with zero-trust principles and end-to-end encryption to protect your enterprise knowledge.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:translate-y-[-4px] transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-divider flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl icon-gradient"><ChartNoAxesColumn /></span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Peak Performance</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">Latency is the enemy of creativity. Our distributed engine ensures your team works at the speed of thought, regardless of geography.</p>
                        </div>
                        <div className="glass p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-white hover:translate-y-[-4px] transition-transform duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-divider flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl icon-gradient"><Rss /></span>
                            </div>
                            <h3 className="text-xl font-display font-bold text-slate-900 mb-4">Relentless Innovation</h3>
                            <p className="text-slate-500 leading-relaxed text-sm">We don't just solve today's collaboration hurdles; we build the tools for tomorrow's challenges through continuous R&amp;D.</p>
                        </div>
                    </div>
                </section>
                <section className="py-24 relative overflow-hidden bg-white border-y border-divider">
                    <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                <span className="material-icons"><History /></span>
                            </div>
                            <h2 className="text-4xl font-display font-bold mb-6 text-slate-900 tracking-tight">Evolving the digital <br />workspace journey.</h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                Founded in 2021 by a team of distributed systems engineers and product designers, Auurora was born out of a frustration with fragmented tools. We saw that teams were spending more time managing their tools than doing their work.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                    <div className="h-6 w-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 bg-primary rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">2021: The Genesis</h4>
                                        <p className="text-sm text-slate-500">Initial prototype of the distributed synchronization engine.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors">
                                    <div className="h-6 w-6 bg-purple-400/20 rounded-full flex items-center justify-center shrink-0 mt-1">
                                        <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">2023: Enterprise Growth</h4>
                                        <p className="text-sm text-slate-500">Scale to 500+ enterprise customers across 15 countries.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-background-light p-8 rounded-3xl shadow-2xl border border-divider relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-3xl pointer-events-none"></div>
                                <div className="aspect-square w-full flex items-center justify-center relative">
                                    <div className="w-48 h-48 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-10 border border-white">
                                        <span className="material-icons text-6xl gradient-text"><Sparkles size={80} /></span>
                                    </div>
                                    <div className="absolute w-80 h-80 border border-slate-200 rounded-full border-dashed animate-[spin_20s_linear_infinite]"></div>
                                    <div className="absolute w-64 h-64 border border-primary/20 rounded-full"></div>
                                    <div className="absolute top-10 left-10 p-3 bg-white rounded-xl shadow-lg border border-divider">
                                        <span className="material-icons text-primary"><Cloud /></span>
                                    </div>
                                    <div className="absolute bottom-10 right-10 p-3 bg-white rounded-xl shadow-lg border border-divider">
                                        <span className="material-icons text-purple-500"><FastForward /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-background-light">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h2 className="text-4xl font-display font-bold mb-4 text-slate-900">The minds behind the magic</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto mb-20 font-light">Our diverse team of world-className engineers, designers, and strategists are united by a single goal: making collaboration effortless.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl bg-white shadow-xl border border-white overflow-hidden mb-6 p-1">
                                    <img alt="Team Member" className="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlGrIWeGdeOn1lhW5X0Gmw7s0kMK22Mfn4_MJyC4g0PKRH4g9ayV_xtgdhd6rrxeBnrQmJeNn4FO4tjqkXpuMQOxPtmw8qJy2b4891dGRQVSO2Wnd4dzp67XSdLiiQTbaR4ssf4oO8sTCaTyNrpAs_I8htcjtcoW5eKAPmVELrhtJD1G_jbxodfBsCiphduCW5Tbngu0OQk7T2VtX_OdoCDuykg2pIaI3PxEh27M3vYe_ETxdUZ9iLd_l1mPoGUWwdvpz4-GdLFs" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900">Sarah Jenkins</h4>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">CEO &amp; Founder</p>
                                <p className="text-xs text-slate-400">Former Product Lead at Stripe</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl bg-white shadow-xl border border-white overflow-hidden mb-6 p-1">
                                    <img alt="Team Member" className="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAOVsFU6_bsqxWOojCMv03pKCLQYIJxLxGmrUuwx2PoJ9YiAHF0dKBqM8nuMUnle-HKd8jfv4qfzuA76qGJfeNOlvrlXjG-4E0Vxv6S1hlbDXrAb-qA3E26FOC3kaYKRE1VjWIY9tGB9fMAOHtkg0Y0g1VXsQfaRDMkaIrnQfM737WVoLrVmcj6Uf6ev3q530VdfLJ3GxG3817mfL4XW1MOdBlaztKpoeICEOLBcPqdRqZEoLfYEk_vhWh9LqtSGWgUIFb2jijngg" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900">David Chen</h4>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">CTO</p>
                                <p className="text-xs text-slate-400">Distributed Systems Architect</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl bg-white shadow-xl border border-white overflow-hidden mb-6 p-1">
                                    <img alt="Team Member" className="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnGE5f6MXZa0YDcV-EzwQMRxV-S0TuofQ8NImtNBk1DV44HLle6aDDU-ASmmbGv1EuZ6s8zmoCg17odIXNbgO8x59rH-4Uo1ML0tcS2A8Xggf-E4JapVfI90U22yQCq3v3V_7cCJ8GvHcn8eUX2Nt0IS3EPPCBk0Y_PQGT8hDTphMNBx_XKD5CLK8oF3MWrBM2cq1d19bmOnWuFh7EI4j2vvjHVW838h1sJXT3BJ23OCQNTnbXvdEp2T5m9eUqWiWFSdR1L-Yhw7s" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900">Marcus Wright</h4>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Head of Design</p>
                                <p className="text-xs text-slate-400">Emmy-winning UX Designer</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl bg-white shadow-xl border border-white overflow-hidden mb-6 p-1">
                                    <img alt="Team Member" className="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtWGZJJaTR5v5EnruTWXvMRwodLLSoyy8iTx6dS4Pc3Ml7qIlrDferMC_aoS9zstjMiwfRedNewo31TDZqlJClypY5Npy42u2Rg6fsi_5evQ1pwozJNWIKA2SeT8BD6Q0MFESgnE5FXhFQNj61AGUcFgvY6eu3gmzAzNZA6GVfVJmhsf1HbDbdqlN5JV4lPSk4fQkYDKmz4_k22kQsCxqNnW83nnXbw7n6ZHHauP3KyaoHFa3km5gcdgfO1H2KrEEoFvS3xGKQVPE" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900">Elena Rodriguez</h4>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">VP of Engineering</p>
                                <p className="text-xs text-slate-400">Security &amp; Infrastructure Expert</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl bg-white shadow-xl border border-white overflow-hidden mb-6 p-1">
                                    <img alt="Team Member" className="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzisLeuPemDFGiYc7sVGruq3H69lhX8sKXvFAoJ_3ppTTcmKaOwohwmG1olUoNSjkTFIyzyIKTrjOEe9LyVs88O5uy7OnPk6ZqCRzwHVmLz-6Of36A8tcqq1vm42-iiQOkPSeXVWX9Djj4eO8jAQBj69jig7HdQI_1p7oVl0yGA_cNtnbEetjdv3rla28Os1r2Ao3JUNuqMqQgevNf6D1eRFmAhEXQGsux84wg5FDjhgg6l7XMjv4gkSvKJkDetZIf_2MvQriXlEI" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900">Jonathan Wu</h4>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Head of Operations</p>
                                <p className="text-xs text-slate-400">Ex-McKinsey Strategy</p>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-32 h-32 rounded-3xl bg-white shadow-xl border border-white overflow-hidden mb-6 p-1">
                                    <img alt="Team Member" className="w-full h-full object-cover rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBVU3Q5eTgkQEbeyiziCCP4wT14k1brHWJtOKldH6jM3V0xgSj00fFuDxd2f3sC5OZBtKQs7aTaOBafuEDae6vFnuEtpdj5Ekbs1-5cJJ9PjBjhKRZvAif446iExuxoOITU2H1jYLp8PV-7qv9NlTUgICubBoOWAB6kwV8j_5LutB3VWhmny7KTgyWsxUgfpD37rH93YFLAfQXp4TirWJNNqfUTudPzuap3PRRwrvXRvbFYdBTCU3X5UpbTCNa_u1aRtbkW0nZ1Kk" />
                                </div>
                                <h4 className="text-xl font-display font-bold text-slate-900">Sofia Kim</h4>
                                <p className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Customer Success</p>
                                <p className="text-xs text-slate-400">Community Growth Lead</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 relative overflow-hidden bg-white">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-1/2">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                                    Technical Mission
                                </div>
                                <h2 className="text-4xl font-display font-bold mb-6 text-slate-900 tracking-tight">Enterprise-Grade Architecture for Global Teams.</h2>
                                <p className="text-lg text-slate-500 mb-8 leading-relaxed font-light">
                                    Our mission is to eliminate physical distance. By leveraging a peer-to-peer node architecture combined with centralized cloud security, we've created a hybrid system that guarantees uptime and speed.
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-5 rounded-2xl border border-divider bg-background-light">
                                        <span className="material-icons text-primary mb-3"><Network /></span>
                                        <h4 className="font-bold text-slate-900 mb-2">Edge Node Sync</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Data is synchronized across local nodes before hitting the cloud, reducing lag to near-zero.</p>
                                    </div>
                                    <div className="p-5 rounded-2xl border border-divider bg-background-light">
                                        <span className="material-icons text-purple-500 mb-3"><LockIcon /></span>
                                        <h4 className="font-bold text-slate-900 mb-2">Sharded Storage</h4>
                                        <p className="text-xs text-slate-500 leading-relaxed">Enterprise assets are sharded and encrypted across multiple regions for maximum resilience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full flex justify-center">
                                <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                                    <svg className="w-full h-full absolute inset-0 opacity-40" viewBox="0 0 400 400">
                                        <line className="node-line" x1="200" x2="80" y1="200" y2="100" ></line>
                                        <line className="node-line" x1="200" x2="320" y1="200" y2="100" ></line>
                                        <line className="node-line" x1="200" x2="80" y1="200" y2="300" ></line>
                                        <line className="node-line" x1="200" x2="320" y1="200" y2="300" ></line>
                                        <line className="node-line" x1="80" x2="320" y1="100" y2="100" ></line>
                                        <line className="node-line" x1="80" x2="320" y1="300" y2="300" ></line>
                                        <circle cx="200" cy="200" fill="#25aff4" fill-opacity="0.1" r="50" stroke="#25aff4" stroke-width="1"></circle>
                                        <circle cx="200" cy="200" fill="#25aff4" r="8"></circle>
                                        <circle cx="80" cy="100" fill="#ffffff" r="12" stroke="#25aff4" stroke-width="1"></circle>
                                        <circle cx="320" cy="100" fill="#ffffff" r="12" stroke="#25aff4" stroke-width="1"></circle>
                                        <circle cx="80" cy="300" fill="#ffffff" r="12" stroke="#25aff4" stroke-width="1"></circle>
                                        <circle cx="320" cy="300" fill="#ffffff" r="12" stroke="#25aff4" stroke-width="1"></circle>
                                    </svg>
                                    <div className="z-10 bg-white p-6 rounded-2xl shadow-2xl border border-divider text-center max-w-[180px]">
                                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                                            <span className="material-icons"><Server /></span>
                                        </div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Architecture</p>
                                        <p className="text-sm font-bold text-slate-800">Unified Engine</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>

    )
}

export default AboutUs