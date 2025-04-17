import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const NewsSubscriptionSection = () => {
  return (
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
  );
};

export default NewsSubscriptionSection;