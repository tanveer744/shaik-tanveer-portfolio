import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, User, Mail, Briefcase, Sparkles } from "lucide-react";
import { useState } from "react";
import { AnimatedNavItem } from "@/components/ui/animated-nav-item";

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Work", href: "/", icon: <Briefcase className="w-5 h-5" /> },
    { label: "About", href: "/about", icon: <User className="w-5 h-5" /> },
    { label: "Contact", href: "/contact", icon: <Mail className="w-5 h-5" /> },
    { label: "Icons Demo", href: "/icons-demo", icon: <Sparkles className="w-5 h-5" /> },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link 
          to="/" 
          className="font-heading font-bold text-lg sm:text-xl text-foreground hover:text-primary transition-fast"
        >
          <span className="hidden sm:inline">Tanveer ⬩ Portfolio</span>
          <span className="sm:hidden">Tanveer</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <AnimatedNavItem
              key={item.href}
              href={item.href}
              icon={item.icon}
              title={item.label}
              className={location.pathname === item.href ? "ring-1 ring-ring/20" : ""}
            />
          ))}
          <a
            href="https://drive.google.com/file/d/1XM7oDgtQE2RV2sz9nMetpM9atabDzW1x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-fast border border-border hover:border-primary/50 px-3 py-2 rounded-md"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu size={20} />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[320px]">
              <div className="flex flex-col space-y-6 mt-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-lg">Menu</span>
                </div>
                
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={closeMenu}
                      className={`text-base font-medium transition-fast p-3 rounded-md ${
                        location.pathname === item.href
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  
                  <a
                    href="https://drive.google.com/file/d/1XM7oDgtQE2RV2sz9nMetpM9atabDzW1x/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeMenu}
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-fast border border-border hover:border-primary/50 p-3 rounded-md text-center"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;