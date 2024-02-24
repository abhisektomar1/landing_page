import { quotes } from "../assets";

const ChooseCard = ({ content, name, title, icon }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-20 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={icon} alt="double_quotes" className="w-[100%] h-[100%] object-contain mb-3"  />
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);


export default ChooseCard;
