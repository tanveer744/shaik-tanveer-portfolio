import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const Experience = () => {
  return (
    <section className="py-20" id="experience">
      <div className="container mx-auto px-4">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('up')}
          className="mb-12 text-center"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-foreground leading-tight">
            Professional Experience
            <br />
            <span className="hero-gradient bg-clip-text text-transparent">Full Stack Development Intern</span>
          </h2>
          <div className="border-b-2 border-primary w-24 mx-auto"></div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn('up')}
          className="bg-secondary/10 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-4">Dev Creations and Solutions</h3>
              <p className="text-gray-400 mb-6">April 2025 - Present</p>
              
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-primary">🚀</span>
                  <span className="text-muted-foreground">Develops desktop and web applications to streamline vendor inventory, billing, and daily operations</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🎨</span>
                  <span className="text-muted-foreground">Designs and implements intuitive UI and business logic to optimize workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">🚀</span>
                  <span className="text-muted-foreground">Optimizes application performance for real-world environments</span>
                </li>
              </ul>
            </div>
            
            <div className="flex-1">
              <h4 className="text-xl font-semibold mb-4">Tech Stack</h4>
              <div className="grid grid-cols-2 gap-4">
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">HTML</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">CSS</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">JavaScript</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">Flutter</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">Firebase</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">REST APIs</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">Git</span>
                <span className="px-4 py-2 bg-secondary/20 rounded-full text-sm font-medium">VS Code</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
