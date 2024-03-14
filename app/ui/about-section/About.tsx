import { InfoBox } from "./InfoBox";

export default function About() {
  return (
    <div className="flex flex-col justify-center h-[80vh] bg-blue overflow-hidden w-full">
      <h1 className="flex justify-center pb-10  text-4xl font-semibold md:ml-36 md:justify-start md:pb-5 md:text-5xl mt-5 md:mt-0">
        {"Spike's Story"}
      </h1>

      <div className="flex flex-col space-y-10 px-4 text-center md:px-36 md:text-start">
        <div className="flex flex-col items-center justify-between md:flex-row h-24">
          <p className="hidden flex-1 md:flex">
            {
              "We uphold the highest standards of integrity in all our actions, firmly committed to our partners' success and prosperity."
            }
          </p>
          <InfoBox
            className="w-full md:w-1/4"
            frontContent="Integrity & Commitment"
            backContent="We uphold the highest standards of integrity in all our actions, firmly committed to our partners' success and prosperity."
          >
            {" "}
            Integrity & Commitment
          </InfoBox>
        </div>

        <div className="flex flex-col items-center justify-between md:flex-row h-24">
          <p className="hidden flex-1 md:flex">
            {
              "Expertise in connecting transformative ventures with the right investors, ensuring a seamless and prosperous fundraising journey."
            }
          </p>
          <InfoBox
            className="w-full md:w-1/4"
            frontContent="Fundraising Mastery"
            backContent="Expertise in connecting transformative ventures with the right investors, ensuring a seamless and prosperous fundraising journey."
          >
            {" "}
            Fundraising Mastery
          </InfoBox>
        </div>

        <div className="flex items-center justify-between h-24">
          <InfoBox
            className="flex-1"
            frontContent="Dedication to investment excellence"
            backContent="A portfolio that reflects our commitment to fostering groundbreaking initiatives."
          >
            Dedication to investment excellence
          </InfoBox>
          <p className="ml-10 hidden w-1/4 px-3 md:flex">
            {
              "A portfolio that reflects our commitment to fostering groundbreaking initiatives."
            }
          </p>
        </div>

        <div className="flex items-center justify-between h-24">
          <InfoBox
            className="flex-1"
            frontContent="Cultivating Partnerships Beyond Transactions"
            backContent="Long-term growth and market resilience."
          >
            Cultivating Partnerships Beyond Transactions
          </InfoBox>
          <p className="ml-10 hidden w-1/4 px-3 md:flex">
            {"Long-term growth and market resilience."}
          </p>
        </div>
      </div>
    </div>
  );
}
