import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splashRobot from "@/assets/splash-robot.jpg";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signin");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-glow to-accent flex items-center justify-center p-6">
      <div className="text-center space-y-8 animate-fade-in">
        {/* Robot Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-neu-glow animate-scale-in">
              <img 
                src={splashRobot} 
                alt="Robot" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* App Title */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white animate-fade-in" style={{ animationDelay: "0.5s" }}>
            RoboDeliver
          </h1>
          <p className="text-2xl text-white/80 animate-fade-in" style={{ animationDelay: "1s" }}>
            Autonomous Delivery System
          </p>
        </div>

        {/* Loading indicator */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: "1.5s" }}>
          <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-[loading_3s_ease-in-out_infinite]" style={{
              animation: "loading 3s ease-in-out forwards",
            }} />
          </div>
          <p className="text-white/60 text-lg">Initializing...</p>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Splash;