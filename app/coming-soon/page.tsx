"use client"

import { motion } from "motion/react"
import ClickSpark from "@/components/landing/ClickClick";
import {CookieModal} from "@/components/landing/CookieModal";
import ComingSoonSection from "@/components/comingSoon/ComingSoonSection";

export default function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    };
  return (
      <ClickSpark
          sparkColor='#fff'
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          extraScale={2}
      >
      <motion.div className="flex flex-col "
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
      >
          <div>
              <ComingSoonSection/>
          </div>
          <CookieModal/>
      </motion.div>
      </ClickSpark>
  );
}
