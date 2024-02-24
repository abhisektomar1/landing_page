
import { Webinar } from "../assets";
import { features,ChooseUSs} from "../constants";
import styles from "../style";
import ChooseCard from "./ChooseCard";
import ExpertCard from "./ExpertCard";
import FeedbackCard from "./FeedbackCard";

const Expert = () => (
  <>
    <section className={`flex md:flex-row flex-col mt-[40px] `} id="expert">
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col   items-center">
          <h1 className="flex-1 z-[50] font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Our Expertise
          </h1>
        </div>
        <p className={`${styles.paragraph}  text-center mt-5`}>
        Guiding Your Investments to Greatness: Our Expertise, Your Financial Advantage!
        </p>
      </div>
    </section>

    <section
      id="experts"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {ChooseUSs.map((card) => (
          <ExpertCard key={card.id} {...card} />
        ))}
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {ChooseUSs.map((card) => (
          <ExpertCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  </> 
);

export default Expert;