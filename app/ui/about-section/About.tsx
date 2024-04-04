import { useState } from "react";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

const AccordionSolutions = () => {
  const [open, setOpen] = useState(solutions[0].id);
  const imgSrc = solutions.find((s) => s.id === open)?.imgSrc;
  return (
    <section id="about" className="z-10 bg-primary px-8 py-12 md:px-0">
      <div className="max-w-9xl z-10 grid w-full grid-cols-1 gap-8 md:px-20 lg:grid-cols-[1fr_350px]">
        <div className="z-10">
          <h3 className="mb-8 text-4xl font-bold text-white">
            {"Spike's Story"}
          </h3>
          <div className="flex flex-col gap-4">
            {solutions.map((q) => {
              return (
                <Solution
                  {...q}
                  key={q.id}
                  open={open}
                  setOpen={setOpen}
                  index={q.id}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={imgSrc}
            className="z-10 aspect-[4/3] rounded-2xl bg-slate-300 lg:aspect-auto"
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

const Solution = ({ title, description, index, open, setOpen }: any) => {
  const isOpen = index === open;

  return (
    <div
      onClick={() => setOpen(index)}
      className="relative cursor-pointer overflow-hidden rounded-lg p-0.5"
    >
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "240px" : "72px",
        }}
        className="relative z-20 flex flex-col justify-between rounded-[7px] bg-white p-6"
      >
        <div>
          <motion.p
            initial={false}
            animate={{
              color: isOpen ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 1)",
            }}
            className="w-fit text-nowrap bg-gradient-to-r from-secondary-dark to-secondary-light bg-clip-text text-xl font-medium"
          >
            {title}
          </motion.p>
          <motion.p
            initial={false}
            animate={{
              opacity: isOpen ? 1 : 0,
            }}
            className="mt-4 bg-gradient-to-r from-secondary-dark to-secondary-light bg-clip-text text-transparent"
          >
            {description}
          </motion.p>
        </div>
        <motion.button
          initial={false}
          animate={{
            opacity: isOpen ? 1 : 0,
          }}
          className="group -mb-6 -ml-6 -mr-6 mt-4 flex items-center justify-center gap-1 rounded-b-md bg-gradient-to-r from-secondary-dark to-secondary-light py-2 text-white transition-[gap]"
        ></motion.button>
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        className="absolute inset-0 z-10 bg-gradient-to-r from-secondary-dark to-secondary-light"
      />
      <div className="absolute inset-0 z-0 bg-slate-200" />
    </div>
  );
};

export default AccordionSolutions;

const solutions = [
  {
    id: 1,
    title: "Investment Excellence",
    description:
      "A portfolio that reflects our commitment to fostering groundbreaking initiatives.",
    imgSrc:
      "https://media2.giphy.com/media/SsTcO55LJDBsI/giphy.gif?cid=ecf05e47hfid50hu34mzkabzoy46hrftyl6g6656uygzmnpy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
  {
    id: 2,
    title: "Integrity & Commitment",
    description:
      "We uphold the highest standards of integrity in all our actions, firmly committed to our partners' success and prosperity.",
    imgSrc:
      "https://media3.giphy.com/media/3oz8xR9wKr8TaazlQc/giphy.gif?cid=ecf05e47izzshtedbk9y9dv6f5yvdsbakp7tth2n58vsdd7p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
  {
    id: 3,
    title: "Fundraising Mastery",
    description:
      "Expertise in connecting transformative ventures with the right investors, ensuring a seamless and prosperous fundraising journey.",
    imgSrc:
      "https://media1.giphy.com/media/VkMV9TldsPd28/giphy.gif?cid=ecf05e478ipd21u861g034loyqpc66eseytcl7lzjbk1wqrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  },
];
