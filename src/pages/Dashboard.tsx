import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Battery, 
  MapPin, 
  Clock, 
  Play, 
  Activity, 
  History, 
  Calendar,
  Settings,
  Truck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const robotStatus = "Idle";
  const batteryLevel = 85;
  const currentRoute = "No active delivery";
  const eta = "--";

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground text-lg">Control your delivery robot</p>
          </div>
          <Button 
            variant="outline" 
            size="icon-lg"
            onClick={() => navigate("/settings")}
          >
            <Settings />
          </Button>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 shadow-neu">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Status</p>
                <p className="text-2xl font-bold text-foreground">{robotStatus}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-neu">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-success/10">
                <Battery className="h-8 w-8 text-success" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Battery</p>
                <p className="text-2xl font-bold text-foreground">{batteryLevel}%</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-neu">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <MapPin className="h-8 w-8 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Route</p>
                <p className="text-lg font-semibold text-foreground truncate">{currentRoute}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-neu">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-warning/10">
                <Clock className="h-8 w-8 text-warning" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">ETA</p>
                <p className="text-2xl font-bold text-foreground">{eta}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Action */}
        <Card className="p-8 shadow-neu">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="p-6 rounded-3xl bg-accent/10">
                <Truck className="h-16 w-16 text-accent" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Ready for Delivery</h2>
              <p className="text-muted-foreground text-lg">Your robot is standing by and ready to start a new delivery</p>
            </div>
            <Button 
              size="xl" 
              variant="robot" 
              className="min-w-64"
              onClick={() => navigate("/scheduler")}
            >
              <Play className="mr-2" />
              Start Delivery
            </Button>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-neu hover:shadow-neu-pressed transition-all cursor-pointer" onClick={() => navigate("/status")}>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Live Status</h3>
                <p className="text-muted-foreground">Monitor robot in real-time</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-neu hover:shadow-neu-pressed transition-all cursor-pointer" onClick={() => navigate("/history")}>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-secondary/50">
                <History className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Delivery History</h3>
                <p className="text-muted-foreground">View past deliveries</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-neu hover:shadow-neu-pressed transition-all cursor-pointer" onClick={() => navigate("/scheduler")}>
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-xl bg-accent/10">
                <Calendar className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Schedule</h3>
                <p className="text-muted-foreground">Plan future deliveries</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;