import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { User, Lock, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import deliveryRobot from "@/assets/delivery-robot.png";

const SignIn = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuth = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        {/* Robot Illustration */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <img 
            src={deliveryRobot} 
            alt="Delivery Robot" 
            className="w-80 h-80 object-contain"
          />
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-foreground">RoboDeliver</h1>
            <p className="text-xl text-muted-foreground">
              Your autonomous delivery companion
            </p>
          </div>
        </div>

        {/* Auth Form */}
        <Card className="p-8 shadow-neu">
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-bold text-foreground">
                {isSignUp ? "Join RoboDeliver" : "Welcome Back"}
              </h2>
              <p className="text-muted-foreground">
                {isSignUp 
                  ? "Create your account to start delivering" 
                  : "Sign in to manage your deliveries"
                }
              </p>
            </div>

            <div className="space-y-4">
              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      id="name"
                      placeholder="Enter your full name"
                      className="pl-12 h-touch text-base rounded-xl shadow-neu-inset"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 h-touch text-base rounded-xl shadow-neu-inset"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-base font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-12 h-touch text-base rounded-xl shadow-neu-inset"
                  />
                </div>
              </div>
            </div>

            <Button 
              onClick={handleAuth}
              size="lg" 
              variant="robot" 
              className="w-full"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </Button>

            <div className="text-center">
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-primary hover:text-primary/80 font-medium"
              >
                {isSignUp 
                  ? "Already have an account? Sign in" 
                  : "Need an account? Sign up"
                }
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignIn;