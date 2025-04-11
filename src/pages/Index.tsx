
import { useContext, useEffect } from "react";
import { ContentContext } from "../App";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { trackPageVisit, startTimeTracking, stopTimeTracking } from "@/services/analyticsService";
import { Helmet } from "react-helmet";

const Index = () => {
  const { content } = useContext(ContentContext);

  // Initialize analytics tracking
  useEffect(() => {
    // Track page visit
    trackPageVisit();
    
    // Start tracking time spent
    startTimeTracking();
    
    // Clean up when component unmounts
    return () => {
      stopTimeTracking();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {/* Facebook Pixel Code */}
        <script>
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_FACEBOOK_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </script>

        {/* LinkedIn Insight Tag */}
        <script>
          {`
            _linkedin_partner_id = "YOUR_LINKEDIN_PARTNER_ID";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);
          `}
        </script>

        {/* Twitter Pixel */}
        <script>
          {`
            !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
            },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
            a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
            twq('init', 'YOUR_TWITTER_PIXEL_ID');
            twq('track','PageView');
          `}
        </script>
      </Helmet>
      <Navbar logo={content.logo} />
      <main className="flex-grow">
        <Hero
          title={content.hero.title}
          subtitle={content.hero.subtitle}
        />
        <Services
          title={content.services.title}
          subtitle={content.services.subtitle}
          services={content.services.items}
        />
        <About
          title={content.about.title}
          subtitle={content.about.subtitle}
          description={content.about.description}
          image={content.about.image}
          features={content.about.features}
        />
        <Testimonials
          title={content.testimonials.title}
          subtitle={content.testimonials.subtitle}
          testimonials={content.testimonials.items}
        />
        <Contact
          title={content.contact.title}
          subtitle={content.contact.subtitle}
          address={content.contact.address}
          phone={content.contact.phone}
          email={content.contact.email}
          hours={content.contact.hours}
        />
      </main>
      <Footer
        copyright={content.footer.copyright}
        socialLinks={content.footer.socialLinks}
      />
    </div>
  );
};

export default Index;
