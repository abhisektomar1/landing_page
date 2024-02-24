import styles from "../style";
import { discount, robot } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col mt-[40px] ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-yellow-500">Featured on Product Hunt {">"}</span> 
          </p>
        </div>
        <div className="absolute z-[0] w-[30%] h-[35%] top-25 blue__gradient" />
        <div className="absolute z-[0] w-[40%] h-[40%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[40%] h-[40%] right-50 bottom-50 blue__gradient" />
        <div className="flex flex-row  items-center">
          <h1 className="flex-1 z-[50] font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          Your team, <br className="sm:block hidden" />{" "}
            <span>reimagined.</span>{" "}
          </h1>
     
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Take your team up a level with easy-to-use tools,
        
        </p>
        <p className={`${styles.paragraph} max-w-[470px]`}>
      
         effortless templates and efficient workflows.
        </p>
        <Button styles={`mt-10`} text={"Get started today"} />
      </div>


    </section>
  );
};

export default Hero;
