import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Topic {
  id: string;
  title: string;
  count: number;
  slug: string;
  icon?: string;
}

const trendingTopics: Topic[] = [
  { id: "1", title: "Зеленое строительство", count: 42, slug: "green-building", icon: "🌱" },
  { id: "2", title: "Умные материалы", count: 38, slug: "smart-materials", icon: "🧠" },
  { id: "3", title: "Автоматизация", count: 36, slug: "automation", icon: "🤖" },
  { id: "4", title: "3D-печать", count: 29, slug: "3d-printing", icon: "🖨️" },
  { id: "5", title: "Энергоэффективность", count: 27, slug: "energy-efficiency", icon: "⚡" },
  { id: "6", title: "Сейсмоустойчивость", count: 24, slug: "seismic-resistance", icon: "🏢" },
];

const TrendingTopics = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8">Популярные темы</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTopics.map((topic) => (
            <Link key={topic.id} to={`/topic/${topic.slug}`}>
              <Card className="h-full hover:shadow-md transition-all group">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{topic.icon}</span>
                    <h3 className="text-xl font-semibold group-hover:text-brain-500 transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                  <p className="text-concrete-500 mb-4">{topic.count} материалов</p>
                  <div className="flex items-center text-brain-500">
                    <span className="font-medium">Исследовать</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;