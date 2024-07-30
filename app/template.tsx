"use client";

import type React from "react";
import { motion } from "framer-motion";

// prettier-ignore
export default function Template({children}: Readonly<{ children: React.ReactNode }>) {

  return (
    <motion.div
      key={"mount"}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
