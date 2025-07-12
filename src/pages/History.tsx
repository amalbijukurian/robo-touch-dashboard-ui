import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  ArrowLeft,
  Search,
  Package,
  CheckCircle,
  XCircle,
  Clock,
  MapPin
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

  const deliveries = [
    {
      id: "DEL-001",
      destination: "123 Main St, Downtown",
      package: "Electronics",
      status: "delivered",
      timestamp: "2024-07-12 14:30",
      duration: "25 min"
    },
    {
      id: "DEL-002", 
      destination: "456 Oak Ave, Uptown",
      package: "Groceries",
      status: "delivered",
      timestamp: "2024-07-12 11:15",
      duration: "18 min"
    },
    {
      id: "DEL-003",
      destination: "789 Pine Rd, Suburbs",
      package: "Documents",
      status: "failed",
      timestamp: "2024-07-11 16:45",
      duration: "12 min"
    },
    {
      id: "DEL-004",
      destination: "321 Elm St, City Center",
      package: "Medical Supplies",
      status: "pending",
      timestamp: "2024-07-10 09:20",
      duration: "--"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "delivered":
        return <Badge className="bg-success"><CheckCircle className="w-4 h-4 mr-1" />Delivered</Badge>;
      case "failed":
        return <Badge className="bg-destructive"><XCircle className="w-4 h-4 mr-1" />Failed</Badge>;
      case "pending":
        return <Badge className="bg-warning"><Clock className="w-4 h-4 mr-1" />Pending</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

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
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-foreground">Delivery History</h1>
            <p className="text-muted-foreground text-lg">Track and review past deliveries</p>
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="p-6 shadow-neu">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search deliveries..."
                className="pl-12 h-touch rounded-xl shadow-neu-inset"
              />
            </div>
            <Button variant="outline" size="default">
              Filter
            </Button>
          </div>
        </Card>

        {/* Delivery List */}
        <div className="space-y-4">
          {deliveries.map((delivery) => (
            <Card key={delivery.id} className="p-6 shadow-neu hover:shadow-neu-pressed transition-all">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex items-center space-x-3">
                      <h3 className="font-semibold text-foreground text-lg">{delivery.id}</h3>
                      {getStatusBadge(delivery.status)}
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{delivery.destination}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right space-y-1">
                  <p className="font-medium text-foreground">{delivery.package}</p>
                  <p className="text-sm text-muted-foreground">{delivery.timestamp}</p>
                  <p className="text-sm text-muted-foreground">Duration: {delivery.duration}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Deliveries
          </Button>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 shadow-neu text-center">
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-success/10 inline-block">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <p className="text-3xl font-bold text-foreground">24</p>
              <p className="text-muted-foreground">Successful</p>
            </div>
          </Card>

          <Card className="p-6 shadow-neu text-center">
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-destructive/10 inline-block">
                <XCircle className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-3xl font-bold text-foreground">2</p>
              <p className="text-muted-foreground">Failed</p>
            </div>
          </Card>

          <Card className="p-6 shadow-neu text-center">
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-warning/10 inline-block">
                <Clock className="h-8 w-8 text-warning" />
              </div>
              <p className="text-3xl font-bold text-foreground">22 min</p>
              <p className="text-muted-foreground">Avg Duration</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default History;