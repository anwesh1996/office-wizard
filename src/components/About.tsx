
import { icons } from "lucide-react";

interface AboutProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const About = ({ title, subtitle, description, image, features }: AboutProps) => {
  const renderIcon = (iconName: string) => {
    const LucideIcon = icons[iconName as keyof typeof icons];
    return LucideIcon ? <LucideIcon size={24} className="text-accounttree-primary" /> : null;
  };

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {renderIcon(feature.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src={image || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"}
              alt="About Account Tree"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
