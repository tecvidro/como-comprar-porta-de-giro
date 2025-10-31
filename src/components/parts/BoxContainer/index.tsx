'use client'
import { ReactNode } from "react"
import { motion } from "motion/react"

type BocContainerProps = {
  children: ReactNode
}

const animationVariants = {
  start: { opacity: 0, x: 100 },
  end: { opacity: 1, x: 0 }
}
export function BocContainer({ children, ...props }: BocContainerProps) {
  return (
    <motion.div
      className="h-full flex flex-col gap-4 justify-between text-center bg-white rounded-lg border-dashed border-orange border p-4"
      {...props}
      variants={animationVariants}
      initial="start"
      animate="end"
      transition={{
        type: "spring",
        stiffness: 700,
        damping: 45,
        mass: 1.5
      }}
    >
      {children}
    </motion.div>
  )
}
