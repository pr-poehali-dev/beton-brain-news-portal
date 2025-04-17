import { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { NewsItem } from "./NewsCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Имитация получения данных
const getMockNews = (): NewsItem[] => {
  return [
    {
      id: "1",
      title: "Новый способ производства армированного бетона сокращает углеродный след на 30%",
      description: "Инновационная технология от российских инженеров значительно снижает выбросы СО2 при производстве строительных материалов, сохраняя при этом прочностные характеристики.",
      category: "Технологии",
      date: new Date(2023, 10, 15),
      image: "/placeholder.svg",
      slug: "new-reinforced-concrete-production",
    },
    {
      id: "2",
      title: "Крупнейший строительный проект года стартует в Сибири",
      description: "Началось строительство инновационного жилого комплекса, который будет соответствовать самым высоким экологическим стандартам и использовать передовые материалы.",
      category: "Проекты",
      date: new Date(2023, 10, 12),
      image: "/placeholder.svg",
      slug: "siberia-construction-project",
    },
    {
      id: "3",
      title: "Обзор новых нормативов по сейсмоустойчивости зданий",
      description: "Вступают в силу обновленные требования к строительству в сейсмоопасных зонах. Что это значит для застройщиков и какие материалы теперь рекомендованы к использованию?",
      category: "Нормативы",
      date: new Date(2023, 10, 8),
      image: "/placeholder.svg",
      slug: "seismic-building-standards",
    },
    {
      id: "4",
      title: "Умные строительные материалы: что это такое и где применяются",
      description: "Самовосстанавливающийся бетон, термохромные окна и другие инновационные материалы, которые меняют представление о современном строительстве.",
      category: "Материалы",
      date: new Date(2023, 10, 5),
      image: "/placeholder.svg",
      slug: "smart-building-materials",
    },
    {
      id: "5",
      title: "Итоги международной выставки «СтройЭкспо-2023»",
      description: "Главные тренды, инновации и соглашения прошедшей в Москве крупнейшей строительной выставки года. Какие новые технологии скоро появятся на российском рынке?",
      category: "События",
      date: new Date(2023, 9, 30),
      image: "/placeholder.svg",
      slug: "stroyexpo-2023-results",
    },
    {
      id: "6",
      title: "3D-печать в строительстве: первый жилой дом в России",
      description: "В Ярославле завершено строительство первого в стране жилого дома, созданного с помощью строительного 3D-принтера. Каковы перспективы технологии?",
      category: "Инновации",
      date: new Date(2023, 9, 28),
      image: "/placeholder.svg", 
      slug: "3d-printed-house-russia",
    },
  ];
};

const categories = ["Все", "Технологии", "Проекты", "Материалы", "Инновации", "Нормативы", "События"];

const FeaturedSection = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [currentCategory, setCurrentCategory] = useState("Все");
  
  useEffect(() => {
    const data = getMockNews();
    setNews(data);
    setFilteredNews(data);
  }, []);
  
  useEffect(() => {
    if (currentCategory === "Все") {
      setFilteredNews(news);
    } else {
      setFilteredNews(news.filter(item => item.category === currentCategory));
    }
  }, [currentCategory, news]);

  if (news.length === 0) return null;
  
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Главные материалы</h2>
        
        <div className="mb-10">
          <Tabs defaultValue="Все" className="w-full">
            <TabsList className="w-full max-w-screen-md mb-6 overflow-x-auto flex-wrap justify-start">
              {categories.map(category => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setCurrentCategory(category)}
                  className="flex-shrink-0"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {categories.map(category => (
              <TabsContent key={category} value={category}>
                <div className="grid gap-6">
                  {filteredNews.length > 0 && (
                    <NewsCard news={filteredNews[0]} variant="featured" />
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredNews.slice(1, 4).map(item => (
                      <NewsCard key={item.id} news={item} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;