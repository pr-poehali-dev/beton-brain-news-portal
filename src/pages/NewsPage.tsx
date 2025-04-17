import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsSearch from "@/components/news/NewsSearch";
import NewsCategoryTabs from "@/components/news/NewsCategoryTabs";
import NewsGrid from "@/components/news/NewsGrid";
import NewsSubscriptionSection from "@/components/news/NewsSubscriptionSection";
import { getNewsData, NEWS_CATEGORIES } from "@/data/news";

const NewsPage = () => {
  const allNews = getNewsData();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("Все");
  
  // Фильтрация новостей по поиску и категории
  const filteredNews = allNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          news.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "Все" || news.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("Все");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-concrete-100 py-10">
          <div className="container">
            <h1 className="text-4xl font-bold mb-6">Новости строительной отрасли</h1>
            
            <NewsSearch 
              value={searchTerm} 
              onChange={setSearchTerm} 
            />
            
            <NewsCategoryTabs 
              categories={NEWS_CATEGORIES}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            >
              <NewsGrid 
                news={filteredNews} 
                searchTerm={searchTerm} 
                activeCategory={activeCategory}
                onResetFilters={resetFilters}
              />
            </NewsCategoryTabs>
          </div>
        </div>
        
        <NewsSubscriptionSection />
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;