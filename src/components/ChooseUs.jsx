
import { Webinar } from "../assets";
import { features,ChooseUSs} from "../constants";
import styles from "../style";
import ChooseCard from "./ChooseCard";
import FeedbackCard from "./FeedbackCard";

const ChooseUS = () => (
  <>
    <section className={`flex md:flex-row flex-col mt-[40px] `}>
      <div
        className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col   items-center">
          <h1 className="flex-1 z-[50] font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Why Choose Us
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] text-center mt-5`}>
          Turn Pro to harness the power of AI, make Raycastyour own with custom
          themes, keep your Macs in sync and more.
        </p>
      </div>
    </section>

    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {ChooseUSs.map((card) => (
          <ChooseCard key={card.id} {...card} />
        ))}
      </div>
    </section>
    <section className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <img src={Webinar} alt="features" className="w-[100%] h-[100%] relative z-[5]" />
      
      </div>
    </section>
  </> 
);

export default ChooseUS;
