import { apple, bill, feat, google, product } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <>
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={product} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className="font-poppins font-semibold xs:text-[48 px] text-[40px] text-white xs:leading-[77.8px] leading-[56.8px] w-full">
      Lorem ipsum dolor <br className="sm:block hidden" /> sit amet, consectetur
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
       incididunt ut labore et dolore magna aliqua.
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Explore more -{">"}
      </p>
     
    </div>
  </section>
  <section className={`flex md:flex-row flex-col `}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
      <img src={feat} alt="features" className="w-[100%] h-[100%] relative z-[5]" />
      
      </div>
    </section>
</>
);

export default Billing;
