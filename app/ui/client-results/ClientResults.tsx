import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "../buttons";

export default function ClientResults() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "/dandelion-result.png",
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
    },
    {
      id: 2,
      image: "/doukas-result.png",
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
    },
    {
      id: 3,
      image: "/jump-result.png",
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
    },
  ];

  return (
    <div className="flex h-[70vh] flex-col md:flex-row p-5 ">
      <div className="flex w-2/4 flex-col items-center justify-center">
        <p className="mb-4 p-5 text-2xl font-bold ">
          {"Take a look at some results we've generated for clients."}
        </p>
        <p className="mb-2 text-gray">
          {
            "We've generated over $361K in qualified pipeline with our outbound Client Acquisition Systems."
          }
        </p>
        <p className="mb-4 text-gray">
          {"Our process works for all established B2B businesses."}
        </p>
        <Button className="px-6 py-3 text-lg font-bold md:mx-5">
          Book a Call
        </Button>
      </div>
      <div className="relative flex w-2/4 flex-col items-center p-5">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="absolute m-5 flex w-3/4 flex-col justify-center rounded bg-blue-700 p-5 shadow-cool"
          >
            {/* CARD IMAGE */}
            <Image
              src={card.image}
              alt={`card image`}
              width="600"
              height="450"
              className="mb-10 rounded-lg object-contain shadow-cool"
            />

            {/* TEXT PER CARD */}
            <div className="flex flex-row justify-evenly gap-x-10 p-5 ">
              {card.text.map((text, idx) => (
                <div
                  key={idx}
                  className="mb-2 flex basis-full flex-col gap-y-2 text-center"
                >
                  <p className=" text-2xl font-bold">{text.subText1}</p>
                  <p className="text-md  text-nowrap font-semibold">
                    {text.subText2}
                  </p>
                  <p className="text-sm text-gray">{text.subText3}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
