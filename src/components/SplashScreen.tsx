import { useEffect, useState } from "react";
import { Wifi } from "lucide-react";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-blue-700 to-accent animate-fade-in">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full border-4 border-white/20 animate-ping"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-4 border-white/30 animate-pulse"></div>
          </div>
          
          {/* Center icon */}
          <div className="relative flex items-center justify-center w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-white/10 rounded-full backdrop-blur-sm animate-pulse-glow"></div>
            <Wifi className="w-16 h-16 text-white relative z-10 animate-float" strokeWidth={2} />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-white mb-2 tracking-tight animate-fade-in-up">
          GI NET
        </h1>
        <p className="text-white/80 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Loading your experience...
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
