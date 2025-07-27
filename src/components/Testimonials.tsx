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
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-foreground">
            What Others Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from supervisors, mentors, and collaborators I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-shadow bg-card rounded-lg p-6 relative">
              <Quote className="text-primary mb-4" size={24} />
              <blockquote className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border pt-4">
                <cite className="not-italic">
                  <div className="font-semibold text-card-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
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