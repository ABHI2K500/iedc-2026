"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

function useCountUp(target: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const start = Date.now();
                    const animate = () => {
                        const elapsed = Date.now() - start;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target, duration]);

    return { count, ref };
}

export default function MetricsSection() {
    const counter = useCountUp(62000, 2500);

    return (
        <section id="metrics" className="py-20 md:py-32 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8"
                >
                    <span className="inline-block bg-card-bg border border-border text-text-muted text-xs font-medium px-3.5 py-1.5 rounded-full mb-4">
                        Real habits, real numbers
                    </span>
                    <h2 className="text-3xl md:text-[42px] font-bold tracking-tight text-text-main mb-6">
                        How people stay
                        <br />
                        consistent over time
                    </h2>
                </motion.div>

                {/* Big counter */}
                <motion.div
                    ref={counter.ref}
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-center mb-4"
                >
                    <div className="text-6xl md:text-8xl lg:text-[120px] font-bold text-primary leading-none">
                        {counter.count.toLocaleString()}+
                    </div>
                    <p className="text-text-muted text-sm mt-2">Check-ins logged last month</p>
                </motion.div>

                {/* Earth globe */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative flex justify-center my-12"
                >
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                        {/* 3D Earth sphere with CSS */}
                        <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                            <div
                                className="w-full h-full rounded-full"
                                style={{
                                    background: `
                    radial-gradient(circle at 35% 35%, #87CEEB 0%, #4A90D9 20%, #2E6BB5 35%, #1B4F8A 50%, #0D3B66 70%, #051D3A 100%),
                    radial-gradient(ellipse at 40% 40%, #5DA06D 10%, transparent 30%),
                    radial-gradient(ellipse at 60% 55%, #6DB57A 8%, transparent 25%),
                    radial-gradient(ellipse at 25% 60%, #5DA06D 5%, transparent 20%)
                  `,
                                    boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.3), inset 10px 10px 40px rgba(255,255,255,0.1), 0 0 60px rgba(74,144,217,0.3)",
                                }}
                            />
                            {/* Clouds overlay */}
                            <div
                                className="absolute inset-0 rounded-full opacity-30"
                                style={{
                                    background: `
                    radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.6) 0%, transparent 40%),
                    radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.4) 0%, transparent 30%),
                    radial-gradient(ellipse at 50% 70%, rgba(255,255,255,0.3) 0%, transparent 35%)
                  `,
                                }}
                            />
                            {/* Atmosphere glow */}
                            <div
                                className="absolute -inset-2 rounded-full"
                                style={{
                                    background: "radial-gradient(circle, transparent 60%, rgba(135,206,235,0.15) 80%, rgba(135,206,235,0.05) 100%)",
                                }}
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Stats grid */}
                <motion.div
                    variants={fadeInUp}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-8"
                >
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-primary">
                            87<span className="text-primary">%</span>
                        </p>
                        <p className="text-text-muted text-sm mt-2">Faster AI execution</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-text-main">46</p>
                        <p className="text-text-muted text-sm mt-2">Sessions completed on average</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-bold text-text-main">
                            32<span className="text-primary">+</span>
                        </p>
                        <p className="text-text-muted text-sm mt-2">
                            Countries with active
                            <br />
                            Habitline users
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
