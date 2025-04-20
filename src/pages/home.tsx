import Header from '../components/Header';
import Hero from '../sections/Hero';
import Content1 from '../sections/Content1';
import PortfolioGlimps from '../sections/PortfolioGlimps';
export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Hero />
      <Content1 />
      <PortfolioGlimps />
    </div>
  );
}
