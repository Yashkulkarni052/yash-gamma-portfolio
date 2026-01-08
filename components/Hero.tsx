
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="section text-center">
      <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}
        className="text-6xl font-bold">Yash Kulkarni</motion.h1>
      <p className="mt-6 text-gray-400 text-xl">
        Full Stack Developer | Python & Web Technologies
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <a href="/resume.pdf" download className="px-6 py-3 rounded-full bg-white text-black">
          Download Resume
        </a>
      </div>
    </section>
  );
}
