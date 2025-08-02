import Navigation from "@/components/Navigation";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, BookOpen, Trophy, Heart } from "lucide-react";

const About = () => {
  const skills = {
    languages: ["Python", "Java", "C"],
    webFrontend: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Flutter", "Next.js", "React"],
    aiTools: ["TensorFlow", "Keras", "OpenCV", "Hugging Face", "Prompt Engineering", "Midjourney"],
    otherTools: ["Firebase", "REST APIs", "Selenium", "Tkinter", "Git", "VS Code", "Jupyter", "LaTeX"],
    softSkills: ["Critical Thinking", "Problem Solving", "Team Collaboration", "Effective Communication"]
  };

  const achievements = [
    "Published IEEE research paper on driver behavior detection (ICICACS 2025)",
    "1st Prize in AIFI Treasure Hunt and AI-RENA AI-building competitions (6-hour challenges)"
  ];

  const certifications = [
    { title: "Prompt Engineering for Vision Models", org: "DeepLearning.AI", year: "2025" },
    { title: "AI Python for Beginners", org: "DeepLearning.AI", year: "2025" },
    { title: "Data Science Methodology", org: "IBM Cognitive Class", year: "2024" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20 sm:pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6 sm:mb-8">
              <Avatar className="w-24 h-24 sm:w-32 sm:h-32">
                <AvatarImage src="/profile.jpeg" alt="Shaik Tanveer Lohare" />
                <AvatarFallback className="text-xl sm:text-2xl font-bold bg-primary text-primary-foreground">
                  ST
                </AvatarFallback>
              </Avatar>
            </div>
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4 sm:mb-6 text-foreground">
              About Me
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto px-4">
              Computer Science undergraduate with a passion for building clean, scalable, and user-friendly software. 
              Experienced in automation, frontend/backend development, and applied AI. Seeking a software engineering 
              role where I can contribute to impactful projects and grow in a collaborative team environment.
            </p>
          </div>

          {/* Education */}
          <section className="mb-12 sm:mb-16">
            <div className="flex items-center mb-6 sm:mb-8">
              <BookOpen className="text-primary mr-3" size={20} />
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">Education</h2>
            </div>
            <div className="card-shadow bg-card rounded-lg p-4 sm:p-6">
              <h3 className="font-bold text-lg sm:text-xl mb-2">Reva University, Bangalore</h3>
              <p className="text-muted-foreground mb-2 text-sm sm:text-base">B.Tech – Computer Science (AI & ML)</p>
              <p className="text-muted-foreground text-sm sm:text-base">2022–2026 • CGPA: 8.23/10</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="mb-12 sm:mb-16">
            <h2 className="font-heading font-bold text-xl sm:text-2xl mb-6 sm:mb-8 text-foreground">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div className="card-shadow bg-card rounded-lg p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-card-foreground">Languages</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="card-shadow bg-card rounded-lg p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-card-foreground">Web/Frontend</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.webFrontend.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="card-shadow bg-card rounded-lg p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-card-foreground">AI/ML Tools</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.aiTools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="card-shadow bg-card rounded-lg p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-card-foreground">Other Tools</h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.otherTools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs sm:text-sm">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="card-shadow bg-card rounded-lg p-4 sm:p-6 mt-4 sm:mt-6 lg:mt-8">
              <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-card-foreground">Soft Skills</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {skills.softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs sm:text-sm">{skill}</Badge>
                ))}
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-12 sm:mb-16">
            <div className="flex items-center mb-6 sm:mb-8">
              <Trophy className="text-primary mr-3" size={20} />
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-foreground">Achievements</h2>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-shadow bg-card rounded-lg p-4 sm:p-6">
                  <p className="text-card-foreground text-sm sm:text-base leading-relaxed">{achievement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Award className="text-primary mr-3" size={24} />
              <h2 className="font-heading font-bold text-2xl text-foreground">Certifications</h2>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="card-shadow bg-card rounded-lg p-6">
                  <h3 className="font-bold text-lg text-card-foreground">{cert.title}</h3>
                  <p className="text-muted-foreground">{cert.org} • {cert.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section>
            <div className="flex items-center mb-8">
              <Heart className="text-primary mr-3" size={24} />
              <h2 className="font-heading font-bold text-2xl text-foreground">Interests</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-shadow bg-card rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">Tech & Innovation</h3>
                <p className="text-muted-foreground">Building DIY tech gadgets and automation hacks</p>
              </div>
              <div className="card-shadow bg-card rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3 text-card-foreground">Creative Expression</h3>
                <p className="text-muted-foreground">Reading & writing Urdu poetry for cultural connection</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;