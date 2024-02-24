import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero, Expert } from "./components";
import ChooseUS from "./components/ChooseUs";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Clients />
        <Billing />
        <Testimonials />
        <Stats />
        <ChooseUS />
        <Expert />
        <Business />
        <CardDeal />
        {/* <Testimonials /> */}
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;


