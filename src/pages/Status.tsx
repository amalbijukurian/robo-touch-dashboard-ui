import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft,
  Battery,
  Wifi,
  MapPin,
  Zap,
  Eye,
  Radio,
  Thermometer,
  Shield
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Status = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            size="icon"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft />
          </Button>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Robot Status</h1>
            <p className="text-muted-foreground text-lg">Real-time monitoring and diagnostics</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map View */}
          <Card className="lg:col-span-2 p-6 shadow-neu">
            <h2 className="text-2xl font-bold text-foreground mb-4">Live Location</h2>
            <div className="aspect-video bg-muted rounded-xl flex items-center justify-center shadow-neu-inset">
              <div className="text-center space-y-2">
                <MapPin className="h-12 w-12 text-primary mx-auto" />
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
                <Badge variant="outline">GPS: Active</Badge>
              </div>
            </div>
          </Card>

          {/* System Status */}
          <div className="space-y-6">
            <Card className="p-6 shadow-neu">
              <h3 className="text-xl font-bold text-foreground mb-4">Battery Status</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Battery className="h-5 w-5 text-success" />
                    <span className="font-medium">Charge Level</span>
                  </div>
                  <span className="text-2xl font-bold text-success">85%</span>
                </div>
                <Progress value={85} className="h-3" />
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Voltage:</span>
                    <span>24.2V</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current:</span>
                    <span>3.2A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Temp:</span>
                    <span>32°C</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Health:</span>
                    <Badge variant="outline" className="text-success">Good</Badge>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-neu">
              <h3 className="text-xl font-bold text-foreground mb-4">Connectivity</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Wifi className="h-5 w-5 text-success" />
                    <span>WiFi Signal</span>
                  </div>
                  <Badge className="bg-success">Strong</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Radio className="h-5 w-5 text-success" />
                    <span>Cellular</span>
                  </div>
                  <Badge className="bg-success">4G LTE</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-success" />
                    <span>Security</span>
                  </div>
                  <Badge className="bg-success">Secure</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Sensor Status */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sensor Array</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 rounded-2xl bg-success/10">
                <Eye className="h-8 w-8 text-success" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Camera</p>
                <Badge className="bg-success">Operational</Badge>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 rounded-2xl bg-success/10">
                <Radio className="h-8 w-8 text-success" />
              </div>
              <div className="text-center">
                <p className="font-semibold">LiDAR</p>
                <Badge className="bg-success">Active</Badge>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 rounded-2xl bg-success/10">
                <Thermometer className="h-8 w-8 text-success" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Temperature</p>
                <Badge className="bg-success">Normal</Badge>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 rounded-2xl bg-warning/10">
                <Zap className="h-8 w-8 text-warning" />
              </div>
              <div className="text-center">
                <p className="font-semibold">Proximity</p>
                <Badge className="bg-warning">Detected</Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Delivery Progress */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-4">Current Delivery</h2>
          <div className="text-center py-8">
            <p className="text-muted-foreground text-lg">No active delivery</p>
            <Button 
              variant="robot" 
              size="lg" 
              className="mt-4"
              onClick={() => navigate("/scheduler")}
            >
              Start New Delivery
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Status;