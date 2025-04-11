
import { icons } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fade-in">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {["Building", "Briefcase", "Globe"].map((iconName, index) => {
              const LucideIcon = icons[iconName as keyof typeof icons];
              return LucideIcon ? (
                <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <LucideIcon size={32} className="text-white" />
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
    </section>
  );
};

export default Hero;
