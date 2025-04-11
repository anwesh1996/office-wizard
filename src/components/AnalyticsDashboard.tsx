
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserData, UserData } from "@/services/analyticsService";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";

// Sample data for demonstration
const SAMPLE_DATA = [
  { name: "Mon", visits: 10 },
  { name: "Tue", visits: 15 },
  { name: "Wed", visits: 8 },
  { name: "Thu", visits: 12 },
  { name: "Fri", visits: 20 },
  { name: "Sat", visits: 5 },
  { name: "Sun", visits: 3 },
];

const AnalyticsDashboard = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [subscribedUsers, setSubscribedUsers] = useState(0);

  useEffect(() => {
    // For a real implementation, this would fetch data from a backend
    // For now, we'll use localStorage data for the current user
    const currentUserData = getUserData();
    setUserData(currentUserData);

    // Simulate having some subscribed users
    setSubscribedUsers(145);
  }, []);

  // Format time spent in hours and minutes
  const formatTimeSpent = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,254</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Time on Site</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8m 42s</div>
            <p className="text-xs text-muted-foreground">+2% from last month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Subscribed Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribedUsers}</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Weekly Visitors</CardTitle>
          <CardDescription>
            Number of visitors to your site this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={SAMPLE_DATA}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Current User Analytics</CardTitle>
          <CardDescription>
            Data for the current browsing session
          </CardDescription>
        </CardHeader>
        <CardContent>
          {userData ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium">User ID</p>
                <p className="text-xs text-muted-foreground truncate">{userData.id}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Visit Count</p>
                <p>{userData.visitCount} visits</p>
              </div>
              <div>
                <p className="text-sm font-medium">Total Time Spent</p>
                <p>{formatTimeSpent(userData.totalTimeSpent)}</p>
              </div>
              <div>
                <p className="text-sm font-medium">Last Visit</p>
                <p>{new Date(userData.lastVisit).toLocaleString()}</p>
              </div>
              {userData.email && (
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p>{userData.email}</p>
                </div>
              )}
              {userData.interests && userData.interests.length > 0 && (
                <div>
                  <p className="text-sm font-medium">Interests</p>
                  <p>{userData.interests.join(", ")}</p>
                </div>
              )}
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsDashboard;
