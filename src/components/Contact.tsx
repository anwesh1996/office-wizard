
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface ContactProps {
  title: string;
  subtitle: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
}

const Contact = ({ title, subtitle, address, phone, email, hours }: ContactProps) => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" className="bg-white" />
                </div>
                <div>
                  <Input placeholder="Your Email" type="email" className="bg-white" />
                </div>
              </div>
              <div>
                <Input placeholder="Subject" className="bg-white" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={5} className="bg-white" />
              </div>
              <div>
                <Button className="w-full bg-accounttree-primary hover:bg-accounttree-dark">Send Message</Button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">Contact Information</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <MapPin className="text-accounttree-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">{address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Phone className="text-accounttree-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">{phone}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Mail className="text-accounttree-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">{email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="text-accounttree-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <p className="text-gray-600">{hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
