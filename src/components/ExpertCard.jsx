import { Expert, quotes } from "../assets";
import Button from "./Button";

const ExpertCard = ({ content, name, title, icon }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-20 sm:mr-5 mr-0 my-5 feedback-card">
    <img
      src={Expert}
      alt="double_quotes"
      className="w-[80%] h-[80%] object-contain mb-3"
    />
    <div className="flex justify-between flex-row">
      <h4 className="font-poppins font-semibold text-white text-[14px] leading-[23.4px] mb-3">
        Arun Kumar
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px]">
        4.4/5
      </p>
    </div>
    <div className="flex justify-between flex-row divide-x m-2">
      <div className="flex  flex-col  ">
        <h4 className="font-poppins font-semibold text-white text-[14px] leading-[23.4px] mb-3">
          Experience
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px] text-center">
          7+
        </p>
      </div>
      <div className="flex  flex-col pl-14">
        <h4 className="font-poppins font-semibold text-white text-[14px] leading-[23.4px] mb-3">
          Followers
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[14px] leading-[24px] text-center">
         3.1k
        </p>
      </div>
    </div>
    <div className="flex-1 flex flex-col mt-2">
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
    <div className="flex justify-between flex-row">
      <h4 className="font-poppins font-semibold xs:text-[20.89px] text-[15.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
      ₹1,999/mo
        </h4>
       <Button text={"Subscription >"} styles={"text-[15px]"}/>
  
    </div>
  </div>
);

export default ExpertCard;
