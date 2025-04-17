import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/components/NewsCard";

interface NewsCardProps {
  news: NewsItem;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow">
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
  );
};

export default NewsCard;