import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
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

    return () => subscription.unsubscribe();
  }, []);

  const handleHashNavigation = (hash: string) => {
    if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home page with hash
      navigate(`/${hash}`);
      // Wait for navigation and then scroll
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Already on home, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home and scroll to top
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  const navLinks = [
    { name: "Plans", hash: "#plans" },
    { name: "Coverage", hash: "#coverage" },
    { name: "Support", href: "/support" },
    { name: "About", href: "/about" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center gap-3">
            <img src={logo} alt="GI NET Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold text-foreground">
              GI NET
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.hash ? (
                <button
                  key={link.name}
                  onClick={() => handleHashNavigation(link.hash)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
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
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate("/auth")}
                >
                  Sign In
                </Button>
                <Button 
                  size="sm"
                  onClick={() => navigate("/auth")}
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                link.hash ? (
                  <button
                    key={link.name}
                    onClick={() => handleHashNavigation(link.hash)}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-foreground hover:text-primary transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                {user ? (
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
