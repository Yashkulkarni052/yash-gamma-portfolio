
'use client';
import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="section max-w-3xl">
      <h2 className="text-3xl mb-10">Experience</h2>
      <motion.div initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} transition={{duration:.8}}>
        <h3 className="text-xl font-semibold">Python Intern – Cognifyz</h3>
        <p className="text-gray-400">Aug 2025 – Sep 2025</p>
      </motion.div>
    </section>
  );
}
