import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: `${label} copied successfully!`,
    });
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "shaiktanveer07404@gmail.com",
      href: "mailto:shaiktanveer07404@gmail.com",
      description: "Best way to reach me for opportunities and collaborations"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "linkedin.com/in/shaik-tanveer-lohare",
      href: "https://linkedin.com/in/shaik-tanveer-lohare",
      description: "Connect with me professionally"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/tanveer744",
      href: "https://github.com/tanveer744",
      description: "Check out my code and projects"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-foreground">
              Let's Connect
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto px-4">
              I'm always interested in new opportunities, interesting projects, and meaningful conversations. 
              Feel free to reach out!
            </p>
          </div>

          {/* Location */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-primary mr-2" size={18} />
              <span className="text-muted-foreground text-sm sm:text-base">Based in Bangalore, India</span>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            {contactMethods.map((method) => (
              <div key={method.label} className="card-shadow bg-card rounded-lg p-4 sm:p-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-primary mt-1">
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base sm:text-lg mb-2 text-card-foreground">{method.label}</h3>
                    <p className="text-muted-foreground mb-3 text-sm sm:text-base">{method.description}</p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
                      <a
                        href={method.href}
                        target={method.href.startsWith('http') ? '_blank' : undefined}
                        rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary hover:underline font-mono text-sm break-all"
                      >
                        {method.value}
                      </a>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(method.value, method.label)}
                        className="p-2 h-8 w-8 flex-shrink-0"
                      >
                        <Copy size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mb-16">
            <ContactForm />
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="card-shadow bg-card rounded-lg p-8">
              <h2 className="font-heading font-bold text-2xl mb-4 text-card-foreground">
                Interested in Working Together?
              </h2>
              <p className="text-muted-foreground mb-6">
                I'm currently seeking software engineering opportunities where I can contribute to 
                impactful projects and grow in a collaborative environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="mailto:shaiktanveer07404@gmail.com">
                  <Button size="lg">
                    <Mail size={16} className="mr-2" />
                    Quick Email
                  </Button>
                </a>
                <a href="/resume/Shaik-Tanveer-Lohare-Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    View Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;