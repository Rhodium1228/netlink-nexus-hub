import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import ManageSubscriptionButton from "@/components/ManageSubscriptionButton";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    // Scroll listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHashNavigation = (hash: string) => {
    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${hash}`);
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const navLinks = [
    { name: "Plans", href: "/plans" },
    { name: "Coverage", hash: "#coverage" },
    { name: "Support", href: "/support" },
    { name: "About", href: "/about" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-card/95 backdrop-blur-xl border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="content-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-2.5 group">
            <img src={logo} alt="GI NET Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain" />
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              GI NET
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hash ? (
                <button
                  key={link.name}
                  onClick={() => handleHashNavigation(link.hash)}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium rounded-lg hover:bg-muted transition-all"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground font-medium rounded-lg hover:bg-muted transition-all"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                <ManageSubscriptionButton variant="ghost" size="sm" />
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={async () => {
                    await supabase.auth.signOut();
                    navigate("/");
                  }}
                >
                  <User className="w-4 h-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate("/auth")}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Sign In
                </Button>
                <Button 
                  size="sm"
                  onClick={() => navigate("/auth")}
                  className="rounded-lg"
                >
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-card animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.hash ? (
                  <button
                    key={link.name}
                    onClick={() => handleHashNavigation(link.hash)}
                    className="text-foreground hover:text-primary transition-colors font-medium py-3 px-4 text-left rounded-lg hover:bg-muted"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-3 px-4 rounded-lg hover:bg-muted"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-2 pt-4 mt-2 border-t border-border">
                {user ? (
                  <>
                    <ManageSubscriptionButton 
                      variant="outline" 
                      className="w-full justify-start"
                    />
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={async () => {
                        await supabase.auth.signOut();
                        setIsOpen(false);
                        navigate("/");
                      }}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start"
                      onClick={() => {
                        navigate("/auth");
                        setIsOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        navigate("/auth");
                        setIsOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
