import { clients } from "../constants";
import styles from "../style";
import Button from "./Button";

const Clients = () => (
  <>
  <section className={`${styles.flexCenter} my-4 flex md:flex-col flex-col`}>
    <h3 className={`${styles.paragraph} max-w-[470px] mt-5`}>Trusted by teams at</h3>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
  <section className={`flex md:flex-row flex-col mt-[40px] `}>
      <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-col   items-center">
        <h2 className="font-poppins font-semibold xs:text-[48 px] text-[40px] text-white xs:leading-[77.8px] leading-[56.8px]">
        About Our Product
      </h2>
      <h2 className="font-poppins font-semibold xs:text-[48 px] text-[40px] text-white xs:leading-[77.8px] leading-[56.8px]">
         & Features.
      </h2>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Empower your teams to build better processes, for a
        
        </p>
        <p className={`${styles.paragraph} max-w-[470px]`}>
        better workplace.
        </p>
      </div>
    </section>
   

  </>
);

export default Clients;
