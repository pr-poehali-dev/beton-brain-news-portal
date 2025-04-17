import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-concrete-200 to-concrete-50 overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('/placeholder.svg')] bg-center bg-cover"></div>
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-concrete-600">Бетон</span>
            <span className="text-concrete-500">&</span>
            <span className="text-brain-600">Brain</span>
          </h1>
          <p className="text-xl md:text-2xl text-concrete-700 mb-8">
            Новейшие тенденции, технологии и инновации в строительной отрасли
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-brain-500 hover:bg-brain-600">
              <Link to="/news">Свежие новости</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/subscribe">Подписаться на рассылку</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8">
          {["Технологии", "Материалы", "Проекты", "Инновации", "Аналитика"].map((category, index) => (
            <Link 
              key={index} 
              to={`/category/${category.toLowerCase()}`}
              className="bg-white/80 backdrop-blur-sm hover:bg-white text-center py-4 px-3 rounded-lg shadow-sm transition-all hover:shadow-md group"
            >
              <span className="font-medium group-hover:text-brain-500 transition-colors">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;