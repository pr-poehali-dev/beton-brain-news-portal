import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface NewsCategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  children: ReactNode;
}

const NewsCategoryTabs = ({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  children 
}: NewsCategoryTabsProps) => {
  return (
    <Tabs 
      value={activeCategory} 
      className="w-full" 
      onValueChange={onCategoryChange}
    >
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
          {children}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default NewsCategoryTabs;