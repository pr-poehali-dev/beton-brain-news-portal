import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection";
import LatestNews from "@/components/LatestNews";
import TrendingTopics from "@/components/TrendingTopics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedSection />
        <LatestNews />
        <TrendingTopics />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;