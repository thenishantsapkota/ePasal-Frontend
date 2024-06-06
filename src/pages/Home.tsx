import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import BannerSection from '../components/BannerSection';
import Newsletter from '../components/NewsLetter';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollTop from '../components/ScrollTop';

function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductSection/>
      <BannerSection />
      <Newsletter />
      <Footer />
      <ScrollTop />
    </main>
  );
}

export default Home;