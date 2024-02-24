import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Refer & Earn
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Empower your teams to build better processes, for a better 
workplace.
      </p>

      <Button text={"Become a Affiliate Partner"} styles={`mt-10`} />
    </div>
    <p className={`${styles.paragraph} max-w-[570px] mt-15`}>
    With Cobalt, managing your business finances is effortless, 
empowering, and anything but boring. Our intuitive platform brings
clarity to your cash flow, simplifies your financial decision-making, and  
fingertips. Say no to spreadsheets and tools designed in the 80s.
      </p>
   
  </section>
);

export default Business;
