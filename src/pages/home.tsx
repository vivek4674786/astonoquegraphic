import Header from '../components/Header';
import Hero from '../sections/Hero';
import Content1 from '../sections/Content1';
import PortfolioGlimps from '../sections/PortfolioGlimps';
import WorkScope from '../sections/WorkScope';
import ContactForm from '../sections/ContactForm';
import Footer from '../components/Footer';  
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Hero />
      <Content1 />
      <WorkScope />
      <PortfolioGlimps />
      <ContactForm />
      <div>
        <Footer />
      </div>
    </div>
  );
}
