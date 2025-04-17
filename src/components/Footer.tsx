import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-concrete-100 text-concrete-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-bold text-xl">
                <span className="text-concrete-500">Бетон</span>
                <span className="text-gray-500">&</span>
                <span className="text-brain-500">Brain</span>
              </span>
            </Link>
            <p className="text-concrete-700 mb-4">
              Ваш надежный источник информации о строительной отрасли
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Разделы</h3>
            <ul className="space-y-2">
              <li><Link to="/news" className="hover:text-brain-500 transition-colors">Новости</Link></li>
              <li><Link to="/articles" className="hover:text-brain-500 transition-colors">Статьи</Link></li>
              <li><Link to="/projects" className="hover:text-brain-500 transition-colors">Проекты</Link></li>
              <li><Link to="/technologies" className="hover:text-brain-500 transition-colors">Технологии</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">О портале</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-brain-500 transition-colors">О нас</Link></li>
              <li><Link to="/team" className="hover:text-brain-500 transition-colors">Команда</Link></li>
              <li><Link to="/contact" className="hover:text-brain-500 transition-colors">Связаться с нами</Link></li>
              <li><Link to="/advertise" className="hover:text-brain-500 transition-colors">Реклама</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Подписка</h3>
            <p className="mb-3 text-concrete-700">Будьте в курсе последних новостей и трендов в строительстве</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="rounded-l-md border border-concrete-300 px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-brain-500"
              />
              <button className="bg-brain-500 text-white px-4 py-2 rounded-r-md hover:bg-brain-600 transition-colors">
                ОК
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-concrete-200 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Бетон & Brain. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-concrete-700 hover:text-brain-500 transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms" className="text-concrete-700 hover:text-brain-500 transition-colors">Условия использования</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;