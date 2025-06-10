import Header from '../components/Header';
import Hero from '../sections/Hero';
import Content1 from '../sections/Content1';
import PortfolioGlimps from '../sections/PortfolioGlimps';
import WorkScope from '../sections/WorkScope';
import ContactForm from '../sections/ContactForm';
import Footer from '../components/Footer';  
import { useEffect, useState } from 'react';
import env from '../env.config';

export default function Home() {

  const [globalState, setGlobalState] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = `${env.apiUrl}/global`
      const response = await fetch(url);
      const {globalData} = await response.json();
      setGlobalState(globalData);
    }
    fetchData();
    // console.log("globalState",globalState);
  }, []);

  console.log("globalState",globalState);

  
  return (
    <div className="md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1750px] mx-auto">
      {/* Header */}
      <div>
        <Header headerObject={globalState?.header} />
      </div>
      {/* Body */}
      <div>
        <Hero />
        <Content1 />
        <WorkScope />
        <PortfolioGlimps />
        <ContactForm />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
