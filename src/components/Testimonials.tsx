import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Tanveer demonstrated exceptional problem-solving skills and delivered a robust vendor management system that significantly improved our operational efficiency.",
      author: "Project Supervisor",
      role: "Dev Creations and Solutions",
      company: "Internship Supervisor"
    },
    {
      quote: "His deep learning model for road rage detection achieved remarkable accuracy. The research quality and implementation were truly impressive for an undergraduate project.",
      author: "Dr. Research Mentor",
      role: "IEEE Publication Reviewer",
      company: "ICICACS 2025"
    },
    {
      quote: "Tanveer's automation tools saved our team countless hours. His attention to detail and user-centric approach made the LinkedIn automation tool both powerful and intuitive.",
      author: "Team Collaborator",
      role: "AI Competition Partner",
      company: "AIFI Challenge Winner"
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-foreground">
            What Others Say
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Feedback from supervisors, mentors, and collaborators I've worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-shadow bg-card rounded-lg p-4 sm:p-6 relative">
              <Quote className="text-primary mb-4" size={20} />
              <blockquote className="text-sm sm:text-base text-card-foreground mb-4 sm:mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-card-foreground text-sm sm:text-base">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</div>
                </cite>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;