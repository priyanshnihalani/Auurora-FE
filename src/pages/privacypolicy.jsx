import { CheckCircle, Download, Edit, Eye, Info, Printer, Trash } from "lucide-react"
import MouseGlow from "../component/mouseparticles"

const PrivacyPolicy = () => {
    return (
        <>
          <div className="w-full">
                <MouseGlow />
            </div>
            <div class="bg-background-light dark:bg-background-dark font-display text-slate-800 antialiased my-20">
                <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <header class="max-w-3xl mx-auto text-center mb-16">
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900  mb-6">
                            Privacy Policy
                        </h1>
                        <div class="flex justify-center gap-4 no-print">
                            <button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-white dark:hover:bg-slate-800 transition-all">
                                <span class="material-icons text-sm"><Download size={18} /></span>
                                Download PDF
                            </button>
                            <button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm hover:bg-white dark:hover:bg-slate-800 transition-all">
                                <span class="material-icons text-sm"><Printer size={18} /></span>
                                Print Version
                            </button>
                        </div>
                    </header>
                    <div class="lg:flex lg:gap-16">
                        <aside class="hidden lg:block w-64 flex-shrink-0 no-print">
                            <div class="sticky top">
                                <h4 class="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">Contents</h4>
                                <nav class="space-y-4">
                                    <a class="block text-primary font-medium border-l-2 border-primary pl-4" href="#introduction">Introduction</a>
                                    <a class="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors pl-4 border-l-2 border-transparent" href="#collection">Data Collection</a>
                                    <a class="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors pl-4 border-l-2 border-transparent" href="#usage">How We Use Data</a>
                                    <a class="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors pl-4 border-l-2 border-transparent" href="#rights">Your Rights</a>
                                    <a class="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors pl-4 border-l-2 border-transparent" href="#cookies">Cookie Policy</a>
                                    <a class="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors pl-4 border-l-2 border-transparent" href="#security">Security Measures</a>
                                    <a class="block text-slate-600 dark:text-slate-400 hover:text-primary transition-colors pl-4 border-l-2 border-transparent" href="#contact">Contact Us</a>
                                </nav>
                                <div class="mt-12 p-6 bg-primary/10 rounded-xl border border-slate-100 ">
                                    <h5 class="text-primary text-sm font-semibold mb-2">Need clarity?</h5>
                                    <p class="text-xs text-slate-500 leading-relaxed mb-4">Our privacy officer is ready to help you understand your data rights.</p>
                                    <a class="text-xs font-bold text-primary hover:underline" href="mailto:privacy@auurora.io">Contact Privacy Officer</a>
                                </div>
                            </div>
                        </aside>
                        <article class="flex-1 max-w-3xl mx-auto lg:mx-0">
                            <section class="mb-16 scroll-mt-28" id="introduction">
                                <h2 class="text-3xl font-semibold text-slate-900 dark:text-white mb-6">Introduction</h2>
                                <p class="text-xl leading-relaxed text-slate-700 dark:text-slate-300 mb-6 italic">
                                    "Your privacy is not a feature; it is a fundamental human right. At Auurora, we build our platform with your data security at the core."
                                </p>
                                <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
                                    This Privacy Policy describes how Auurora ("we," "us," or "our") collects, uses, and shares your personal information when you visit or make use of our SaaS platform. We are committed to maintaining the trust and confidence of our visitors and customers.
                                </p>
                                <div class="policy-text-gradient border border-primary/20 p-8 rounded-xl relative overflow-hidden">
                                    <div class="absolute top-0 right-0 p-4">
                                        <span class="material-icons text-primary/30 text-4xl"><Info /></span>
                                    </div>
                                    <h4 class="text-primary font-bold text-sm uppercase tracking-wider mb-4">Quick Summary</h4>
                                    <ul class="space-y-3">
                                        <li class="flex items-start gap-3 text-slate-700 ">
                                            <span class="material-icons text-primary text-sm mt-1"><CheckCircle size={20} /></span>
                                            <span>We never sell your data to third-party advertisers.</span>
                                        </li>
                                        <li class="flex items-start gap-3 text-slate-700 ">
                                            <span class="material-icons text-primary text-sm mt-1"><CheckCircle size={20} /></span>
                                            <span>You have full control over your data portability and deletion.</span>
                                        </li>
                                        <li class="flex items-start gap-3 text-slate-700 ">
                                            <span class="material-icons text-primary text-sm mt-1"><CheckCircle size={20} /></span>
                                            <span>We use industry-standard encryption for all stored information.</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <hr class="border-slate-200 dark:border-slate-800 mb-16" />
                            <section class="mb-16 scroll-mt-28" id="collection">
                                <h2 class="text-3xl font-semibold text-slate-900 dark:text-white mb-6">Data We Collect</h2>
                                <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
                                    When you use Auurora, we collect certain information about you and the devices you use to access our services. This collection falls into three primary categories:
                                </p>
                                <div class="space-y-8">
                                    <div>
                                        <h3 class="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                            <span class="w-1.5 h-6 bg-primary rounded-full"></span>
                                            Personal Information
                                        </h3>
                                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            This includes your name, email address, billing information, and professional title. This is provided directly by you during the account creation or payment process.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 class="text-xl font-semibold text-slate-800 mb-3 flex items-center gap-2">
                                            <span class="w-1.5 h-6 bg-primary rounded-full"></span>
                                            Usage &amp; Analytics
                                        </h3>
                                        <p class="text-slate-600 dark:text-slate-400 leading-relaxed">
                                            We collect data on how you interact with our platform, including features used, session duration, and device metadata (IP address, browser type).
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section class="mb-16 scroll-mt-28" id="usage">
                                <h2 class="text-3xl font-semibold text-slate-900  mb-6">How We Use Your Data</h2>
                                <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
                                    The primary purpose of data collection is to provide a seamless, personalized experience. Specifically, we use your data for:
                                </p>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div class="p-6 bg-slate-50  rounded-xl border border-slate-100 ">
                                        <h4 class="font-semibold mb-2">Service Provision</h4>
                                        <p class="text-sm text-slate-500">Processing transactions and maintaining your workspace settings.</p>
                                    </div>
                                    <div class="p-6 bg-slate-50  rounded-xl border border-slate-100 ">
                                        <h4 class="font-semibold mb-2">Security Monitoring</h4>
                                        <p class="text-sm text-slate-500">Detecting and preventing fraudulent activity or unauthorized access.</p>
                                    </div>
                                    <div class="p-6 bg-slate-50  rounded-xl border border-slate-100 ">
                                        <h4 class="font-semibold mb-2">Platform Improvements</h4>
                                        <p class="text-sm text-slate-500">Aggregating usage data to prioritize new features and bug fixes.</p>
                                    </div>
                                    <div class="p-6 bg-slate-50  rounded-xl border border-slate-100 ">
                                        <h4 class="font-semibold mb-2">Direct Communication</h4>
                                        <p class="text-sm text-slate-500">Sending system updates, security alerts, and requested support messages.</p>
                                    </div>
                                </div>
                            </section>
                            <hr class="border-slate-200 dark:border-slate-800 mb-16" />
                            <section class="mb-16 scroll-mt-28" id="rights">
                                <h2 class="text-3xl font-semibold text-slate-900 dark:text-white mb-6">Your Rights &amp; Choices</h2>
                                <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
                                    Regardless of where you live, we provide the following rights to all Auurora users in alignment with GDPR and CCPA standards:
                                </p>
                                <div class="space-y-4">
                                    <div class="flex gap-4 items-start p-4 hover:bg-white  rounded-xl transition-colors">
                                        <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span class="material-icons text-primary"><Eye size={18} /></span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-900 dark:text-white">Right to Access</h4>
                                            <p class="text-slate-600 dark:text-slate-400 text-sm">Request a copy of the personal data we hold about you at any time.</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-4 items-start p-4 hover:bg-white rounded-xl transition-colors">
                                        <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span class="material-icons text-primary"><Edit size={18} /></span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-900 dark:text-white">Right to Rectification</h4>
                                            <p class="text-slate-600 dark:text-slate-400 text-sm">Update or correct inaccurate information through your account dashboard.</p>
                                        </div>
                                    </div>
                                    <div class="flex gap-4 items-start p-4 hover:bg-white rounded-xl transition-colors">
                                        <div class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <span class="material-icons text-primary"><Trash size={18} /></span>
                                        </div>
                                        <div>
                                            <h4 class="font-bold text-slate-900 dark:text-white">Right to Erasure</h4>
                                            <p class="text-slate-600 dark:text-slate-400 text-sm">Request that we delete all your personal data from our active systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section class="mb-16 scroll-mt-28" id="cookies">
                                <h2 class="text-3xl font-semibold text-slate-900 dark:text-white mb-6">Cookie Policy</h2>
                                <p class="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-8">
                                    We use cookies to enhance your browsing experience. Cookies are small text files stored on your device.
                                </p>
                                <div class="overflow-x-auto">
                                    <table class="w-full text-left border-collapse">
                                        <thead>
                                            <tr class="border-b border-slate-200 dark:border-slate-800">
                                                <th class="py-4 font-semibold text-slate-900 dark:text-white w-1/4">Type</th>
                                                <th class="py-4 font-semibold text-slate-900 dark:text-white">Purpose</th>
                                            </tr>
                                        </thead>
                                        <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                                            <tr>
                                                <td class="py-4 text-sm font-medium">Essential</td>
                                                <td class="py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Required for the core functionality of the platform, such as user authentication and security.</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 text-sm font-medium">Performance</td>
                                                <td class="py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Used to monitor application performance and identify technical errors.</td>
                                            </tr>
                                            <tr>
                                                <td class="py-4 text-sm font-medium">Analytics</td>
                                                <td class="py-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">Helps us understand how visitors interact with our website to improve UX.</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                            <section class="mt-20 p-10 cta-gradient rounded-2xl text-white text-center no-print" id="contact">
                                <h3 class="text-2xl font-bold mb-4">Questions about your privacy?</h3>
                                <p class="text-slate-300 mb-8 max-w-xl mx-auto">
                                    Our dedicated data protection team is available to assist with any concerns regarding your personal information or our practices.
                                </p>
                                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                    <a class="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:opacity-90 transition-opacity" href="mailto:privacy@auurora.io">
                                        Email Privacy Team
                                    </a>
                                    <a class="inline-flex items-center justify-center px-8 py-3 bg-white/10 text-white font-bold rounded-lg hover:bg-white/20 transition-all" href="#">
                                        Visit Help Center
                                    </a>
                                </div>
                            </section>
                        </article>
                    </div>
                </main>
            </div>
        </>

    )
}

export default PrivacyPolicy