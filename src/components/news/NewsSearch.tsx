import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

interface NewsSearchProps {
  value: string;
  onChange: (value: string) => void;
}

const NewsSearch = ({ value, onChange }: NewsSearchProps) => {
  return (
    <div className="relative mb-8">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-concrete-400" />
      <Input 
        className="pl-10"
        placeholder="Поиск по новостям..." 
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default NewsSearch;