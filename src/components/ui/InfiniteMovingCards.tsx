"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import AliExpress from "@/assets/AliExpress svg.png";
import Amazon from "@/assets/Amazon svg.png";
import Etsy from "@/assets/Etsy svg.svg";
import Nike from "@/assets/Nike svg.png";
import Samsung from "@/assets/Samsung Electronics svg.png";
import Walmart from "@/assets/Walmart svg.svg";
import Image from "next/image";

const TESTIMONIALS_IMAGES = [
  {
    id: 1,
    name: "amazon",
    logo: Amazon,
  },
  {
    id: 2,
    name: "aliexpress",
    logo: AliExpress,
  },
  {
    id: 4,
    name: "etsy",
    logo: Etsy,
  },
  {
    id: 5,
    name: "nike",
    logo: Nike,
  },
  {
    id: 6,
    name: "samsung",
    logo: Samsung,
  },
  {
    id: 7,
    name: "walmart",
    logo: Walmart,
  },
];

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const [start, setStart] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-8xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_10%,white_98%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {TESTIMONIALS_IMAGES.map((item) => (
          <li
            className="relative flex-shrink-0 px-8 py-3"
            key={item.name}
          >
            <Image
              src={item.logo}
              alt="testimonials"
              height={100}
              width={100}
              className="w-[149px] h-[35px] opacity-60"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
