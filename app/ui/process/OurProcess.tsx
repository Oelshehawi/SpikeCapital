import { useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { ArrowRightCircleIcon, CurrencyDollarIcon, UserGroupIcon, ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/solid";
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
        background: isOddCard ? "#F4F3F2" : "black",
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
      <a
        href={card.routeTo}
        target="_blank"
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Learn more</span>
        <ArrowRightCircleIcon className="h-5 w-5" />
      </a>
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
