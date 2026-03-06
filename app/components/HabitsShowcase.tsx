"use client";

import { motion } from "framer-motion";
import { Apple, Smartphone } from "lucide-react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

export default function HabitsShowcase() {
    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Big text */}
            <div className="max-w-3xl mx-auto px-6 text-center mb-12">
                <motion.h2
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-[44px] font-bold tracking-tight text-text-main leading-tight"
                >
                    Build steady daily 🚴 habits with a
                    <br className="hidden md:block" />
                    layout that keeps your mornings,
                    <br className="hidden md:block" />
                    evenings, 🌅 and focus simple to follow.
                </motion.h2>
            </div>

            <motion.p
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center text-text-muted text-sm mb-4"
            >
                Used by people to improve routines.
            </motion.p>

            {/* Tags */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap items-center justify-center gap-2 mb-16"
            >
                {["#Founders", "#Students", "#Busy parents", "#Remote teams"].map((tag) => (
                    <span
                        key={tag}
                        className="bg-card-bg border border-border text-text-main text-xs font-medium px-3.5 py-1.5 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </motion.div>

            {/* Phone + surrounding habit icons */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative max-w-5xl mx-auto px-6"
            >
                <div className="relative flex flex-col items-center">
                    {/* Habit icons — desktop, arranged around */}
                    <div className="hidden lg:block absolute inset-0">
                        {/* Top-left cluster */}
                        <div className="absolute left-0 top-4 flex items-center gap-3">
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                            <div className="flex flex-col items-center">
                                <div className="w-11 h-11 bg-orange-500 rounded-full flex items-center justify-center text-white text-lg mb-1">🏃</div>
                                <p className="text-[11px] font-medium">Morning walk</p>
                            </div>
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                        </div>
                        {/* Top-right cluster */}
                        <div className="absolute right-0 top-4 flex items-center gap-3">
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                            <div className="flex flex-col items-center">
                                <div className="w-11 h-11 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg mb-1">🧘</div>
                                <p className="text-[11px] font-medium text-center">Stretch for<br />5 minutes</p>
                            </div>
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                        </div>
                        {/* Bottom-left cluster */}
                        <div className="absolute left-0 bottom-20 flex items-center gap-3">
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                            <div className="flex flex-col items-center">
                                <div className="w-11 h-11 bg-red-500 rounded-full flex items-center justify-center text-white text-lg mb-1">🧹</div>
                                <p className="text-[11px] font-medium text-center">Clean<br />workspace</p>
                            </div>
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                        </div>
                        {/* Bottom-right cluster */}
                        <div className="absolute right-0 bottom-20 flex items-center gap-3">
                            <div className="w-28 h-20 bg-gray-200 rounded-xl overflow-hidden" />
                            <div className="flex flex-col items-center">
                                <div className="w-11 h-11 bg-blue-400 rounded-full flex items-center justify-center text-white text-lg mb-1">💧</div>
                                <p className="text-[11px] font-medium">Track water</p>
                            </div>
                        </div>
                    </div>

                    {/* Central Phone Mockup */}
                    <div className="relative w-64 md:w-72 mx-auto z-10">
                        <div className="bg-[#1D1D1F] rounded-[2.5rem] p-3 shadow-2xl">
                            <div className="bg-[#2C2C2E] rounded-[2rem] overflow-hidden">
                                {/* Status bar */}
                                <div className="flex items-center justify-between px-6 pt-3 pb-2">
                                    <span className="text-white text-[11px]">19:02</span>
                                    <div className="w-20 h-5 bg-black rounded-full" />
                                    <span className="text-white text-[11px]">📶🔋</span>
                                </div>
                                {/* Content */}
                                <div className="px-5 pb-6 pt-2">
                                    <h3 className="text-white font-bold text-base mb-0.5">Weekly Overview</h3>
                                    <p className="text-gray-400 text-[11px] mb-4">Your progress across the week</p>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white text-[12px] font-medium">85% this week</span>
                                        <span className="text-gray-400 text-[10px]">Last week &gt;</span>
                                    </div>
                                    {/* Chart */}
                                    <div className="h-20 bg-[#3A3A3C] rounded-xl mb-3 flex items-end justify-around px-3 pb-2">
                                        {[60, 80, 45, 90, 70, 85, 75].map((h, i) => (
                                            <div key={i} className="flex flex-col items-center gap-1">
                                                <div
                                                    className="w-3 rounded-full bg-gradient-to-t from-primary to-primary/50"
                                                    style={{ height: `${h * 0.6}px` }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-center gap-2.5 mb-4">
                                        {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                                            <span key={i} className="text-gray-500 text-[9px]">{d}</span>
                                        ))}
                                    </div>
                                    {/* Stats */}
                                    <div className="flex gap-3 mb-4">
                                        <div className="bg-[#3A3A3C] rounded-xl px-3 py-2 flex-1">
                                            <p className="text-white font-bold text-lg">12</p>
                                            <p className="text-gray-400 text-[9px]">Streaks completed</p>
                                        </div>
                                        <div className="bg-[#3A3A3C] rounded-xl px-3 py-2 flex-1">
                                            <p className="text-white font-bold text-lg">07</p>
                                            <p className="text-gray-400 text-[9px]">Focus sessions</p>
                                        </div>
                                    </div>
                                    {/* Routine Stacks */}
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="text-white text-[12px] font-semibold">Routine Stacks</p>
                                        <div className="flex gap-1">
                                            <div className="w-5 h-5 bg-[#3A3A3C] rounded-full flex items-center justify-center text-white text-[10px]">&lt;</div>
                                            <div className="w-5 h-5 bg-[#3A3A3C] rounded-full flex items-center justify-center text-white text-[10px]">&gt;</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 overflow-hidden">
                                        <div className="bg-green-600/20 border border-green-600/30 rounded-xl px-2.5 py-2 min-w-[75px]">
                                            <span className="text-[8px] bg-green-600 text-white rounded-full px-1.5 py-0.5">1 habits</span>
                                            <p className="text-white text-[10px] font-medium mt-1">Morning Start</p>
                                            <p className="text-gray-400 text-[8px]">Water, stretch, plan</p>
                                        </div>
                                        <div className="bg-blue-600/20 border border-blue-600/30 rounded-xl px-2.5 py-2 min-w-[75px]">
                                            <span className="text-[8px] bg-blue-600 text-white rounded-full px-1.5 py-0.5">3 habits</span>
                                            <p className="text-white text-[10px] font-medium mt-1">Evening Reset</p>
                                            <p className="text-gray-400 text-[8px]">Review, phone off</p>
                                        </div>
                                        <div className="bg-red-600/20 border border-red-600/30 rounded-xl px-2.5 py-2 min-w-[55px]">
                                            <span className="text-[8px] bg-red-500 text-white rounded-full px-1.5 py-0.5">2</span>
                                            <p className="text-white text-[10px] font-medium mt-1">Focus</p>
                                        </div>
                                    </div>
                                    {/* AI */}
                                    <div className="mt-4 flex items-center gap-2">
                                        <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-[10px]">✨</div>
                                        <p className="text-white text-[11px] font-semibold">AI Suggestions</p>
                                    </div>
                                    <div className="mt-2 bg-[#3A3A3C] rounded-xl p-2.5">
                                        <p className="text-white text-[11px] font-medium">Better Timing</p>
                                        <p className="text-gray-400 text-[9px]">Your best time for this habit is 8:30 AM.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Rating */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center mt-12"
            >
                <p className="text-sm text-text-muted">
                    <span className="text-yellow-500 mr-1">★</span>
                    4.7 rating (based on 125 reviews)
                </p>
            </motion.div>

            {/* Description + Download */}
            <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="max-w-xl mx-auto px-6 text-center mt-6"
            >
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                    Stay consistent with a system that fits into real life. Simple cards, clear routines, and gentle nudges help you build progress that lasts.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                        href="https://www.apple.com/in/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#1D1D1F] text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-[#333] transition-colors"
                    >
                        <Apple size={16} />
                        Download for iPhone
                    </a>
                    <a
                        href="https://play.google.com/store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white border-2 border-[#1D1D1F] text-[#1D1D1F] rounded-full px-6 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
                    >
                        <Smartphone size={16} />
                        Get it on Android
                    </a>
                </div>
            </motion.div>
        </section>
    );
}
