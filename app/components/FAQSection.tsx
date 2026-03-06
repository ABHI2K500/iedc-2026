"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const faqs = [
    {
        q: "How many habits can I track at once?",
        a: "You can track as many as you want, but most users keep 5–8 habits for better consistency.",
    },
    {
        q: "Is Habitline free to use?",
        a: "Yes, Habitline is free to download and use with core features. Premium features are available with a subscription.",
    },
    {
        q: "Can I customize reminders?",
        a: "Absolutely. You can set gentle reminders for each habit based on your preferred time of day and frequency.",
    },
    {
        q: "Does it work offline?",
        a: "Yes, you can track habits offline. Your data will sync once you're back online.",
    },
    {
        q: "What makes Habitline different?",
        a: "Habitline focuses on calm, structured habit tracking with AI suggestions, flexible streak rules, and routine stacks.",
    },
    {
        q: "How does the AI suggestion feature work?",
        a: "Our AI learns your patterns over time and offers small, useful suggestions to help you stay consistent without guessing.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 md:py-32 max-w-3xl mx-auto px-6">
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
            >
                <span className="inline-block bg-card-bg border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                    Common questions
                </span>
                <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main">
                    Frequently asked questions
                </h2>
            </motion.div>

            <div className="space-y-3">
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex items-center justify-between bg-card-bg rounded-2xl px-6 py-5 text-left group hover:bg-gray-100 transition-colors"
                        >
                            <span className="text-[15px] font-medium text-text-main pr-4">{faq.q}</span>
                            <motion.div
                                animate={{ rotate: openIndex === i ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="shrink-0"
                            >
                                <ChevronDown size={18} className="text-text-muted" />
                            </motion.div>
                        </button>
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 py-4 text-text-muted text-sm leading-relaxed">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {/* Can't find your answer */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mt-12 bg-card-bg rounded-2xl p-8"
            >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-text-main mb-2">Can&apos;t find your answer?</h3>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white rounded-full px-6 py-3 text-sm font-semibold hover:bg-[#333] transition-colors mt-2"
                >
                    Contact us
                </a>
            </motion.div>
        </section>
    );
}
