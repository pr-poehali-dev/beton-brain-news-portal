import { Button } from "@/components/ui/button";

interface NewsNotFoundProps {
  searchTerm: string;
  category: string;
  onResetFilters: () => void;
}

const NewsNotFound = ({ searchTerm, category, onResetFilters }: NewsNotFoundProps) => {
  return (
    <div className="text-center py-12">
      <div className="text-4xl mb-4">🔍</div>
      <h3 className="text-xl font-medium mb-2">Новости не найдены</h3>
      <p className="text-concrete-500">
        По вашему запросу "{searchTerm}" в категории "{category}" ничего не найдено
      </p>
      <Button 
        className="mt-4" 
        variant="outline"
        onClick={onResetFilters}
      >
        Сбросить фильтры
      </Button>
    </div>
  );
};

export default NewsNotFound;