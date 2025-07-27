import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { label: "Work", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-heading font-bold text-xl text-foreground">
          ST
        </Link>
        
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-fast relative ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {location.pathname === item.href && (
                <div className="absolute -bottom-4 left-0 right-0 h-0.5 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <a
            href="/resume/Shaik-Tanveer-Lohare-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-fast border border-border hover:border-primary/50 px-4 py-2 rounded-md"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;