import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

const SubscribePage = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Подписка оформлена!",
      description: "Спасибо за подписку на нашу рассылку. Проверьте ваш email для подтверждения.",
    });
  };

  const handleCategoryChange = (category: string) => {
    setCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const availableCategories = [
    "Технологии строительства",
    "Инновационные материалы",
    "Строительные проекты",
    "Архитектурные решения",
    "Экологическое строительство",
    "Рынок недвижимости"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 bg-concrete-50">
        <div className="container max-w-4xl">
          <Card className="shadow-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-2">Подписка на рассылку</CardTitle>
              <CardDescription className="text-lg">
                Будьте в курсе последних новостей и трендов в строительной отрасли
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Выберите интересующие вас темы:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {availableCategories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`category-${category}`} 
                          checked={categories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label 
                          htmlFor={`category-${category}`}
                          className="cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="privacy" required />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Я согласен с <a href="/privacy" className="text-brain-500 hover:underline">политикой конфиденциальности</a> и получением информационных писем
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-brain-500 hover:bg-brain-600 text-white"
                >
                  Подписаться
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Преимущества подписки</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">📮</div>
                <h3 className="text-lg font-medium mb-2">Еженедельная рассылка</h3>
                <p className="text-concrete-600">Получайте самые важные новости и аналитику строительной отрасли</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-lg font-medium mb-2">Персонализированный контент</h3>
                <p className="text-concrete-600">Материалы по выбранным вами темам и интересам</p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="text-3xl mb-3">🔔</div>
                <h3 className="text-lg font-medium mb-2">Уведомления о мероприятиях</h3>
                <p className="text-concrete-600">Будьте в курсе предстоящих выставок и конференций</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SubscribePage;