"use client";

import { motion } from "framer-motion";
import { cn } from "@/app/lib/utils";

interface MarqueeProps {
    children: React.ReactNode;
    direction?: "left" | "right";
    speed?: number;
    className?: string;
}

export function Marquee({
    children,
    direction = "left",
    speed = 40,
    className,
}: MarqueeProps) {
    return (
        <div className={cn("flex overflow-hidden select-none", className)}>
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="flex flex-nowrap min-w-full"
            >
                <div className="flex flex-nowrap shrink-0 items-center justify-around min-w-full">
                    {children}
                </div>
                <div className="flex flex-nowrap shrink-0 items-center justify-around min-w-full">
                    {children}
                </div>
            </motion.div>
        </div>
    );
}
