import { NewsItem } from "./NewsCard";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Имитация получения последних новостей
const getLatestNews = (): NewsItem[] => {
  return [
    {
      id: "7",
      title: "Цены на цемент выросли на 15% за последний квартал",
      description: "Эксперты связывают рост с увеличением транспортных расходов и высоким спросом в строительном секторе.",
      category: "Рынок",
      date: new Date(2023, 10, 20),
      image: "/placeholder.svg",
      slug: "cement-price-increase",
    },
    {
      id: "8",
      title: "Минстрой представил новую программу развития малоэтажного строительства",
      description: "Программа направлена на стимулирование строительства индивидуальных домов в пригородных зонах крупных городов.",
      category: "Политика",
      date: new Date(2023, 10, 19),
      image: "/placeholder.svg",
      slug: "low-rise-building-program",
    },
    {
      id: "9",
      title: "Эко-бетон из переработанных материалов прошел сертификацию",
      description: "Новый материал на 40% состоит из переработанных строительных отходов и соответствует всем стандартам прочности.",
      category: "Экология",
      date: new Date(2023, 10, 18),
      image: "/placeholder.svg",
      slug: "eco-concrete-certification",
    },
    {
      id: "10",
      title: "Компания «СтройТех» внедряет роботизированную укладку кирпича",
      description: "Автоматизированные системы позволяют увеличить скорость строительства на 30% и снизить количество брака.",
      category: "Автоматизация",
      date: new Date(2023, 10, 17),
      image: "/placeholder.svg",
      slug: "robotic-bricklaying",
    },
    {
      id: "11",
      title: "Объявлены победители архитектурного конкурса «Инновации в бетоне»",
      description: "Молодые архитекторы представили концепции использования бетона в современных городских пространствах.",
      category: "Конкурсы",
      date: new Date(2023, 10, 16),
      image: "/placeholder.svg",
      slug: "concrete-innovation-contest",
    }
  ];
};

const LatestNews = () => {
  const news = getLatestNews();
  
  if (news.length === 0) return null;
  
  return (
    <section className="bg-concrete-50 py-12">
      <div className="container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Последние новости</h2>
          <Link to="/news">
            <Button variant="outline">Все новости</Button>
          </Link>
        </div>
        
        <div className="space-y-6">
          {news.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4 hover:shadow-md transition-shadow">
              <div className="w-full sm:w-48 h-32 flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className="bg-brain-500 hover:bg-brain-600">{item.category}</Badge>
                  <span className="text-sm text-concrete-500">
                    {format(item.date, "d MMMM yyyy", { locale: ru })}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 hover:text-brain-500 transition-colors">
                  <Link to={`/news/${item.slug}`}>{item.title}</Link>
                </h3>
                
                <p className="text-concrete-600 line-clamp-2 text-sm">{item.description}</p>
                
                <div className="mt-auto pt-3">
                  <Link 
                    to={`/news/${item.slug}`}
                    className="text-brain-500 hover:underline font-medium text-sm"
                  >
                    Читать полностью
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;