
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Array<{
    name: string;
    position: string;
    company: string;
    text: string;
    image: string;
  }>;
}

const Testimonials = ({ title, subtitle, testimonials }: TestimonialsProps) => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-md border-0 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4 text-accounttree-primary">
                  <QuoteIcon size={24} />
                </div>
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "https://randomuser.me/api/portraits/men/1.jpg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
