import { useContext, useState } from "react";
import { ContentContext, SiteContent } from "../App";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Save } from "lucide-react";
import { Link } from "react-router-dom";
import AnalyticsDashboard from "../components/AnalyticsDashboard";

const Admin = () => {
  const { content, setContent } = useContext(ContentContext);
  const [workingContent, setWorkingContent] = useState<SiteContent>({ ...content });
  const { toast } = useToast();

  const handleSave = () => {
    setContent(workingContent);
    toast({
      title: "Changes saved",
      description: "Your changes have been successfully saved",
    });
  };

  const updateLogo = (logo: string) => {
    setWorkingContent({ ...workingContent, logo });
  };

  const updateHero = (key: keyof typeof workingContent.hero, value: string) => {
    setWorkingContent({
      ...workingContent,
      hero: { ...workingContent.hero, [key]: value },
    });
  };

  const updateAbout = (key: keyof typeof workingContent.about, value: string) => {
    setWorkingContent({
      ...workingContent,
      about: { ...workingContent.about, [key]: value },
    });
  };

  const updateAboutFeature = (index: number, key: string, value: string) => {
    const updatedFeatures = [...workingContent.about.features];
    updatedFeatures[index] = {
      ...updatedFeatures[index],
      [key]: value,
    };
    setWorkingContent({
      ...workingContent,
      about: { ...workingContent.about, features: updatedFeatures },
    });
  };

  const updateService = (index: number, key: string, value: string) => {
    const updatedServices = [...workingContent.services.items];
    updatedServices[index] = {
      ...updatedServices[index],
      [key]: value,
    };
    setWorkingContent({
      ...workingContent,
      services: { ...workingContent.services, items: updatedServices },
    });
  };

  const updateServicesSection = (key: keyof typeof workingContent.services, value: string) => {
    setWorkingContent({
      ...workingContent,
      services: { ...workingContent.services, [key]: value },
    });
  };

  const updateTestimonial = (index: number, key: string, value: string) => {
    const updatedTestimonials = [...workingContent.testimonials.items];
    updatedTestimonials[index] = {
      ...updatedTestimonials[index],
      [key]: value,
    };
    setWorkingContent({
      ...workingContent,
      testimonials: { ...workingContent.testimonials, items: updatedTestimonials },
    });
  };

  const updateTestimonialsSection = (key: keyof typeof workingContent.testimonials, value: string) => {
    setWorkingContent({
      ...workingContent,
      testimonials: { ...workingContent.testimonials, [key]: value },
    });
  };

  const updateContact = (key: keyof typeof workingContent.contact, value: string) => {
    setWorkingContent({
      ...workingContent,
      contact: { ...workingContent.contact, [key]: value },
    });
  };

  const updateFooter = (key: keyof typeof workingContent.footer, value: string) => {
    setWorkingContent({
      ...workingContent,
      footer: { ...workingContent.footer, [key]: value },
    });
  };

  const updateSocialLink = (index: number, key: string, value: string) => {
    const updatedSocialLinks = [...workingContent.footer.socialLinks];
    updatedSocialLinks[index] = {
      ...updatedSocialLinks[index],
      [key]: value,
    };
    setWorkingContent({
      ...workingContent,
      footer: { ...workingContent.footer, socialLinks: updatedSocialLinks },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" className="gap-2">
                <ArrowLeft size={16} />
                Back to Site
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">Office Wizards Admin</h1>
          </div>
          <Button onClick={handleSave} className="gap-2 bg-accounttree-primary hover:bg-accounttree-dark">
            <Save size={16} />
            Save Changes
          </Button>
        </div>

        <Tabs defaultValue="general">
          <TabsList className="grid grid-cols-7 mb-8">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="hero">Hero</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="contact">Contact & Footer</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>
                  Update your site's logo and branding.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo">Logo URL</Label>
                  <Input
                    id="logo"
                    value={workingContent.logo}
                    onChange={(e) => updateLogo(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter the URL for your logo image
                  </p>
                </div>
                <div className="pt-4">
                  <h3 className="font-medium mb-2">Logo Preview</h3>
                  <div className="border rounded-md p-4 flex justify-center">
                    <img
                      src={workingContent.logo}
                      alt="Logo Preview"
                      className="h-16 object-contain"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hero">
            <Card>
              <CardHeader>
                <CardTitle>Hero Section</CardTitle>
                <CardDescription>
                  Update your homepage hero section.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="heroTitle">Title</Label>
                  <Input
                    id="heroTitle"
                    value={workingContent.hero.title}
                    onChange={(e) => updateHero("title", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="heroSubtitle">Subtitle</Label>
                  <Input
                    id="heroSubtitle"
                    value={workingContent.hero.subtitle}
                    onChange={(e) => updateHero("subtitle", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services Section</CardTitle>
                <CardDescription>
                  Manage your services information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="servicesTitle">Section Title</Label>
                    <Input
                      id="servicesTitle"
                      value={workingContent.services.title}
                      onChange={(e) => updateServicesSection("title", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="servicesSubtitle">Section Subtitle</Label>
                    <Input
                      id="servicesSubtitle"
                      value={workingContent.services.subtitle}
                      onChange={(e) => updateServicesSection("subtitle", e.target.value)}
                    />
                  </div>
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium mb-4">Service Items</h3>
                
                {workingContent.services.items.map((service, index) => (
                  <div key={index} className="border rounded-md p-4 mb-4">
                    <h4 className="font-medium mb-2">Service {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="space-y-2">
                        <Label htmlFor={`service-${index}-icon`}>Icon Name</Label>
                        <Input
                          id={`service-${index}-icon`}
                          value={service.icon}
                          onChange={(e) => updateService(index, "icon", e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">Use Lucide icon names (e.g., Calculator, LineChart)</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`service-${index}-title`}>Title</Label>
                        <Input
                          id={`service-${index}-title`}
                          value={service.title}
                          onChange={(e) => updateService(index, "title", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`service-${index}-description`}>Description</Label>
                      <Textarea
                        id={`service-${index}-description`}
                        value={service.description}
                        onChange={(e) => updateService(index, "description", e.target.value)}
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="about">
            <Card>
              <CardHeader>
                <CardTitle>About Section</CardTitle>
                <CardDescription>
                  Manage your about us information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="aboutTitle">Section Title</Label>
                    <Input
                      id="aboutTitle"
                      value={workingContent.about.title}
                      onChange={(e) => updateAbout("title", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="aboutSubtitle">Section Subtitle</Label>
                    <Input
                      id="aboutSubtitle"
                      value={workingContent.about.subtitle}
                      onChange={(e) => updateAbout("subtitle", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aboutDescription">Description</Label>
                  <Textarea
                    id="aboutDescription"
                    value={workingContent.about.description}
                    onChange={(e) => updateAbout("description", e.target.value)}
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aboutImage">Image URL</Label>
                  <Input
                    id="aboutImage"
                    value={workingContent.about.image}
                    onChange={(e) => updateAbout("image", e.target.value)}
                  />
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium mb-4">Features</h3>
                
                {workingContent.about.features.map((feature, index) => (
                  <div key={index} className="border rounded-md p-4 mb-4">
                    <h4 className="font-medium mb-2">Feature {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="space-y-2">
                        <Label htmlFor={`feature-${index}-icon`}>Icon Name</Label>
                        <Input
                          id={`feature-${index}-icon`}
                          value={feature.icon}
                          onChange={(e) => updateAboutFeature(index, "icon", e.target.value)}
                        />
                        <p className="text-xs text-muted-foreground">Use Lucide icon names (e.g., Award, Shield)</p>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`feature-${index}-title`}>Title</Label>
                        <Input
                          id={`feature-${index}-title`}
                          value={feature.title}
                          onChange={(e) => updateAboutFeature(index, "title", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`feature-${index}-description`}>Description</Label>
                      <Textarea
                        id={`feature-${index}-description`}
                        value={feature.description}
                        onChange={(e) => updateAboutFeature(index, "description", e.target.value)}
                        rows={2}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials">
            <Card>
              <CardHeader>
                <CardTitle>Testimonials Section</CardTitle>
                <CardDescription>
                  Manage your client testimonials.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="testimonialsTitle">Section Title</Label>
                    <Input
                      id="testimonialsTitle"
                      value={workingContent.testimonials.title}
                      onChange={(e) => updateTestimonialsSection("title", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="testimonialsSubtitle">Section Subtitle</Label>
                    <Input
                      id="testimonialsSubtitle"
                      value={workingContent.testimonials.subtitle}
                      onChange={(e) => updateTestimonialsSection("subtitle", e.target.value)}
                    />
                  </div>
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium mb-4">Testimonial Items</h3>
                
                {workingContent.testimonials.items.map((testimonial, index) => (
                  <div key={index} className="border rounded-md p-4 mb-4">
                    <h4 className="font-medium mb-2">Testimonial {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="space-y-2">
                        <Label htmlFor={`testimonial-${index}-name`}>Name</Label>
                        <Input
                          id={`testimonial-${index}-name`}
                          value={testimonial.name}
                          onChange={(e) => updateTestimonial(index, "name", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`testimonial-${index}-position`}>Position</Label>
                        <Input
                          id={`testimonial-${index}-position`}
                          value={testimonial.position}
                          onChange={(e) => updateTestimonial(index, "position", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-2">
                      <div className="space-y-2">
                        <Label htmlFor={`testimonial-${index}-company`}>Company</Label>
                        <Input
                          id={`testimonial-${index}-company`}
                          value={testimonial.company}
                          onChange={(e) => updateTestimonial(index, "company", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`testimonial-${index}-image`}>Image URL</Label>
                        <Input
                          id={`testimonial-${index}-image`}
                          value={testimonial.image}
                          onChange={(e) => updateTestimonial(index, "image", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`testimonial-${index}-text`}>Testimonial Text</Label>
                      <Textarea
                        id={`testimonial-${index}-text`}
                        value={testimonial.text}
                        onChange={(e) => updateTestimonial(index, "text", e.target.value)}
                        rows={3}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact & Footer</CardTitle>
                <CardDescription>
                  Manage your contact information and footer settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <h3 className="font-medium mb-2">Contact Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactTitle">Contact Title</Label>
                    <Input
                      id="contactTitle"
                      value={workingContent.contact.title}
                      onChange={(e) => updateContact("title", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactSubtitle">Contact Subtitle</Label>
                    <Input
                      id="contactSubtitle"
                      value={workingContent.contact.subtitle}
                      onChange={(e) => updateContact("subtitle", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactAddress">Address</Label>
                    <Input
                      id="contactAddress"
                      value={workingContent.contact.address}
                      onChange={(e) => updateContact("address", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone</Label>
                    <Input
                      id="contactPhone"
                      value={workingContent.contact.phone}
                      onChange={(e) => updateContact("phone", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input
                      id="contactEmail"
                      value={workingContent.contact.email}
                      onChange={(e) => updateContact("email", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactHours">Business Hours</Label>
                    <Input
                      id="contactHours"
                      value={workingContent.contact.hours}
                      onChange={(e) => updateContact("hours", e.target.value)}
                    />
                  </div>
                </div>

                <Separator className="my-4" />

                <h3 className="font-medium mb-2">Footer</h3>
                <div className="space-y-2 mb-4">
                  <Label htmlFor="footerCopyright">Copyright Text</Label>
                  <Input
                    id="footerCopyright"
                    value={workingContent.footer.copyright}
                    onChange={(e) => updateFooter("copyright", e.target.value)}
                  />
                </div>

                <h4 className="font-medium mb-2">Social Links</h4>
                {workingContent.footer.socialLinks.map((link, index) => (
                  <div key={index} className="grid grid-cols-2 gap-4 mb-2">
                    <div className="space-y-2">
                      <Label htmlFor={`social-${index}-icon`}>Icon Name</Label>
                      <Input
                        id={`social-${index}-icon`}
                        value={link.icon}
                        onChange={(e) => updateSocialLink(index, "icon", e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">Use Lucide icon names (e.g., Facebook, Twitter)</p>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`social-${index}-url`}>URL</Label>
                      <Input
                        id={`social-${index}-url`}
                        value={link.url}
                        onChange={(e) => updateSocialLink(index, "url", e.target.value)}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>User Analytics</CardTitle>
                <CardDescription>
                  Track user visits and engagement with your site
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsDashboard />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
