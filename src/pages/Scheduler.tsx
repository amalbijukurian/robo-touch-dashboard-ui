import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { 
  ArrowLeft,
  MapPin,
  Package,
  Clock,
  Calendar as CalendarIcon,
  Plus
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Scheduler = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  const scheduledDeliveries = [
    {
      id: "SCH-001",
      destination: "555 Future St",
      time: "14:00",
      package: "Electronics",
      date: "Today"
    },
    {
      id: "SCH-002", 
      destination: "777 Tomorrow Ave",
      time: "10:30",
      package: "Documents",
      date: "Tomorrow"
    }
  ];

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
            <h1 className="text-4xl font-bold text-foreground">Delivery Scheduler</h1>
            <p className="text-muted-foreground text-lg">Plan and schedule future deliveries</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Schedule Form */}
          <Card className="p-6 shadow-neu">
            <h2 className="text-2xl font-bold text-foreground mb-6">Schedule New Delivery</h2>
            
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-base font-medium">Destination</Label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="destination"
                    placeholder="Enter delivery address"
                    className="pl-12 h-touch rounded-xl shadow-neu-inset"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="package" className="text-base font-medium">Package Type</Label>
                <div className="relative">
                  <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="package"
                    placeholder="Describe the package"
                    className="pl-12 h-touch rounded-xl shadow-neu-inset"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time" className="text-base font-medium">Delivery Time</Label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input 
                    id="time"
                    type="time"
                    className="pl-12 h-touch rounded-xl shadow-neu-inset"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes" className="text-base font-medium">Special Instructions</Label>
                <Textarea 
                  id="notes"
                  placeholder="Any special delivery instructions..."
                  className="rounded-xl shadow-neu-inset min-h-24"
                />
              </div>

              <Button size="lg" variant="robot" className="w-full">
                <Plus className="mr-2" />
                Schedule Delivery
              </Button>
            </div>
          </Card>

          {/* Calendar */}
          <Card className="p-6 shadow-neu">
            <h2 className="text-2xl font-bold text-foreground mb-6">Select Date</h2>
            
            <div className="space-y-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-xl shadow-neu-inset mx-auto"
              />
              
              <div className="text-center">
                <p className="text-muted-foreground">
                  Selected: {selectedDate?.toLocaleDateString() || "No date selected"}
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Scheduled Deliveries */}
        <Card className="p-6 shadow-neu">
          <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Deliveries</h2>
          
          <div className="space-y-4">
            {scheduledDeliveries.map((delivery) => (
              <div key={delivery.id} className="flex items-center justify-between p-4 rounded-xl bg-muted/50 shadow-neu-inset">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <CalendarIcon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{delivery.id}</h3>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{delivery.destination}</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-medium text-foreground">{delivery.date}</p>
                  <p className="text-muted-foreground">{delivery.time}</p>
                  <p className="text-sm text-muted-foreground">{delivery.package}</p>
                </div>
              </div>
            ))}
          </div>

          {scheduledDeliveries.length === 0 && (
            <div className="text-center py-12">
              <CalendarIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No scheduled deliveries</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Scheduler;