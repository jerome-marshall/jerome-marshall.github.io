"use client";

import React, { useState } from "react";
import type { FC } from "react";
import {
  AnimatePresence,
  useMotionTemplate,
  useMotionValue,
  motion,
} from "framer-motion";
import { cn } from "~/lib/utils";
import Layout from "~/components/Layout";
import SplashScreen from "./SplashScreen";
import useDeviceMedia from "~/hooks/useDeviceMedia";
import { quotes } from "~/data";

interface AnimationWrapperProps {
  children: React.ReactNode;
}

const AnimationLayout: FC<AnimationWrapperProps> = ({ children }) => {
  const { isMobile } = useDeviceMedia();
  const [isLoading, setIsLoading] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]!;

  return (
    <div
      className="min-h-screen bg-background_1 dark:bg-dark-background_1"
      onMouseMove={handleMouseMove}
    >
      <AnimatePresence mode="wait">
        {isLoading && (
          <SplashScreen
            key="splash-container"
            setIsLoading={setIsLoading}
            randomQuote={randomQuote}
          />
        )}
        <div className={cn("h-full w-full", isLoading && "hidden")}>
          <motion.div
            className={cn(
              "fixed h-full w-full transition-all duration-300",
              isMobile && "hidden",
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
