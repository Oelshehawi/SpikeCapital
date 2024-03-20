import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { CurrencyDollarIcon, UserGroupIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";

interface CardData {
  id: number;
  Icon: any;
  title: string;
  description: string;
  ctaClasses: string;
  routeTo: string;
}

export const OurProcess: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      <div className="h-[10vh] bg-darkwhite" />
    </>
  );
};

interface CardProps {
  position: number;
  card: CardData;
  scrollYProgress: any;
}

const Card: React.FC<CardProps> = ({ position, card, scrollYProgress }) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "#F4F3F2" : "#0766ff",
        color: isOddCard ? "black" : "white",
      }}
      className="sticky top-0 flex w-full origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 h-16 w-16" />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>  
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

const CARDS: CardData[] = [
  {
    id: 1,
    Icon: ClipboardDocumentCheckIcon,
    title: "Investor Criteria",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-blue-300",
    routeTo: "#",
  },
  {
    id: 2,
    Icon: ChatBubbleLeftEllipsisIcon,
    title: "Messaging",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-blue-300",
    routeTo: "#",
  },
  {
    id: 3,
    Icon: UserGroupIcon,
    title: "Effective Correspondence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-blue-300",
    routeTo: "#",
  },
  {
    id: 4,
    Icon: CurrencyDollarIcon,
    title: "Investor Fund Alignment",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi illo officia atque iure voluptatibus necessitatibus odit cupiditate reprehenderit iusto quaerat!",
    ctaClasses: "bg-blue-300",
    routeTo: "#",
  },
];
