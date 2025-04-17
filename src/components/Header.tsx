import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4 mt-8">
                <Link to="/" className="text-lg font-medium">Главная</Link>
                <Link to="/news" className="text-lg font-medium">Новости</Link>
                <Link to="/articles" className="text-lg font-medium">Статьи</Link>
                <Link to="/projects" className="text-lg font-medium">Проекты</Link>
              </nav>
            </SheetContent>
          </Sheet>
          
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl lg:text-2xl">
              <span className="text-concrete-500">Бетон</span>
              <span className="text-gray-500">&</span>
              <span className="text-brain-500">Brain</span>
            </span>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-brain-500 transition-colors">Главная</Link>
          <Link to="/news" className="font-medium hover:text-brain-500 transition-colors">Новости</Link>
          <Link to="/articles" className="font-medium hover:text-brain-500 transition-colors">Статьи</Link>
          <Link to="/projects" className="font-medium hover:text-brain-500 transition-colors">Проекты</Link>
        </nav>
        
        <div className="flex items-center">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;