import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
export default function CustomCursor() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const springConfig = { damping: 40, stiffness: 300 };
    const cursorX = useSpring(x, springConfig);
    const cursorY = useSpring(y, springConfig);
    useEffect(() => {
        const move = (e) => {
            x.set(e.clientX - 100);
            y.set(e.clientY - 100);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);
    return (_jsx(motion.div, { className: "pointer-events-none fixed z-[9999] h-[200px] w-[200px] rounded-full bg-purple-600/10 blur-3xl", style: {
            translateX: cursorX,
            translateY: cursorY,
        } }));
}
