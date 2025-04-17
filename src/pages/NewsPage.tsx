import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewsItem } from "@/components/NewsCard";
import { SearchIcon } from "lucide-react";

// Имитация получения новостей
const getNewsData = (): NewsItem[] => {
  return [
    {
      id: "1",
      title: "Новая технология 3D-печати домов сокращает время строительства на 70%",
      description: "Инновационная технология позволяет печатать несущие конструкции и внутренние перегородки всего за 48 часов, что значительно снижает стоимость строительства и сроки сдачи объектов.",
      category: "Технологии",
      date: new Date(2023, 11, 5),
      image: "/placeholder.svg",
      slug: "3d-printing-houses",
      featured: true
    },
    {
      id: "2",
      title: "Исследование: самовосстанавливающийся бетон увеличивает срок службы зданий в 2 раза",
      description: "Ученые разработали состав бетона, который содержит специальные бактерии, активирующиеся при появлении трещин и заполняющие их карбонатом кальция.",
      category: "Материалы",
      date: new Date(2023, 11, 3),
      image: "/placeholder.svg",
      slug: "self-healing-concrete",
      featured: true
    },
    {
      id: "3",
      title: "Проект энергоэффективного квартала в Москве получил международную премию",
      description: "Российский проект жилого квартала с нулевым энергопотреблением был отмечен на международной выставке экологичного строительства в Барселоне.",
      category: "Проекты",
      date: new Date(2023, 11, 1),
      image: "/placeholder.svg",
      slug: "energy-efficient-district",
      featured: false
    },
    {
      id: "4",
      title: "Строительные роботы увеличивают производительность труда на 35%",
      description: "Автоматизированные системы и роботы-строители всё чаще используются на стройплощадках, повышая эффективность и безопасность работ.",
      category: "Инновации",
      date: new Date(2023, 10, 28),
      image: "/placeholder.svg",
      slug: "construction-robots",
      featured: true
    },
    {
      id: "5",
      title: "Аналитика рынка цемента: прогнозы на 2024 год",
      description: "Эксперты предсказывают рост цен на цемент на 8-12% в связи с увеличением транспортных расходов и модернизацией производств.",
      category: "Аналитика",
      date: new Date(2023, 10, 25),
      image: "/placeholder.svg",
      slug: "cement-market-analysis",
      featured: false
    },
    {
      id: "6",
      title: "Новые строительные нормы для сейсмоустойчивых зданий вступят в силу с января",
      description: "Минстрой утвердил обновленные нормативы, повышающие требования к сейсмоустойчивости зданий в регионах с высокой сейсмической активностью.",
      category: "Нормативы",
      date: new Date(2023, 10, 22),
      image: "/placeholder.svg",
      slug: "new-seismic-regulations",
      featured: false
    },
    {
      id: "7",
      title: "Цены на цемент выросли на 15% за последний квартал",
      description: "Эксперты связывают рост с увеличением транспортных расходов и высоким спросом в строительном секторе.",
      category: "Рынок",
      date: new Date(2023, 10, 20),
      image: "/placeholder.svg",
      slug: "cement-price-increase",
      featured: false
    },
    {
      id: "8",
      title: "Минстрой представил новую программу развития малоэтажного строительства",
      description: "Программа направлена на стимулирование строительства индивидуальных домов в пригородных зонах крупных городов.",
      category: "Политика",
      date: new Date(2023, 10, 19),
      image: "/placeholder.svg",
      slug: "low-rise-building-program",
      featured: false
    },
    {
      id: "9",
      title: "Эко-бетон из переработанных материалов прошел сертификацию",
      description: "Новый материал на 40% состоит из переработанных строительных отходов и соответствует всем стандартам прочности.",
      category: "Экология",
      date: new Date(2023, 10, 18),
      image: "/placeholder.svg",
      slug: "eco-concrete-certification",
      featured: false
    },
    {
      id: "10",
      title: "Компания «СтройТех» внедряет роботизированную укладку кирпича",
      description: "Автоматизированные системы позволяют увеличить скорость строительства на 30% и снизить количество брака.",
      category: "Автоматизация",
      date: new Date(2023, 10, 17),
      image: "/placeholder.svg",
      slug: "robotic-bricklaying",
      featured: false
    },
    {
      id: "11",
      title: "Объявлены победители архитектурного конкурса «Инновации в бетоне»",
      description: "Молодые архитекторы представили концепции использования бетона в современных городских пространствах.",
      category: "Конкурсы",
      date: new Date(2023, 10, 16),
      image: "/placeholder.svg",
      slug: "concrete-innovation-contest",
      featured: false
    },
    {
      id: "12",
      title: "Умные строительные материалы: тренды и перспективы",
      description: "Обзор инновационных материалов, способных адаптироваться к изменениям окружающей среды и оптимизировать энергопотребление зданий.",
      category: "Технологии",
      date: new Date(2023, 10, 14),
      image: "/placeholder.svg",
      slug: "smart-building-materials",
      featured: false
    }
  ];
};

const categories = [
  "Все", "Технологии", "Материалы", "Проекты", "Инновации", 
  "Аналитика", "Нормативы", "Рынок", "Политика", "Экология", "Автоматизация", "Конкурсы"
];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-concrete-100 py-10">
          <div className="container">
            <h1 className="text-4xl font-bold mb-6">Новости строительной отрасли</h1>
            
            <div className="relative mb-8">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-concrete-400" />
              <Input 
                className="pl-10"
                placeholder="Поиск по новостям..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="Все" className="w-full" onValueChange={setActiveCategory}>
              <div className="overflow-x-auto pb-2">
                <TabsList className="w-auto mb-6">
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {categories.map((category) => (
                <TabsContent key={category} value={category} className="space-y-0 mt-0">
                  {filteredNews.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredNews.map((news) => (
                        <div key={news.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                          <div className="h-48 relative">
                            <img 
                              src={news.image} 
                              alt={news.title} 
                              className="w-full h-full object-cover"
                            />
                            <Badge className="absolute top-3 left-3 bg-brain-500">{news.category}</Badge>
                          </div>
                          
                          <div className="p-4 flex flex-col flex-grow">
                            <div className="text-sm text-concrete-500 mb-2">
                              {format(news.date, "d MMMM yyyy", { locale: ru })}
                            </div>
                            
                            <h3 className="text-lg font-semibold mb-3 hover:text-brain-500 transition-colors line-clamp-2">
                              <Link to={`/news/${news.slug}`}>{news.title}</Link>
                            </h3>
                            
                            <p className="text-concrete-600 text-sm mb-4 flex-grow line-clamp-3">
                              {news.description}
                            </p>
                            
                            <Link 
                              to={`/news/${news.slug}`}
                              className="text-brain-500 hover:underline font-medium text-sm mt-auto"
                            >
                              Читать полностью
                            </Link>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="text-4xl mb-4">🔍</div>
                      <h3 className="text-xl font-medium mb-2">Новости не найдены</h3>
                      <p className="text-concrete-500">
                        По вашему запросу "{searchTerm}" в категории "{activeCategory}" ничего не найдено
                      </p>
                      <Button 
                        className="mt-4" 
                        variant="outline"
                        onClick={() => {
                          setSearchTerm("");
                          setActiveCategory("Все");
                        }}
                      >
                        Сбросить фильтры
                      </Button>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
        
        <section className="bg-concrete-50 py-12">
          <div className="container">
            <h2 className="text-2xl font-bold mb-8">Подписка на новости</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-xl font-medium mb-3">Получайте свежие новости на вашу почту</h3>
                <p className="mb-6 text-concrete-600">
                  Мы отправляем только важные новости строительной отрасли и никакого спама
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input placeholder="Ваш email адрес" className="sm:flex-grow" />
                  <Button asChild className="bg-brain-500 hover:bg-brain-600 whitespace-nowrap">
                    <Link to="/subscribe">Подписаться</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;