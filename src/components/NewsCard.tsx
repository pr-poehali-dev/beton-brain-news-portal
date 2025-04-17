import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: Date;
  image: string;
  slug: string;
}

interface NewsCardProps {
  news: NewsItem;
  variant?: "default" | "featured";
}

const NewsCard = ({ news, variant = "default" }: NewsCardProps) => {
  const formattedDate = format(news.date, "d MMMM yyyy", { locale: ru });
  
  if (variant === "featured") {
    return (
      <Card className="overflow-hidden group h-full hover:shadow-md transition-all">
        <div className="grid md:grid-cols-2 h-full">
          <div className="relative h-full min-h-[240px] overflow-hidden">
            <img 
              src={news.image || "/placeholder.svg"} 
              alt={news.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-4 left-4 bg-brain-500 hover:bg-brain-600">{news.category}</Badge>
          </div>
          <div className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl line-clamp-2 group-hover:text-brain-500 transition-colors">
                <Link to={`/news/${news.slug}`}>{news.title}</Link>
              </CardTitle>
              <CardDescription>{formattedDate}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{news.description}</p>
            </CardContent>
            <CardFooter>
              <Link 
                to={`/news/${news.slug}`}
                className="text-brain-500 hover:underline font-medium"
              >
                Читать полностью
              </Link>
            </CardFooter>
          </div>
        </div>
      </Card>
    );
  }
  
  return (
    <Card className="overflow-hidden group h-full hover:shadow-md transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={news.image || "/placeholder.svg"} 
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-4 left-4 bg-brain-500 hover:bg-brain-600">{news.category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg line-clamp-2 group-hover:text-brain-500 transition-colors">
          <Link to={`/news/${news.slug}`}>{news.title}</Link>
        </CardTitle>
        <CardDescription>{formattedDate}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-3 text-sm">{news.description}</p>
      </CardContent>
      <CardFooter>
        <Link 
          to={`/news/${news.slug}`}
          className="text-brain-500 hover:underline font-medium"
        >
          Читать полностью
        </Link>
      </CardFooter>
    </Card>
  );
};

export default NewsCard;