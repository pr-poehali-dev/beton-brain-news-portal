import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Анна Строева",
    position: "Главный редактор",
    image: "/placeholder.svg",
    bio: "Эксперт с 15-летним опытом в строительной журналистике. Специализируется на аналитике рынка строительных материалов."
  },
  {
    id: "2",
    name: "Максим Бетонов",
    position: "Технический директор",
    image: "/placeholder.svg",
    bio: "Инженер-строитель с опытом работы в крупных проектах. Отвечает за техническую точность материалов портала."
  },
  {
    id: "3",
    name: "Елена Цементова",
    position: "Редактор новостей",
    image: "/placeholder.svg",
    bio: "Журналист с фокусом на инновации в строительстве. Следит за всеми важными событиями отрасли."
  },
  {
    id: "4",
    name: "Олег Инновационный",
    position: "Корреспондент",
    image: "/placeholder.svg",
    bio: "Специализируется на репортажах с выставок и конференций, посвященных новым технологиям в строительстве."
  },
  {
    id: "5",
    name: "Мария Архитекторова",
    position: "Редактор проектов",
    image: "/placeholder.svg",
    bio: "Архитектор по образованию, пишет о выдающихся строительных проектах и тенденциях в архитектуре."
  },
  {
    id: "6",
    name: "Дмитрий Аналитиков",
    position: "Аналитик рынка",
    image: "/placeholder.svg",
    bio: "Экономист, специализирующийся на анализе строительной отрасли и прогнозировании трендов."
  }
];

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Наша команда</h1>
            <p className="text-lg text-concrete-700">
              Познакомьтесь с профессионалами, которые создают для вас самый актуальный контент о строительной отрасли
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map(member => (
              <Card key={member.id} className="overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-brain-500 font-medium mb-3">{member.position}</p>
                    <p className="text-concrete-700">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;