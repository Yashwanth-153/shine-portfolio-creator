
import { Calendar, Code, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "Secure Data Sharing in Cloud Storage",
      subtitle: "Secret Sharing Group Key (SSGK)",
      duration: "August 2024 – December 2024",
      technologies: ["Python", "Cryptographic Algorithms", "Cloud Storage Concepts"],
      description: "Developed a secure data sharing protocol (SSGK) for cloud environments using group key encryption and secret sharing techniques.",
      features: [
        "Ensured only authorized users can access confidential data by distributing encrypted group keys securely",
        "Performed extensive security and performance analysis to validate the protocol's effectiveness"
      ],
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "GUIDE ME: Smart Parking Solution",
      subtitle: "Smart Parking System",
      duration: "Aug 2022 – Dec 2022",
      technologies: ["HTML", "CSS", "PHP", "JavaScript", "Admin Panel"],
      description: "Developed a smart parking solution to reduce traffic congestion and improve space utilization in malls, buildings, and urban areas.",
      features: [
        "Built a mobile application to display available parking spots and allow users to book slots remotely",
        "Implemented a feature allowing users to book a driver to park or retrieve their vehicle when the main lot is full"
      ],
      icon: <Code className="w-6 h-6" />
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.duration}
                  </div>
                </div>
                <CardTitle className="text-white">{project.title}</CardTitle>
                <CardDescription className="text-cyan-300 font-medium">
                  {project.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm flex items-start">
                        <span className="text-cyan-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
