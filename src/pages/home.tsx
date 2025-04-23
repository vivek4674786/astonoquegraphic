import Header from '../components/Header';
import Hero from '../sections/Hero';
import Content1 from '../sections/Content1';
import PortfolioGlimps from '../sections/PortfolioGlimps';
import WorkScope from '../sections/WorkScope';
import ContactForm from '../sections/ContactForm';
import Footer from '../components/Footer';  
export default function Home() {
  return (
    <div className="md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1750px] mx-auto">
      {/* Header */}
      <div>
        <Header />
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
