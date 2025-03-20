"use client";
import { motion } from "framer-motion";

const SpaceBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black overflow-hidden z-0">
      {/* Fondo con gradiente espacial animado */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle at center, #1A237E 10%, #512DA8 30%, #0A0A0A 70%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Estrellas parpadeantes */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Ondas galácticas */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-1/4 opacity-20"
          style={{
            top: `${i * 35}%`,
            background: `radial-gradient(circle, rgba(166, 124, 0, 0.2) 0%, transparent 70%)`,
          }}
          animate={{
            y: ["0px", "20px", "0px"],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SpaceBackground;
