import React from 'react';
import { Github, Twitter, Linkedin, Mail, Code, Zap, Database, Cpu, Globe, Smartphone } from 'lucide-react';
import { GradientIconList } from '@/components/ui/gradient-icon-list';

export default function IconsDemo() {
  const socialIcons = [
    {
      id: 'github',
      icon: <Github />,
      title: 'GitHub',
      gradientFrom: '#333333',
      gradientTo: '#6e5494'
    },
    {
      id: 'twitter',
      icon: <Twitter />,
      title: 'Twitter',
      gradientFrom: '#1DA1F2',
      gradientTo: '#1DA1F2'
    },
    {
      id: 'linkedin',
      icon: <Linkedin />,
      title: 'LinkedIn',
      gradientFrom: '#0077B5',
      gradientTo: '#00A0DC'
    },
    {
      id: 'email',
      icon: <Mail />,
      title: 'Email',
      gradientFrom: '#D44638',
      gradientTo: '#EA4335'
    }
  ];

  const techIcons = [
    {
      id: 'web',
      icon: <Globe />,
      title: 'Web Dev',
      gradientFrom: '#4F46E5',
      gradientTo: '#7C3AED'
    },
    {
      id: 'mobile',
      icon: <Smartphone />,
      title: 'Mobile',
      gradientFrom: '#10B981',
      gradientTo: '#059669'
    },
    {
      id: 'api',
      icon: <Code />,
      title: 'APIs',
      gradientFrom: '#F59E0B',
      gradientTo: '#D97706'
    },
    {
      id: 'db',
      icon: <Database />,
      title: 'Database',
      gradientFrom: '#EC4899',
      gradientTo: '#DB2777'
    },
    {
      id: 'ai',
      icon: <Cpu />,
      title: 'AI/ML',
      gradientFrom: '#8B5CF6',
      gradientTo: '#7C3AED'
    },
    {
      id: 'devops',
      icon: <Zap />,
      title: 'DevOps',
      gradientFrom: '#F97316',
      gradientTo: '#EA580C'
    }
  ];

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-foreground">
          Gradient Icons
        </h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-xl font-semibold mb-6 text-foreground/90">
              Social Links
            </h2>
            <GradientIconList 
              items={socialIcons}
              className="justify-center"
              itemClassName="w-14 h-14"
            />
          </section>
          
          <section>
            <h2 className="text-xl font-semibold mb-6 text-foreground/90">
              Tech Stack
            </h2>
            <GradientIconList 
              items={techIcons}
              className="justify-center"
              itemClassName="w-16 h-16"
            />
          </section>
        </div>
        
        <div className="mt-16 text-center text-muted-foreground text-sm">
          <p>Hover over the icons to see the gradient effect</p>
        </div>
      </div>
    </div>
  );
}
