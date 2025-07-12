import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  User,
  Wifi,
  Globe,
  Moon,
  Bell,
  Shield,
  LogOut,
  Mail,
  Phone
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
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
            <h1 className="text-4xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground text-lg">Configure your robot and preferences</p>
          </div>
        </div>

        {/* Profile Settings */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <User className="mr-3" />
            Profile
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base font-medium">Full Name</Label>
                <Input 
                  id="name"
                  defaultValue="John Doe"
                  className="h-touch rounded-xl shadow-neu-inset"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-medium">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                    className="pl-12 h-touch rounded-xl shadow-neu-inset"
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  id="phone"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                  className="pl-12 h-touch rounded-xl shadow-neu-inset"
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Moon className="mr-3" />
            Appearance
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="dark-mode" className="text-base font-medium">Dark Mode</Label>
                <p className="text-muted-foreground">Switch between light and dark themes</p>
              </div>
              <Switch id="dark-mode" />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="language" className="text-base font-medium">Language</Label>
                <p className="text-muted-foreground">Choose your preferred language</p>
              </div>
              <Button variant="outline" size="default">
                <Globe className="mr-2 h-4 w-4" />
                English
              </Button>
            </div>
          </div>
        </Card>

        {/* Connectivity */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Wifi className="mr-3" />
            Connectivity
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="wifi" className="text-base font-medium">WiFi Auto-Connect</Label>
                <p className="text-muted-foreground">Automatically connect to known networks</p>
              </div>
              <Switch id="wifi" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="mobile-data" className="text-base font-medium">Mobile Data Backup</Label>
                <p className="text-muted-foreground">Use cellular when WiFi is unavailable</p>
              </div>
              <Switch id="mobile-data" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Bell className="mr-3" />
            Notifications
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="delivery-alerts" className="text-base font-medium">Delivery Alerts</Label>
                <p className="text-muted-foreground">Get notified about delivery status</p>
              </div>
              <Switch id="delivery-alerts" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="system-alerts" className="text-base font-medium">System Alerts</Label>
                <p className="text-muted-foreground">Robot maintenance and error notifications</p>
              </div>
              <Switch id="system-alerts" defaultChecked />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="battery-alerts" className="text-base font-medium">Battery Alerts</Label>
                <p className="text-muted-foreground">Low battery warnings</p>
              </div>
              <Switch id="battery-alerts" defaultChecked />
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
            <Shield className="mr-3" />
            Security
          </h2>
          
          <div className="space-y-4">
            <Button variant="outline" size="lg" className="w-full justify-start">
              Change Password
            </Button>
            
            <Button variant="outline" size="lg" className="w-full justify-start">
              Two-Factor Authentication
            </Button>
            
            <Button variant="outline" size="lg" className="w-full justify-start">
              Privacy Settings
            </Button>
          </div>
        </Card>

        {/* Account Actions */}
        <Card className="p-6 shadow-neu">
          <div className="space-y-4">
            <Button 
              variant="destructive" 
              size="lg" 
              className="w-full"
              onClick={handleLogout}
            >
              <LogOut className="mr-2" />
              Sign Out
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;