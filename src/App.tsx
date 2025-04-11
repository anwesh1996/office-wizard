import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import UserDataForm from "./components/UserDataForm";

export type SiteContent = {
  logo: string;
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  services: {
    title: string;
    subtitle: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      position: string;
      company: string;
      text: string;
      image: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    hours: string;
  };
  footer: {
    copyright: string;
    socialLinks: Array<{
      icon: string;
      url: string;
    }>;
  };
};

export const defaultContent: SiteContent = {
  logo: "/placeholder.svg",
  hero: {
    title: "Complete Office Workspace Solutions for Global Enterprises",
    subtitle: "Your trusted partner for setting up and managing office spaces across India",
  },
  about: {
    title: "About Office Wizards",
    subtitle: "Your Complete Workspace Solution Provider",
    description: "Office Wizards specializes in helping multinational companies establish their presence in India. With over 10 years of experience, we provide end-to-end solutions from office space acquisition to legal compliance and ongoing facility management.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        icon: "Briefcase",
        title: "Industry Expertise",
        description: "Our team brings extensive knowledge of India's real estate market and regulatory landscape",
      },
      {
        icon: "ShieldCheck",
        title: "Regulatory Compliance",
        description: "We ensure all legal and regulatory requirements are met for your office setup",
      },
      {
        icon: "Clock",
        title: "Time Efficiency",
        description: "We streamline the setup process, reducing your time-to-operation by up to 40%",
      },
    ],
  },
  services: {
    title: "Our Services",
    subtitle: "Comprehensive Workspace Solutions",
    items: [
      {
        icon: "Building",
        title: "Office Space Acquisition",
        description: "Finding and securing the perfect office location that meets your specific requirements",
      },
      {
        icon: "LayoutDashboard",
        title: "Workspace Planning",
        description: "Professional space planning and interior design to maximize productivity",
      },
      {
        icon: "ScrollText",
        title: "Legal Compliance",
        description: "Handling all regulatory requirements for establishing your office in India",
      },
      {
        icon: "Wrench",
        title: "Facility Management",
        description: "Ongoing management and maintenance of your office facilities",
      },
      {
        icon: "Network",
        title: "IT Infrastructure",
        description: "Setting up reliable IT networks and systems for your office",
      },
      {
        icon: "UserPlus",
        title: "Staffing Support",
        description: "Assistance with recruiting support staff for your office operations",
      },
    ],
  },
  testimonials: {
    title: "Client Testimonials",
    subtitle: "What Our Global Partners Say",
    items: [
      {
        name: "Sarah Johnson",
        position: "Director of Operations",
        company: "TechGlobal Inc.",
        text: "Office Wizards made our expansion to India seamless. Their expertise in navigating local regulations saved us months of effort.",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        name: "Mark Wilson",
        position: "Regional Manager",
        company: "Nexus Solutions",
        text: "The team at Office Wizards provided exceptional service from location scouting to final setup. Our new Mumbai office exceeds expectations.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Jennifer Lee",
        position: "VP of Global Expansion",
        company: "Innovate Systems",
        text: "Working with Office Wizards for our Bangalore office setup was the best decision we made. Their comprehensive approach covered every detail.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
    ],
  },
  contact: {
    title: "Contact Us",
    subtitle: "Begin Your Office Setup Journey",
    address: "Level 12, Cyber Tower, Hitec City, Hyderabad 500081, India",
    phone: "+91 (40) 6789-5432",
    email: "info@officewizards.com",
    hours: "Monday-Friday: 9am-6pm IST",
  },
  footer: {
    copyright: "© 2025 Office Wizards. All rights reserved.",
    socialLinks: [
      {
        icon: "Linkedin",
        url: "https://linkedin.com",
      },
      {
        icon: "Twitter",
        url: "https://twitter.com",
      },
      {
        icon: "Instagram",
        url: "https://instagram.com",
      },
    ],
  },
};

export const ContentContext = createContext<{
  content: SiteContent;
  setContent: React.Dispatch<React.SetStateAction<SiteContent>>;
}>({
  content: defaultContent,
  setContent: () => {},
});

const queryClient = new QueryClient();

const App = () => {
  const [content, setContent] = useState<SiteContent>(defaultContent);

  return (
    <QueryClientProvider client={queryClient}>
      <ContentContext.Provider value={{ content, setContent }}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ContentContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
