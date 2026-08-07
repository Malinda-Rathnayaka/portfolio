"use client";
import { motion } from "framer-motion";

export default function NebulaField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full -left-40 -top-40"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)", filter: "blur(40px)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full right-0 top-1/3"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.18) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full left-1/3 bottom-0"
        style={{ background: "radial-gradient(circle, rgba(244,114,182,0.14) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
