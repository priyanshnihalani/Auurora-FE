import { CheckCircle, Cross, PlusCircle, X } from "lucide-react"
import MouseGlow from "../component/mouseparticles"
import { useState } from "react";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Can I switch plans anytime?",
            answer:
                "Yes, you can upgrade or downgrade your plan at any time from your dashboard. Changes apply immediately.",
        },
        {
            question: "How do team seats work?",
            answer:
                "Each team seat allows one member to collaborate under your organization. You can add or remove seats anytime.",
        },
        {
            question: "Is there a discount for non-profits?",
            answer:
                "Yes, we offer special pricing for registered non-profit organizations. Contact support for verification.",
        },
        {
            question: "What payment methods do you accept?",
            answer:
                "We accept major credit cards, debit cards, UPI, and international payments via Stripe.",
        },
    ];

    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };


    return (
        <>
            <div className="w-full">
                <MouseGlow />
            </div>
            <div class=" bg-background-light  text-slate-900 dark:text-slate-100 antialiased">
                <header class="relative pt-28 pb-16 overflow-hidden">
                    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
                    <div class="max-w-7xl mx-auto px-4 text-center">
                        <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">Pricing Plans</span>
                        <h1 class="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                            Transparent pricing for <br /><span class="text-primary">teams of all sizes</span>
                        </h1>
                        <p class="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10">
                            Scalable solutions for modern collaborative workspaces. Choose a plan that fuels your productivity without hidden fees.
                        </p>
                        <div className="flex items-center justify-center gap-4 mb-12">

                            {/* Monthly Label */}
                            <span
                                className={`text-sm font-semibold transition-colors ${!isYearly
                                    ? "text-slate-900 dark:text-white"
                                    : "text-slate-500 dark:text-slate-400"
                                    }`}
                            >
                                Monthly
                            </span>

                            {/* Toggle Button */}
                            <button
                                onClick={() => setIsYearly(!isYearly)}
                                className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${isYearly
                                    ? "bg-primary"
                                    : "bg-slate-200 dark:bg-slate-800"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? "translate-x-7" : "translate-x-0"
                                        }`}
                                />
                            </button>

                            {/* Yearly Label */}
                            <span
                                className={`text-sm font-semibold transition-colors ${isYearly
                                    ? "text-slate-900 dark:text-white"
                                    : "text-slate-500 dark:text-slate-400"
                                    }`}
                            >
                                Yearly
                            </span>

                            {/* Save Badge */}
                            {isYearly && (
                                <span className="inline-block px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-wide">
                                    Save 20%
                                </span>
                            )}
                        </div>
                    </div>
                </header>
                <section class="max-w-7xl mx-auto px-4 pb-24">
                    <div class="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div class="glass-card rounded-xl p-8 border border-slate-200  flex flex-col hover:shadow-xl transition-shadow group">
                            <div class="mb-8">
                                <h3 class="text-xl font-bold mb-2 text-slate-700">Starter</h3>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">Ideal for individuals and hobbyists starting their journey.</p>
                            </div>
                            <div class="mb-8">
                                <div class="flex items-baseline gap-1">
                                    <span class="text-4xl font-extrabold text-slate-700">$0</span>
                                    <span class="text-slate-500 text-sm">/mo</span>
                                </div>
                                <p class="text-xs text-slate-400 mt-2">Free forever</p>
                            </div>
                            <ul class="space-y-4 mb-10 flex-grow">
                                <li class="flex items-center gap-3 text-sm font-medium">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Up to 3 Workspaces</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-medium">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">5GB Cloud Storage</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-medium text-slate-400">
                                    <span class="material-icons text-slate-300 dark:text-slate-700 text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Basic Collaboration</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-medium text-slate-400">
                                    <span class="material-icons text-slate-300 dark:text-slate-700 text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Email Support</p>
                                </li>
                            </ul>
                            <button class="w-full py-4 border-2 border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 hover:text-white">
                                Current Plan
                            </button>
                        </div>
                        <div class="professional-gradient-border glow-subtle rounded-xl p-8 flex flex-col transform md:-translate-y-4">
                            <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                                Most Popular
                            </div>
                            <div class="mb-8 relative z-10">
                                <h3 class="text-xl font-bold mb-2 text-slate-700">Professional</h3>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">Advanced tools for growing teams that need more power.</p>
                            </div>
                            <div class="mb-8 relative z-10">
                                <div class="flex items-baseline gap-1 text-primary">
                                    <span class="text-4xl font-extrabold">$24</span>
                                    <span class="text-sm font-bold">/user/mo</span>
                                </div>
                                <p class="text-xs text-slate-400 mt-2">Billed annually</p>
                            </div>
                            <ul class="space-y-4 mb-10 flex-grow relative z-10">
                                <li class="flex items-center gap-3 text-sm font-semibold">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Unlimited Workspaces</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-semibold">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">100GB Cloud Storage</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-white">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Advanced Security Tools</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-white">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Priority 24/7 Support</p>
                                </li>
                                <li class="flex items-center gap-3 text-sm font-semibold text-slate-900 dark:text-white">
                                    <span class="material-icons text-primary text-lg"><CheckCircle /></span>
                                    <p className="text-slate-700">Custom Integrations</p>
                                </li>
                            </ul>
                            <button class="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 relative z-10">
                                Upgrade to Pro
                            </button>
                        </div>
                    </div>
                </section>
                <section class="max-w-7xl mx-auto px-4 pb-24">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl font-bold text-slate-900  mb-4">Compare all features</h2>
                        <p class="text-slate-600 dark:text-slate-400">Everything you need to know about what's included.</p>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full table-fixed border-collapse text-left">

                            {/* HEADER */}
                            <thead>
                                <tr className="border-b border-slate-200 dark:border-slate-800">
                                    <th className="w-1/3 py-6 px-4 text-sm font-bold text-slate-900 ">
                                        Core Features
                                    </th>
                                    <th className="w-1/3 py-6 px-4 text-sm font-bold text-center text-slate-900 ">
                                        Starter
                                    </th>
                                    <th className="w-1/3 py-6 px-4 text-sm font-bold text-center text-primary">
                                        Professional
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">

                                {/* SECTION HEADER */}
                                <tr className="bg-slate-50 dark:bg-slate-900/20">
                                    <td colSpan={3} className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                                        Workspace Features
                                    </td>
                                </tr>

                                {/* ROW */}
                                <tr>
                                    <td className="py-5 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 align-middle">
                                        Concurrent Projects
                                    </td>
                                    <td className="py-5 px-4 text-center text-sm text-slate-600 align-middle">
                                        3
                                    </td>
                                    <td className="py-5 px-4 text-center text-sm font-semibold text-slate-900 align-middle">
                                        Unlimited
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-5 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 align-middle">
                                        File Versioning
                                    </td>
                                    <td className="py-5 px-4 text-center text-sm text-slate-600 align-middle">
                                        7 Days
                                    </td>
                                    <td className="py-5 px-4 text-center text-sm font-semibold text-slate-900 align-middle">
                                        Unlimited
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-5 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 align-middle">
                                        Collaborative Whiteboard
                                    </td>
                                    <td className="py-5 px-4 text-center align-middle">
                                        <X className="mx-auto text-slate-300 dark:text-slate-600" size={18} />
                                    </td>
                                    <td className="py-5 px-4 text-center align-middle">
                                        <CheckCircle className="mx-auto text-primary" size={18} />
                                    </td>
                                </tr>

                                {/* SECTION HEADER */}
                                <tr className="bg-slate-50 dark:bg-slate-900/20">
                                    <td colSpan={3} className="py-4 px-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                                        Security & Compliance
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-5 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 align-middle">
                                        Two-Factor Authentication
                                    </td>
                                    <td className="py-5 px-4 text-center align-middle">
                                        <CheckCircle className="mx-auto text-primary" size={18} />
                                    </td>
                                    <td className="py-5 px-4 text-center align-middle">
                                        <CheckCircle className="mx-auto text-primary" size={18} />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="py-5 px-4 text-sm font-medium text-slate-700 dark:text-slate-300 align-middle">
                                        Single Sign-On (SSO)
                                    </td>
                                    <td className="py-5 px-4 text-center align-middle">
                                        <X className="mx-auto text-slate-300 dark:text-slate-600" size={18} />
                                    </td>
                                    <td className="py-5 px-4 text-center align-middle">
                                        <CheckCircle className="mx-auto text-primary" size={18} />
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
                <section className="max-w-4xl mx-auto px-4 pb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Need help? We've got answers for you.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-background-dark shadow-sm"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between p-6 text-left group"
                                >
                                    <span className="font-bold text-slate-900">
                                        {faq.question}
                                    </span>

                                    <span className="text-slate-400 group-hover:text-primary transition-colors">
                                        <PlusCircle
                                            className={`transition-transform duration-300 ${activeIndex === index ? "rotate-45" : ""
                                                }`}
                                        />
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${activeIndex === index
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-6 pb-6 text-sm text-slate-600 dark:text-slate-400">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section class="max-w-7xl mx-auto px-4 pb-32">
                    <div class="cta-gradient rounded-3xl p-12 text-center relative overflow-hidden shadow-2xl">
                        <div class="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
                        <div class="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                        <div class="relative z-10">
                            <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to transform your workspace?</h2>
                            <p class="text-white/80 max-w-xl mx-auto mb-10 text-lg font-medium">Join over 10,000 teams using Auurora to streamline their creative collaboration.</p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                <button class="bg-white text-primary font-bold py-4 px-10 rounded-xl hover:bg-slate-50 shadow-xl transition-all">Start Free Trial</button>
                                <button class="bg-white/10 text-white font-bold py-4 px-10 rounded-xl hover:bg-white/20 backdrop-blur transition-all border border-white/20">Talk to Sales</button>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Pricing