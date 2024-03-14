import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimate, useInView } from "framer-motion";
import { Button } from "../buttons";

export default function ClientResults() {
  const [isMobile, setIsMobile] = useState(false);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const runAnimation = async () => {
      await animate(
        scope.current,
        {
          y: [200,0],
          opacity: 1,
        },
        {
          type: "spring",
          bounce: 0.4,
          duration: 3,
        }
      );
    };

    if (isInView) (
   
      runAnimation()
    )
  }, [isInView]);

  const [cards, setCards] = useState([
    {
      id: 1,
      desktopImage: "/dandelion-result.png",
      mobileImage: "/dandelions_digital_logo.png",
      text: [
        {
          subText1: "23%",
          subText2: "Reply Rate",
          subText3: "...by the 2nd campaign.",
        },
        {
          subText1: "$160k",
          subText2: "Qualified Pipeline",
          subText3: "...added within 45 days.",
        },
      ],
      shift: "left",
    },
    {
      id: 2,
      desktopImage: "/doukas-result.png",
      mobileImage: "/doukas-logo.png",
      text: [
        {
          subText1: "4",
          subText2: "New Prospects",
          subText3: "...every week.",
        },
        {
          subText1: "$96k",
          subText2: "Qualified Pipeline",
          subText3: "...added within 50 days.",
        },
        {
          subText1: "2X",
          subText2: "Expectations",
          subText3: "...the number of booked calls for Campaign #1.",
        },
      ],
      shift: "center",
    },
    {
      id: 3,
      desktopImage: "/jump-result.png",
      mobileImage: "/satori-logo.png",
      text: [
        {
          subText1: "3",
          subText2: "New Prospects",
          subText3: "...every week.",
        },
        {
          subText1: "$24k",
          subText2: "Qualified Pipeline",
          subText3: "...added within 30 days.",
        },
        {
          subText1: "2X",
          subText2: "Open Rate",
          subText3: "...within 30 days of working together.",
        },
      ],
      shift: "right",
    },
  ]);

  const shuffleCards = (clickedId: number) => {
    const newCards = cards.map((card) => {
      if (card.id === clickedId) {
        return { ...card, shift: "center" };
      } else if (
        cards.indexOf(card) < cards.findIndex((card) => card.id === clickedId)
      ) {
        return { ...card, shift: "left" };
      } else {
        return { ...card, shift: "right" };
      }
    });

    setCards(newCards);
  };

  const cardVariants = {
    left: {
      x: isMobile ? "-50%" : "-30%",
      scale: 0.8,
      rotateY: -15,
      zIndex: 1,
      filter: "blur(2px)",
    },
    center: { x: 0, scale: 1, rotateY: 0, zIndex: 2, filter: "blur(0px)" },
    right: {
      x: isMobile ? "50%" : "30%",
      scale: 0.8,
      rotateY: 15,
      zIndex: 1,
      filter: "blur(2px)",
    },
    offscreen: { y: 300, opacity: 0 },
  };

  const hoverEffect = {
    scale: 0.85,
    transition: { duration: 0.3 },
    cursorPointer: true,
  };

  const textEnterFromLeft = {
    offscreen: {  opacity: 0 },
    onscreen: {opacity: 1, transition: { duration: 1 } },
  };

  const textEnterFromRight = {
    offscreen: {  opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <div className="flex h-[120vh] flex-col items-center text-center text-black md:h-[80vh] md:flex-row">
      <div className="flex w-2/4 flex-col items-center justify-center">
        <motion.p
          className="mb-4 text-2xl font-bold "
          variants={textEnterFromLeft}
          initial="offscreen"
          whileInView={"onscreen"}
        >
          {"Take a look at some results we've generated for clients."}
        </motion.p>
        <motion.p
          className="mb-2 text-gray"
          variants={textEnterFromRight}
          initial="offscreen"
          whileInView={"onscreen"}
        >
          {
            "We've generated over $361K in qualified pipeline with our outbound Client Acquisition Systems."
          }
        </motion.p>
        <motion.p
          className="mb-4 text-gray"
          variants={textEnterFromLeft}
          initial="offscreen"
          whileInView={"onscreen"}
        >
          {"Our process works for all established B2B businesses."}
        </motion.p>
        <Button className="px-6 py-3 text-lg font-bold md:mx-5">
          Book a Call
        </Button>
      </div>
      <div
        ref={scope}
        className="relative flex h-full w-2/4 flex-col items-center justify-center"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            animate={card.shift}
           
            className={`absolute z-0 m-5 flex h-[90%] w-full flex-col justify-evenly rounded-lg bg-blue p-5 text-white shadow-cool md:h-[85%] md:w-[60%] md:justify-center ${card.shift != "center" ? "hover:cursor-pointer" : ""}`}
            transition={{ duration: 0.6 }}
            whileHover={card.shift != "center" ? hoverEffect : {}}
            onClick={() => shuffleCards(card.id)}
          >
            {/* CARD IMAGE */}
            <Image
              src={isMobile ? card.mobileImage : card.desktopImage}
              alt={`card image`}
              width={isMobile ? "200" : "600"}
              height={isMobile ? "80" : "450"}
              className="rounded-lg object-contain shadow-cool md:mb-10"
            />

            {/* TEXT PER CARD */}
            <div className="flex flex-col items-center justify-evenly md:flex-row md:gap-x-10 md:p-5 ">
              {card.text.map((text, idx) => (
                <div
                  key={idx}
                  className="mb-2 flex basis-full flex-col gap-y-2 text-center"
                >
                  <p className="text-lg font-bold md:text-2xl">
                    {text.subText1}
                  </p>
                  <p className="text-md  text-nowrap font-semibold">
                    {text.subText2}
                  </p>
                  <p className="text-xs text-gray md:text-sm">
                    {text.subText3}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
