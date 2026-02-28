import { ArrowUp, ArrowUp01Icon, Download, Facebook, Languages, Mail } from "lucide-react"
import MouseGlow from "../component/mouseparticles"

const TermsConditions = () => {
    return (
        <>
          <div className="w-full">
                <MouseGlow />
            </div>
            <div className="my-10 text-slate-800  antialiased leading-relaxed">
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="flex flex-col lg:flex-row gap-12">
                        <aside className="lg:w-1/4 no-print">
                            <div className="sticky top-28 space-y-6">
                                <div>
                                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-4">Table of Contents</h3>
                                    <nav className="space-y-1 border-l border-slate-200 dark:border-slate-800">
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#introduction">1. Introduction</a>
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#accounts">2. Account Terms</a>
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#billing">3. Subscription &amp; Billing</a>
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#usage">4. Acceptable Use</a>
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#intellectual-property">5. Intellectual Property</a>
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#liability">6. Liability &amp; Warranty</a>
                                        <a className="block pl-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary border-l-2 border-transparent transition-all" href="#governing-law">7. Governing Law</a>
                                    </nav>
                                </div>
                                <div className="p-6 rounded-xl border border-primary/10 bg-primary/10">
                                    <p className="text-xs font-semibold text-primary mb-2">Need a copy?</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">Download a PDF version of our terms for your records.</p>
                                    <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white  border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold hover:border-primary transition-colors">
                                        <span className="material-icons text-sm"><Download size={18} /></span>
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </aside>
                        <div className="lg:w-3/4 ">
                            <div className="bg-white  p-8 lg:p-12 rounded-xl ">
                                <div className="mb-12">
                                    <h1 className="text-4xl font-extrabold text-slate-900 dark:text-black heading-font mb-4 tracking-tight">Terms of Service</h1>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                                        <span>Last Updated: October 24, 2023</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span>Version 2.4</span>
                                    </div>
                                </div>
                                <div className="max-w-none space-y-10">
                                    <section className="scroll-mt-28" id="introduction">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">1. Introduction</h2>
                                        <p className="mb-4 text-sm">Welcome to Auurora. These Terms of Service ("Terms") govern your access to and use of our SaaS platform, website, and services (collectively, the "Platform"). By clicking "Sign Up" or otherwise using the Platform, you agree to be bound by these Terms.</p>
                                        <p>If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these conditions. If you do not agree with these terms, you must not access or use the services.</p>
                                    </section>
                                    <section className="scroll-mt-28" id="accounts">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">2. Account Terms</h2>
                                        <p className="mb-4 text-sm">To access certain features of the Platform, you must register for an account. You agree to:</p>
                                        <ul className="list-disc pl-6 text-sm space-y-3 marker:text-primary">
                                            <li>Provide accurate, current, and complete information during the registration process.</li>
                                            <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
                                            <li>Promptly notify us if you discover or otherwise suspect any security breaches related to the Platform.</li>
                                            <li>Be responsible for all activity that happens on your account.</li>
                                        </ul>
                                    </section>
                                    <section className="scroll-mt-28" id="billing">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">3. Subscription &amp; Billing</h2>
                                        <div className="p-6 rounded-lg border-l-4 border-primary mb-6">
                                            <p className="text-sm italic text-slate-600 dark:text-slate-400"><strong>Note:</strong> All fees are non-refundable except as required by law or specifically stated within these Terms.</p>
                                        </div>
                                        <p className="mb-4 text-sm">Auurora offers various subscription plans. By subscribing, you agree to pay the fees associated with your chosen plan. Fees are billed in advance on a monthly or annual basis.</p>
                                        <ol className="list-decimal text-sm pl-6 space-y-3">
                                            <li><strong className="text-slate-900 dark:text-black">Renewal:</strong> Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current period.</li>
                                            <li><strong className="text-slate-900 dark:text-black">Price Changes:</strong> We reserve the right to change our subscription fees at any time, with at least 30 days' notice.</li>
                                            <li><strong className="text-slate-900 dark:text-black">Taxes:</strong> All fees are exclusive of taxes, which will be charged based on your billing address.</li>
                                        </ol>
                                    </section>
                                    <section className="scroll-mt-28" id="usage">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">4. Acceptable Use Policy</h2>
                                        <p className="mb-4 text-sm">You agree not to engage in any of the following prohibited activities:</p>
                                        <ul className="list-disc text-sm pl-6 space-y-3 marker:text-primary">
                                            <li>Copying, distributing, or disclosing any part of the Platform in any medium.</li>
                                            <li>Using any automated system, including "robots," "spiders," or "offline readers," to access the Platform.</li>
                                            <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Platform.</li>
                                            <li>Taking any action that imposes an unreasonable or disproportionately large load on our infrastructure.</li>
                                        </ul>
                                    </section>
                                    <section className="scroll-mt-28" id="intellectual-property">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">5. Intellectual Property</h2>
                                        <p className="mb-4 text-sm">The Platform and its original content, features, and functionality are and will remain the exclusive property of Auurora and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Auurora.</p>
                                        <p className="text-sm">You retain all rights to the data you upload or input into the Platform ("User Content"). By using the Platform, you grant Auurora a worldwide, non-exclusive, royalty-free license to host, store, and use your User Content solely for the purpose of providing the services to you.</p>
                                    </section>
                                    <section className="scroll-mt-28" id="liability">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">6. Liability &amp; Warranty</h2>
                                        <p className="uppercase text-sm font-bold tracking-wider text-slate-900 dark:text-black mb-4">Disclaimer of Warranties</p>
                                        <p className="mb-6 text-sm">The platform is provided on an "AS IS" and "AS AVAILABLE" basis. Auurora makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                                        <p className="uppercase text-sm font-bold tracking-wider text-slate-900 dark:text-black mb-4">Limitation of Liability</p>
                                        <p className="text-sm">In no event shall Auurora or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the Platform, even if Auurora has been notified orally or in writing of the possibility of such damage.</p>
                                    </section>
                                    <section className="scroll-mt-28 pb-12" id="governing-law">
                                        <h2 className="text-xl font-bold text-slate-900 dark:text-black heading-font mb-4 gradient-underline">7. Governing Law</h2>
                                        <p className="text-sm">These Terms shall be governed and construed in accordance with the laws of Delaware, United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.</p>
                                    </section>
                                </div>
                                <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Questions about our terms? <a className="text-primary font-semibold hover:underline" href="mailto:legal@auurora.com">Contact Support</a></p>
                                    <button className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-primary transition-colors no-print" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
                                        Back to top
                                        <span className="material-icons text-base"><ArrowUp /></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default TermsConditions