import { NewsItem } from "@/components/NewsCard";
import NewsCard from "./NewsCard";
import NewsNotFound from "./NewsNotFound";

interface NewsGridProps {
  news: NewsItem[];
  searchTerm: string;
  activeCategory: string;
  onResetFilters: () => void;
}

const NewsGrid = ({ news, searchTerm, activeCategory, onResetFilters }: NewsGridProps) => {
  if (news.length === 0) {
    return (
      <NewsNotFound 
        searchTerm={searchTerm} 
        category={activeCategory} 
        onResetFilters={onResetFilters} 
      />
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {news.map((newsItem) => (
        <NewsCard key={newsItem.id} news={newsItem} />
      ))}
    </div>
  );
};

export default NewsGrid;