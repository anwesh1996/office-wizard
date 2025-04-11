
import { icons } from "lucide-react";

interface ServiceProps {
  title: string;
  subtitle: string;
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const Services = ({ title, subtitle, services }: ServiceProps) => {
  const renderIcon = (iconName: string) => {
    const LucideIcon = icons[iconName as keyof typeof icons];
    return LucideIcon ? <LucideIcon size={36} className="text-blue-600 mb-4" /> : null;
  };

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-white rounded-lg shadow-lg p-6 text-center border border-gray-100 hover:border-blue-200 transition-all"
            >
              <div className="flex justify-center">
                {renderIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
