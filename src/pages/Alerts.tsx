import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowLeft,
  AlertTriangle,
  Battery,
  Wifi,
  CheckCircle,
  XCircle,
  Search,
  MessageCircle,
  Phone,
  HelpCircle,
  Book
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Alerts = () => {
  const navigate = useNavigate();

  const alerts = [
    {
      id: "ALERT-001",
      type: "battery",
      severity: "warning",
      title: "Low Battery Warning",
      message: "Robot battery level is at 15%. Consider charging soon.",
      timestamp: "2 hours ago",
      resolved: false
    },
    {
      id: "ALERT-002",
      type: "connectivity",
      severity: "error", 
      title: "Connection Lost",
      message: "WiFi connection was lost during delivery. Switched to cellular.",
      timestamp: "5 hours ago",
      resolved: true
    },
    {
      id: "ALERT-003",
      type: "system",
      severity: "info",
      title: "Maintenance Reminder",
      message: "Scheduled maintenance due in 3 days.",
      timestamp: "1 day ago",
      resolved: false
    }
  ];

  const faqs = [
    {
      question: "What should I do if my robot gets stuck?",
      answer: "First, check the Status page to see the robot's current location. If accessible, you can manually guide it to safety. Otherwise, contact support."
    },
    {
      question: "How long does the battery last?",
      answer: "The robot battery typically lasts 6-8 hours of continuous operation, depending on terrain and weather conditions."
    },
    {
      question: "What happens if it rains during delivery?",
      answer: "Our robots are weather-resistant and can operate in light rain. Heavy weather conditions may pause deliveries for safety."
    }
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "error":
        return <XCircle className="h-5 w-5 text-destructive" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-warning" />;
      case "info":
        return <CheckCircle className="h-5 w-5 text-primary" />;
      default:
        return <AlertTriangle className="h-5 w-5" />;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "error":
        return <Badge className="bg-destructive">Critical</Badge>;
      case "warning":
        return <Badge className="bg-warning">Warning</Badge>;
      case "info":
        return <Badge variant="outline">Info</Badge>;
      default:
        return <Badge variant="outline">{severity}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-6">
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
            <h1 className="text-4xl font-bold text-foreground">Alerts & Support</h1>
            <p className="text-muted-foreground text-lg">Monitor issues and get help</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Alerts */}
          <div className="space-y-6">
            <Card className="p-6 shadow-neu">
              <h2 className="text-2xl font-bold text-foreground mb-6">Active Alerts</h2>
              
              <div className="space-y-4">
                {alerts.filter(alert => !alert.resolved).map((alert) => (
                  <div key={alert.id} className="p-4 rounded-xl border shadow-neu-inset">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {getSeverityIcon(alert.severity)}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="font-semibold text-foreground">{alert.title}</h3>
                            {getSeverityBadge(alert.severity)}
                          </div>
                          <p className="text-muted-foreground mb-2">{alert.message}</p>
                          <p className="text-sm text-muted-foreground">{alert.timestamp}</p>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Resolve
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 shadow-neu">
              <h2 className="text-2xl font-bold text-foreground mb-6">Recent Alerts</h2>
              
              <div className="space-y-4">
                {alerts.filter(alert => alert.resolved).map((alert) => (
                  <div key={alert.id} className="p-4 rounded-xl bg-muted/30">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground opacity-75">{alert.title}</h3>
                        <p className="text-muted-foreground text-sm">{alert.message}</p>
                        <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                      </div>
                      <Badge variant="outline" className="text-success">Resolved</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            {/* Contact Support */}
            <Card className="p-6 shadow-neu">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Support</h2>
              
              <div className="space-y-4">
                <Button size="lg" variant="robot" className="w-full justify-start">
                  <MessageCircle className="mr-3" />
                  Live Chat Support
                </Button>
                
                <Button size="lg" variant="outline" className="w-full justify-start">
                  <Phone className="mr-3" />
                  Call Support: 1-800-ROBOT-HELP
                </Button>
                
                <Button size="lg" variant="outline" className="w-full justify-start">
                  <Book className="mr-3" />
                  User Manual
                </Button>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">Emergency Contact</h3>
                <p className="text-muted-foreground">
                  For urgent issues or robot emergencies, call our 24/7 hotline:
                </p>
                <Button variant="destructive" size="lg" className="w-full">
                  Emergency: 1-800-EMERGENCY
                </Button>
              </div>
            </Card>

            {/* FAQ */}
            <Card className="p-6 shadow-neu">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <HelpCircle className="mr-3" />
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    placeholder="Search FAQs..."
                    className="pl-12 h-touch rounded-xl shadow-neu-inset"
                  />
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/30">
                      <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                      <p className="text-muted-foreground text-sm">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full">
                  View All FAQs
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;