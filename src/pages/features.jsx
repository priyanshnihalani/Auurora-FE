import { CheckCircle, Folder, Loader2Icon, Lock, MessageCircle, NetworkIcon, Shield, Verified } from "lucide-react"
import MouseGlow from "../component/mouseparticles"

const Features = () => {
    return (
        <>
            <div className="w-full">
                <MouseGlow />
            </div>
            <div class="font-sans bg-background-light text-slate-700 antialiased overflow-x-hidden">
                <header class="relative pt-44 pb-32 overflow-hidden">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none opacity-40">
                        <div class="absolute top-[-10%] left-[20%] w-125 h-[500px] bg-primary/20 rounded-full blur-[120px]"></div>
                        <div class="absolute top-[10%] right-[20%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px]"></div>
                    </div>
                    <div class="max-w-7xl mx-auto px-6 text-center relative z-10">
                        <div class="animate-pulse inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-divider text-slate-500 text-xs font-bold uppercase tracking-widest mb-8 shadow-sm">
                            <span class="text-primary font-extrabold ">Platform Overview</span>
                        </div>
                        <h1 class="text-6xl  font-display font-extrabold tracking-tighter text-slate-900 mb-8 leading-tight">
                            A unified ecosystem for<br />
                            <span class="gradient-text">modern teams</span>
                        </h1>
                        <p class="max-w-3xl mx-auto text-xl text-slate-500 mb-12 leading-relaxed font-light">
                            Consolidate your stack. Auurora brings together file management, communication, and complex project orchestration into a single, high-performance interface.
                        </p>
                    </div>
                </header>
                <section class="max-w-7xl mx-auto px-6 mb-32">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="glass p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:translate-y-[-8px] transition-all duration-300">
                            <div class="w-16 h-16 rounded-2xl bg-white shadow-md border border-divider flex items-center justify-center mb-8">
                                <span class="material-symbols-outlined text-4xl icon-gradient"><Folder /></span>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-slate-900 mb-4">File Management</h3>
                            <p class="text-slate-500 leading-relaxed">Centralized asset storage with instant previews, smart tagging, and seamless integration across your entire workspace.</p>
                        </div>
                        <div class="glass p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:translate-y-[-8px] transition-all duration-300">
                            <div class="w-16 h-16 rounded-2xl bg-white shadow-md border border-divider flex items-center justify-center mb-8">
                                <span class="material-symbols-outlined text-4xl icon-gradient"><MessageCircle /></span>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-slate-900 mb-4">Real-time Chat</h3>
                            <p class="text-slate-500 leading-relaxed">Low-latency communication channels designed for deep focus, featuring rich media support and automated summarization.</p>
                        </div>
                        <div class="glass p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-white hover:translate-y-[-8px] transition-all duration-300">
                            <div class="w-16 h-16 rounded-2xl bg-white shadow-md border border-divider flex items-center justify-center mb-8">
                                <span class="material-symbols-outlined text-4xl icon-gradient"><NetworkIcon /></span>
                            </div>
                            <h3 class="text-2xl font-display font-bold text-slate-900 mb-4">Task Orchestration</h3>
                            <p class="text-slate-500 leading-relaxed">Beyond simple task lists. Dynamic workflows that adapt to your team's velocity and complex project dependencies.</p>
                        </div>
                    </div>
                </section>
                <section class="py-24 bg-white border-y border-divider overflow-hidden">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="flex flex-col lg:flex-row items-center gap-20">
                            <div class="lg:w-3/5 relative">
                                <div class="glass p-4 rounded-3xl shadow-2xl border border-divider relative z-10">
                                    <div class="bg-white rounded-2xl aspect-[16/10] overflow-hidden relative ">
                                        <div class="absolute inset-0 p-6 flex flex-col gap-4">
                                            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
                                                <div class="flex gap-2">
                                                    <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                                    <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                                                    <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                                                </div>
                                                <div class="w-32 h-4 bg-slate-200 rounded-full"></div>
                                            </div>
                                            <div class="grid grid-cols-12 gap-4 flex-1">
                                                <div class="col-span-3 space-y-3">
                                                    <div class="h-8 bg-primary/20 rounded-lg"></div>
                                                    <div class="h-8 bg-slate-800 rounded-lg"></div>
                                                    <div class="h-8 bg-slate-800 rounded-lg"></div>
                                                </div>
                                                <div class="col-span-9  rounded-xl p-4">
                                                    <div class="w-full h-full border border-slate-700 rounded-lg border-dashed flex items-center justify-center">
                                                        <span class="material-icons text-slate-600 text-4xl animate-spin"><Loader2Icon/></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
                            </div>
                            <div class="lg:w-2/5">
                                <h2 class="text-4xl font-display font-bold text-slate-900 mb-8 tracking-tight">Enterprise intelligence at your fingertips.</h2>
                                <ul class="space-y-8">
                                    <li class="flex gap-4">
                                        <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                            <span class="material-icons text-primary text-xs"><CheckCircle/></span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-900 mb-1">Advanced Version History</h4>
                                            <p class="text-sm text-slate-500">Travel back in time with infinite versioning. Compare changes across any file type instantly.</p>
                                        </div>
                                    </li>
                                    <li class="flex gap-4">
                                        <div class="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 mt-1">
                                            <span class="material-icons text-purple-500 text-xs"><CheckCircle/></span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-900 mb-1">Threaded Contextual Replies</h4>
                                            <p class="text-sm text-slate-500">Keep conversations organized with deep threading and contextual links to project files.</p>
                                        </div>
                                    </li>
                                    <li class="flex gap-4">
                                        <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                            <span class="material-icons text-primary text-xs"><CheckCircle/></span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-900 mb-1">Smart Resource Allocation</h4>
                                            <p class="text-sm text-slate-500">AI-driven suggestions for task distribution based on team capacity and skill sets.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-24 bg-background-light">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="text-center mb-20">
                            <h2 class="text-4xl font-display font-bold text-slate-900 mb-4">Scale with your team</h2>
                            <p class="text-slate-500 max-w-2xl mx-auto">Flexible workspace management that grows from a small startup to global enterprise without missing a beat.</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div class="bg-white p-8 rounded-3xl border border-divider shadow-sm">
                                <div class="flex items-center justify-between mb-8">
                                    <h4 class="font-display font-bold text-slate-900">Workspace Management</h4>
                                    <span class="px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase rounded-full tracking-wider">Active</span>
                                </div>
                                <div class="space-y-4">
                                    <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                        <div class="flex items-center gap-3">
                                            <div class="flex -space-x-2">
                                                <img alt="Avatar" class="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaParQJJYOqLZV2uhdFrChGxJJcuzNmTTDSjW-tunF8cZM27DgXQeYMzfmy3hd18SJOhwD6k9D5X4S0DZl5l5bYonkEVY7AD049a24m8J3e9msjPEnLHDTytJYyGyw4Ccx-ZJNQgOkLAgtZEgh5mywtamazPpDCSgI1xsTnMDKMjZXMgZCW4LdwP2-smj3Dgd5ekYqNxKeGJouhXKh1iyeeWk_KuCAH26wp4WF6zGx-_Yphhd-hDa1C3dG3BtxG1ohWYQOY9tKgjU" />
                                                <img alt="Avatar" class="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-kco5Lb-WKPN1fWbJdxNRazSF71HmKZUci85eLkU-PYpJ88nD9omA4hrWIAtL5dwze8joL1TUoNkZzmeoZy23B-G4TTU3J722409H0co3fmhgWwXJLACzEppA0o1KX4SZXwfJcE51bGwOnPVRpNx0WHyaG32OoNJBE0sdODsD2exTwPOBzt8O9LTBr6VZIdsBwtLQ5Waep0_VbPWDgTDLP2w6J-4dt1OYvBN6d5GasVQgQa1ERl_lcRQHdBf0iqELGV1COHhiWi0" />
                                                <img alt="Avatar" class="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbOX_lPcPpDyMXCchUm1HvCHzGDuPydc-IW-qD0rINP2jU3GotwYt_N27Hu3CE9cJsexjMLlmi-Z2bQCBoV_SELklxFtZIOkiaPzDUOmjAw9UUbAuetQLwyuMn57Oq4uLYDEQm80csMLpw_X5Kq6s_BezofpC6YLVJO4nN64GiZ7Q9q1J9mlGbrHtyXVPyBgSLb-dykfyplOd_skpdQqaXNUptf9KEuXKZs3RWFwBfsM8u9NXNM0-i-fS0Ym1zbQGxUC_dZFpaQ9w" />
                                            </div>
                                            <span class="text-sm font-semibold text-slate-700">Design Studio</span>
                                        </div>
                                        <span class="text-xs font-bold text-slate-400">12 Members</span>
                                    </div>
                                    <div class="flex items-center justify-between p-4 bg-slate-50 rounded-xl opacity-60">
                                        <div class="flex items-center gap-3">
                                            <div class="flex -space-x-2">
                                                <img alt="Avatar" class="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD39dR5xYXAXeVY3XigHMhnDusU216cSjVlviWxH74nOagRx0EpwQqQqzANRSHgbLT0bPiB6KIN0z9Wy7ILXaJqzw1IwfR4rsM47y1sLgfRnmgO5iUa59E2C1UUoSBI1H6KuLSCMi_U7KRyQTcY07OK8EKXWilmWHr6MDqDIJBEmiq9Ep5yhW1KvR3r7O_liTN73oR9VMi2aOVeBTOoHcDcaOYHG3VfAFab_0DyqBVz2pbkXC-lf1JtM6yv1rbZWBCv0uwpVxBTTHM" />
                                                <img alt="Avatar" class="w-8 h-8 rounded-full border-2 border-white" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCknuRfYXzk19UthUEqBYjBw83KwtuOmAESVVSkP7mOVHpKXW1sXuftrBzIggpSUcVW3HYaIoMkaWHrGdTDG6hfg1Zs2K_IAxY6TmBR7OONx6JgAIzh5ycMzZ4aEPv4qQcWAOi5X9mgF2tKcUweNJlPdiAR91v4NafzlPkzlK4QSh0KFtxcj2hJwgvwH7ss08W73x1FcLuXEboACQj0F2P_f_qIwifKXx1PACOQ6rid_PnO42YworDCWLQ1gTSPI_ArBcUpjcJ4WsE" />
                                            </div>
                                            <span class="text-sm font-semibold text-slate-700">Product Engineering</span>
                                        </div>
                                        <span class="text-xs font-bold text-slate-400">45 Members</span>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white p-8 rounded-3xl border border-divider shadow-sm">
                                <h4 class="font-display font-bold text-slate-900 mb-8">Role-Based Access</h4>
                                <div class="space-y-4">
                                    <div class="flex items-center gap-4">
                                        <div class="px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-bold w-24 text-center">Admin</div>
                                        <p class="text-sm text-slate-500">Full control over billing, security, and workspace settings.</p>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold w-24 text-center">Editor</div>
                                        <p class="text-sm text-slate-500">Can create, edit and delete project assets and tasks.</p>
                                    </div>
                                    <div class="flex items-center gap-4">
                                        <div class="px-4 py-2 rounded-lg bg-slate-200 text-slate-600 text-xs font-bold w-24 text-center">Viewer</div>
                                        <p class="text-sm text-slate-500">Read-only access to files and communication logs.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-24 bg-white">
                    <div class="max-w-7xl mx-auto px-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <div>
                                <div class="w-12 h-1 bg-primary mb-8 rounded-full"></div>
                                <h2 class="text-4xl font-display font-bold text-slate-900 mb-6">Enterprise Security</h2>
                                <p class="text-lg text-slate-500 mb-10 font-light leading-relaxed">
                                    Security is foundational to our architecture. We employ multi-layer encryption and zero-knowledge protocols to ensure your data remains your own.
                                </p>
                                <div class="flex flex-wrap gap-6 items-center grayscale opacity-50">
                                    <div class="flex items-center gap-2 border border-divider px-3 py-1.5 rounded-lg">
                                        <span class="material-icons text-xs"><Verified size={18}/></span>
                                        <span class="text-[10px] font-bold uppercase tracking-widest">SOC2 Type II</span>
                                    </div>
                                    <div class="flex items-center gap-2 border border-divider px-3 py-1.5 rounded-lg">
                                        <span class="material-icons text-xs"><Shield size={18}/></span>
                                        <span class="text-[10px] font-bold uppercase tracking-widest">GDPR Compliant</span>
                                    </div>
                                    <div class="flex items-center gap-2 border border-divider px-3 py-1.5 rounded-lg">
                                        <span class="material-icons text-xs"><Lock size={18}/></span>
                                        <span class="text-[10px] font-bold uppercase tracking-widest">ISO 27001</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="w-12 h-1 bg-purple-500 mb-8 rounded-full"></div>
                                <h2 class="text-4xl font-display font-bold text-slate-900 mb-6">Global Infrastructure</h2>
                                <p class="text-lg text-slate-500 mb-10 font-light leading-relaxed">
                                    Built on a proprietary edge-mesh network that delivers 99.99% uptime and sub-50ms latency for users anywhere on the globe.
                                </p>
                                <div class="relative h-24 overflow-hidden">
                                    <div class="absolute inset-0 subtle-line h-[1px] top-1/2"></div>
                                    <div class="absolute w-2 h-2 rounded-full bg-primary top-1/2 -mt-1 left-1/4"></div>
                                    <div class="absolute w-2 h-2 rounded-full bg-purple-500 top-1/2 -mt-1 left-1/2"></div>
                                    <div class="absolute w-2 h-2 rounded-full bg-primary top-1/2 -mt-1 left-3/4"></div>
                                    <div class="mt-14 flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">
                                        <span>Americas</span>
                                        <span>Europe</span>
                                        <span>Asia Pacific</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-24 bg-background-light">
                    <div class="max-w-5xl mx-auto px-6">
                        <div class="cta-gradient rounded-3xl p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/25">
                            <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2"></div>
                            <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-400/20 rounded-full blur-[70px] translate-y-1/2 -translate-x-1/2"></div>
                            <h2 class="text-4xl md:text-5xl font-display font-extrabold mb-6 relative z-10">Ready to accelerate your workflow?</h2>
                            <p class="text-lg text-white/80 mb-12 max-w-xl mx-auto relative z-10 font-light">
                                Join thousands of teams already building the future on Auurora. Experience the next generation of collaboration today.
                            </p>
                            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                                <button class="bg-white text-primary px-10 py-4 rounded-xl text-lg font-bold hover:shadow-lg hover:scale-[1.02] transition-all">
                                    Get Started
                                </button>
                                <button class="bg-transparent border border-white/40 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white/10 transition-colors">
                                    Schedule a Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Features