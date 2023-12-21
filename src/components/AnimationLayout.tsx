"use client";

import React from "react";
import type { FC } from "react";
import {
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { cn } from "~/lib/utils";
import Layout from "~/components/Layout";

interface AnimationWrapperProps {
  children: React.ReactNode;
}

const AnimationLayout: FC<AnimationWrapperProps> = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  return (
    <div
      className="min-h-screen bg-background_1 dark:bg-dark-background_1"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="wait">
        <div className={cn("h-full w-full")}>
          <motion.div
            className={cn(
              "fixed h-full w-full transition-all duration-300",
              // isMobile && "hidden",
            )}
            style={{
              background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, var(--gradientColor) 10%, transparent 80%)`,
            }}
          />
          <Layout mousePosition={{ mouseX, mouseY }}>{children}</Layout>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default AnimationLayout;
