"use client";

import { motion } from "framer-motion";
import { Play, Check } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-8">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A00]/10 via-[#FF7A00]/5 to-transparent" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FF7A00]/8 rounded-full blur-[120px]" />
            </div>

            {/* Hero image background */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full opacity-30"
                    style={{
                        background: "radial-gradient(circle, #FF7A00 0%, transparent 70%)",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* New badge */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 bg-card-bg border border-border rounded-full px-4 py-2 mb-8"
                >
                    <span className="bg-[#1D1D1F] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                        New
                    </span>
                    <span className="text-text-muted text-sm">A calmer way to build habits</span>
                </motion.div>

                {/* Main heading */}
                <motion.h1
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-text-main leading-[1.05] mb-6"
                >
                    Build habits that
                    <br />
                    actually stick
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-text-muted text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed"
                >
                    You see the right habits at the right
                    <br className="hidden md:block" />
                    time so your day never feels crowded.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#"
                        className="group inline-flex items-center gap-2 bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] rounded-full px-7 py-3.5 text-[15px] font-semibold hover:bg-[#1D1D1F] hover:text-white transition-all duration-300"
                    >
                        Start tracking for free
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-text-main text-[15px] font-medium hover:text-primary transition-colors"
                    >
                        <span className="w-9 h-9 bg-[#1D1D1F] rounded-full flex items-center justify-center">
                            <Play size={14} fill="white" color="white" />
                        </span>
                        Watch demo
                    </a>
                </motion.div>
            </div>

            {/* Floating Cards */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative z-10 w-full max-w-5xl mx-auto px-6 mt-16"
            >
                <div className="relative flex items-end justify-center gap-4 md:gap-6">
                    {/* 7-day streak card */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="hidden md:flex flex-col items-center bg-[#2C2C2E] text-white rounded-2xl p-6 shadow-2xl w-40"
                    >
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-3">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#FF7A00" />
                            </svg>
                        </div>
                        <p className="text-sm font-semibold text-center">7-day streak</p>
                        <p className="text-xs text-gray-400 text-center mt-0.5">unlocked</p>
                    </motion.div>

                    {/* Center: Today Task phone card */}
                    <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-0 w-60 md:w-72 overflow-hidden"
                    >
                        {/* Phone status bar */}
                        <div className="flex items-center justify-between px-4 pt-3 pb-2 text-[10px] text-gray-400">
                            <span>Mon, 07:32</span>
                            <div className="flex items-center gap-1">
                                <div className="w-6 h-3 bg-gray-200 rounded-full relative">
                                    <div className="absolute left-0 top-0 w-3 h-3 bg-gray-400 rounded-full" />
                                </div>
                                <span>📶</span>
                                <span>🔋</span>
                            </div>
                        </div>
                        <div className="px-4 pb-4">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <h4 className="font-bold text-[15px]">Today Task</h4>
                                    <p className="text-[11px] text-text-muted">3 of 8 habits done</p>
                                </div>
                                <span className="text-[10px] bg-card-bg border border-border rounded px-2 py-0.5 flex items-center gap-1">
                                    <Check size={10} /> 18 day streak
                                </span>
                            </div>
                            {/* Habit items */}
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-3 p-2.5 bg-card-bg rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <div className="flex-1">
                                        <p className="text-[12px] font-medium">Morning walk</p>
                                        <p className="text-[10px] text-text-muted">At least 15 minutes</p>
                                    </div>
                                    <span className="text-[9px] text-text-muted">12 / 14 days</span>
                                    <span className="text-[9px] bg-green-500 text-white rounded-full px-1.5 py-0.5">86%</span>
                                </div>
                                <div className="flex items-center gap-3 p-2.5 bg-card-bg rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <div className="flex-1">
                                        <p className="text-[12px] font-medium">Drink 3 glasses of water</p>
                                        <p className="text-[10px] text-text-muted">Before 11:00 am</p>
                                    </div>
                                    <span className="text-[9px] text-text-muted">9 / 9 days</span>
                                    <span className="text-[9px] bg-green-500 text-white rounded-full px-1.5 py-0.5">100%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Today's goal card */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="hidden md:block bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-48"
                    >
                        <p className="text-[11px] text-text-muted mb-1">Today&apos;s goal:</p>
                        <p className="text-sm font-semibold mb-4">Complete 3 habits</p>
                        <div className="flex items-center gap-3">
                            {[
                                { icon: "🏃", pct: "66%" },
                                { icon: "💧", pct: "87%" },
                                { icon: "📖", pct: "94%" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center">
                                    <div className="w-10 h-10 bg-card-bg rounded-xl flex items-center justify-center text-lg mb-1">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] text-text-muted">{item.pct}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
