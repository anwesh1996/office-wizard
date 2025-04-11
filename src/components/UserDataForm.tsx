
import { useState } from "react";
import { getUserData, updateUserProfile, UserData } from "@/services/analyticsService";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, X } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const UserDataForm = () => {
  const { toast } = useToast();
  const storedUserData = getUserData();
  
  const [formData, setFormData] = useState({
    email: storedUserData.email || "",
    name: storedUserData.name || "",
    phone: storedUserData.phone || "",
    interests: storedUserData.interests?.join(", ") || "",
    allowNotifications: storedUserData.allowNotifications || false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData({ ...formData, allowNotifications: checked });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Process interests string into array
    const interestsArray = formData.interests
      ? formData.interests.split(",").map(item => item.trim())
      : undefined;
    
    // Update user profile
    updateUserProfile({
      email: formData.email,
      name: formData.name,
      phone: formData.phone,
      interests: interestsArray,
      allowNotifications: formData.allowNotifications,
    });
    
    toast({
      title: "Profile Updated",
      description: "Your information has been saved.",
    });
  };

  const handleCancel = () => {
    // Reset form to stored values
    const storedData = getUserData();
    setFormData({
      email: storedData.email || "",
      name: storedData.name || "",
      phone: storedData.phone || "",
      interests: storedData.interests?.join(", ") || "",
      allowNotifications: storedData.allowNotifications || false,
    });
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
        <CardDescription>
          Provide your information to receive personalized updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="John Doe"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="john@example.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+91 1234567890"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="interests">Interests (comma separated)</Label>
            <Input
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleInputChange}
              placeholder="Office setup, Legal compliance, IT infrastructure"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="notifications">Receive Updates</Label>
              <p className="text-sm text-muted-foreground">
                Allow email notifications about our services
              </p>
            </div>
            <Switch
              id="notifications"
              checked={formData.allowNotifications}
              onCheckedChange={handleSwitchChange}
            />
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleCancel}
              className="gap-1"
            >
              <X size={16} />
              Cancel
            </Button>
            <Button type="submit" className="gap-1">
              <Check size={16} />
              Save
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UserDataForm;
