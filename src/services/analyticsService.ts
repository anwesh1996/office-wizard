
// User data interface
export interface UserData {
  id: string;
  visitCount: number;
  totalTimeSpent: number; // in seconds
  lastVisit: string;
  email?: string;
  name?: string;
  phone?: string;
  interests?: string[];
  allowNotifications: boolean;
}

// Generate a unique user ID
const generateUserId = (): string => {
  return Math.random().toString(36).substring(2, 15) + 
         Math.random().toString(36).substring(2, 15);
};

// Get user data from localStorage
export const getUserData = (): UserData => {
  const storedData = localStorage.getItem('userAnalytics');
  
  if (storedData) {
    return JSON.parse(storedData);
  }
  
  // Initialize new user data
  const newUserData: UserData = {
    id: generateUserId(),
    visitCount: 0,
    totalTimeSpent: 0,
    lastVisit: new Date().toISOString(),
    allowNotifications: false
  };
  
  // Save to localStorage
  localStorage.setItem('userAnalytics', JSON.stringify(newUserData));
  
  return newUserData;
};

// Save user data to localStorage
export const saveUserData = (userData: UserData): void => {
  localStorage.setItem('userAnalytics', JSON.stringify(userData));
};

// Track page visit
export const trackPageVisit = (): void => {
  const userData = getUserData();
  userData.visitCount += 1;
  userData.lastVisit = new Date().toISOString();
  saveUserData(userData);
  
  // Optional: send to backend/analytics service here
  console.log('Page visit tracked', userData);
};

// Track time spent
let startTime: number | null = null;
let timeTrackingInterval: number | null = null;

export const startTimeTracking = (): void => {
  startTime = Date.now();
  
  // Update every 30 seconds
  timeTrackingInterval = window.setInterval(() => {
    if (startTime) {
      const userData = getUserData();
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      startTime = Date.now(); // Reset start time
      
      userData.totalTimeSpent += timeSpent;
      saveUserData(userData);
      
      // Optional: send update to backend/analytics service
      console.log('Time spent updated', timeSpent, 'seconds');
    }
  }, 30000);
};

export const stopTimeTracking = (): void => {
  if (startTime && timeTrackingInterval) {
    // Save final time spent
    const userData = getUserData();
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    userData.totalTimeSpent += timeSpent;
    saveUserData(userData);
    
    // Clear interval
    clearInterval(timeTrackingInterval);
    timeTrackingInterval = null;
    startTime = null;
    
    // Optional: send update to backend/analytics service
    console.log('Time tracking stopped', timeSpent, 'seconds');
  }
};

// Update user profile information
export const updateUserProfile = (
  profileData: Partial<Pick<UserData, 'email' | 'name' | 'phone' | 'interests' | 'allowNotifications'>>
): void => {
  const userData = getUserData();
  const updatedUserData = { ...userData, ...profileData };
  saveUserData(updatedUserData);
  
  // Optional: send to backend/analytics service
  console.log('User profile updated', updatedUserData);
};
